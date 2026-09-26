from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")


@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    confidence = None
    message = ""

    if request.method == "POST":
        message = request.form.get("message", "").strip()

        if message:
            text_vector = vectorizer.transform([message])

            prediction = model.predict(text_vector)[0]

            # Linear SVM confidence score
            decision_score = model.decision_function(text_vector)[0]

            if prediction == 1:
                result = "SPAM"
            else:
                result = "HAM"

            # Convert decision score to a simple confidence display
            confidence = round(
                (1 / (1 + abs(decision_score) ** -1)) * 100, 1
            )

    return render_template(
        "index.html",
        result=result,
        confidence=confidence,
        message=message
    )


if __name__ == "__main__":
    app.run(debug=True)