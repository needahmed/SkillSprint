from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import traceback

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('career_path_classifier.joblib')

@app.route('/predict', methods=['POST'])
def predict_career_path():
    try:
        data = request.get_json()
        print("Received data:", data)
        
        if 'answers' not in data:
            raise KeyError('The "answers" key is required in the payload.')
        
        answers = data['answers']
        
        # Ensure the number of answers matches the model's feature expectations
        expected_number_of_answers = 15  # Adjust based on your model's feature count
        if len(answers) != expected_number_of_answers:
            raise ValueError(f"Expected {expected_number_of_answers} answers, but got {len(answers)}.")

        prediction = model.predict([answers])
        return jsonify({'careerPath': prediction[0]})
    
    except KeyError as ke:  
        print(traceback.format_exc())
        return jsonify({'error': str(ke)}), 400
    
    except ValueError as ve:
        print(traceback.format_exc())
        return jsonify({'error': str(ve)}), 400

    except Exception as e:
        print(traceback.format_exc())
        return jsonify({'error': 'An error occurred processing your request.'}), 500

if __name__ == "__main__":
    app.run(debug=True)
