from flask import Flask, request, jsonify
import openai
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.json
    resume = data.get("resume", "")
    projects = data.get("projects", "")

    prompt = f"Here is a resume:\n{resume}\n\nAnd projects:\n{projects}\n\nSuggest the best job roles for this person."

    # NEW interface
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a career advisor."},
            {"role": "user", "content": prompt}
        ]
    )

    # Access the message content
    recommendations = response.choices[0].message.content

    return jsonify({"recommendations": "Software Engineer, Data Analyst, AI Researcher"})



if __name__ == "__main__":
    app.run(port=5000, debug=True)
