from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.json
    resume = data.get("resume", "")
    projects = data.get("projects", "")
    prompt = f"Here is a resume:\n{resume}\n\nAnd projects:\n{projects}\n\nSuggest the best job roles for this person."

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "system", "content": "You are a career advisor."},
                  {"role": "user", "content": prompt}]
    )

    return jsonify({"recommendations": response.choices[0].message.content})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
