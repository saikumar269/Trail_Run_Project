from flask import Flask, render_template, request
import requests

app = Flask(__name__)

# Rasa server URL
RASA_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["GET", "POST"])
def chat():
    user_message = request.get_json().get("msg")
    payload = {"sender": "user", "message": user_message}
    
    # Send data to Rasa server
    response = requests.post(RASA_URL, json=payload).json()
    
    bot_message = ""
    for res in response:
        bot_message += res.get("text") + "\n"
    
    return bot_message


if __name__ == "__main__":
    app.run(debug=True)
