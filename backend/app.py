from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import hmac
import hashlib

app = Flask(__name__)
CORS(app)

# Replace these variables with your actual values
PUBLIC_KEY = 'bdf37820f288f7a54c08f9c798b3c5ee578e404d423cb3a2df11c8634ec6a306'
PRIVATE_KEY = '52270D8D3c4BA93f095C31D66724f6e6163f3545Ef86b73F8413A924662Fce84'
IPN_SECRET = 'ayoniggaghost'
CLERK_API_KEY = 'sk_test_fMYnfT4Nf0Kph2CmegAu5UewUp5k4yUusKUg3vIcYU'

def create_hmac(secret, message):
    return hmac.new(secret.encode(), message.encode(), hashlib.sha512).hexdigest()

def coinpayments_request(params):
    params['version'] = 1
    params['key'] = PUBLIC_KEY
    params['format'] = 'json'
    post_data = requests.post('https://www.coinpayments.net/api.php', data=params)
    return post_data.json()

# Endpoint to create a payment
@app.route('/api/create-payment', methods=['POST'])
def create_payment():
    try:
        data = request.json
        params = {
            'cmd': 'create_transaction',
            'amount': 5.00,  # Fixed amount in USD
            'currency1': 'USD',  # Currency in which amount is specified
            'currency2': 'SOL',  # Currency to receive payment in Solana
            'buyer_email': data['email'],
            'item_name': 'Payment for SkillSprint',
            'ipn_url': 'https://yourdomain.com/ipn',  # Your IPN callback URL
            'custom': data['order_id']  # Custom data to identify the transaction
        }
        response = coinpayments_request(params)
        return jsonify(response)
    except Exception as e:
        print(f"Error creating payment: {e}")
        return jsonify({'error': 'Error creating payment'}), 500

# IPN endpoint to handle payment status updates
@app.route('/ipn', methods=['POST'])
def ipn():
    try:
        # Verify the HMAC signature
        request_hmac = request.headers.get('hmac')
        payload = request.form.to_dict()
        payload_sorted = '&'.join(f"{k}={v}" for k, v in sorted(payload.items()))
        hmac_calculated = create_hmac(IPN_SECRET, payload_sorted)
        
        if hmac_calculated != request_hmac:
            return 'Invalid HMAC signature', 400
        
        # Process the payment status update
        payment_status = request.form.get('status')
        order_id = request.form.get('custom')

        if payment_status == '100':  # Payment complete
            update_user_payment_status(order_id, True)
        
        return '', 200
    except Exception as e:
        print(f"Error processing IPN: {e}")
        return 'Error', 500

def update_user_payment_status(user_id, is_paid):
    url = f'https://api.clerk.dev/v1/users/{user_id}/metadata'
    headers = {
        'Authorization': f'Bearer {CLERK_API_KEY}',
        'Content-Type': 'application/json'
    }
    payload = {
        'public_metadata': {
            'is_paid_user': is_paid
        }
    }
    response = requests.patch(url, json=payload, headers=headers)
    return response.status_code

if __name__ == '__main__':
    app.run(debug=True)
