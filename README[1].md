📧 Smart Email Spam Detection

📌 PROJECT OVERVIEW

This project is a Machine Learning based Smart Email Spam Detection system that detects whether an email is Spam or Not Spam using Natural Language Processing (NLP).

🎯 OBJECTIVE

To automatically classify email messages as Spam or Not Spam and help users identify unwanted or suspicious emails.

🛠️ TECHNOLOGIES USED

- Python
- Machine Learning
- Natural Language Processing (NLP)
- Scikit-learn
- Flask
- HTML & CSS

📂 PROJECT STRUCTURE

Smart-Email-Spam-Detection/

├── app.py

├── model.pkl

├── vectorizer.pkl

├── spam.csv

├── requirements.txt

├── templates/
│   └── index.html

└── README.md

⚙️ HOW IT WORKS

Step 1: User enters an email message.

Step 2: The email text is converted into numerical features using a vectorizer.

Step 3: The trained Machine Learning model analyzes the message.

Step 4: The system predicts whether the email is Spam or Not Spam.

Step 5: The prediction result is displayed on the webpage.

🖥️ PROJECT SCREENSHOTS

🏠 HOME PAGE

![alt text](Screenshots/home-page.pg.png)

🚨 SPAM PREDICTION

![alt text](Screenshots/Spam-detector-resilt.png.png)


✅ NOT SPAM PREDICTION

![alt text](Screenshots/Safe-detector-result.png.jpeg)

📊 MODEL RESULT

The system classifies email messages into two categories:

- 🚨 Spam
- ✅ Safe

🚀 HOW TO RUN

1. Install the required Python libraries.
2. Run "app.py".
 Running on http://127.0.0.1:5000
3. Open the Flask local server in a browser.
4. Enter an email message.
5. View the prediction result.

