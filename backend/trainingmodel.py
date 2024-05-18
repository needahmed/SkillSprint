import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib  

# Load the dataset
df = pd.read_csv('Career_Path_Dataset.csv')

# Prepare data
X = df.drop('Career_Path', axis=1)  # Features
y = df['Career_Path']               # Target variable

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Random Forest Classifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the model
rf.fit(X_train, y_train)

# Save the model to disk
joblib.dump(rf, 'career_path_classifier.joblib')
print("Model saved to career_path_classifier.joblib")

# Predict on the testing set
y_pred = rf.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))
