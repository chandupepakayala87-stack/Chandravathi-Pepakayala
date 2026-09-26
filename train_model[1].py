import os
import zipfile
import urllib.request

import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score, classification_report


DATA_URL = "https://archive.ics.uci.edu/static/public/228/sms+spam+collection.zip"
ZIP_FILE = "sms_spam.zip"
DATA_FILE = "SMSSpamCollection"


print("\n" + "=" * 60)
print("        SMART SPAM MESSAGE DETECTOR")
print("             FINAL MODEL TRAINING")
print("=" * 60)


# Download dataset
if not os.path.exists(DATA_FILE):
    print("\nDownloading UCI SMS Spam Collection...")
    urllib.request.urlretrieve(DATA_URL, ZIP_FILE)

    with zipfile.ZipFile(ZIP_FILE, "r") as zip_ref:
        zip_ref.extractall(".")

    os.remove(ZIP_FILE)

# Load dataset
df = pd.read_csv(
    DATA_FILE,
    sep="\t",
    names=["label", "message"],
    encoding="utf-8"
)

# Remove duplicates
df = df.drop_duplicates().reset_index(drop=True)

print(f"\nTotal messages: {len(df)}")
print(f"Spam messages : {(df['label'] == 'spam').sum()}")
print(f"Ham messages  : {(df['label'] == 'ham').sum()}")

# Convert labels
df["label"] = df["label"].map({
    "ham": 0,
    "spam": 1
})

X = df["message"]
y = df["label"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

# TF-IDF
vectorizer = TfidfVectorizer(
    lowercase=True,
    stop_words="english",
    ngram_range=(1, 2),
    max_features=5000
)

X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Final model
model = LinearSVC()

# Train
model.fit(X_train_tfidf, y_train)

# Test
predictions = model.predict(X_test_tfidf)

accuracy = accuracy_score(y_test, predictions)

print("\n" + "-" * 60)
print(f"FINAL MODEL: Linear SVM")
print(f"TEST ACCURACY: {accuracy * 100:.2f}%")
print("-" * 60)

print("\nClassification Report:")
print(classification_report(
    y_test,
    predictions,
    target_names=["HAM", "SPAM"]
))

# Save model and vectorizer
joblib.dump(model, "model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

print("\nmodel.pkl      -> saved")
print("vectorizer.pkl -> saved")

print("\nTraining completed successfully!")
print("=" * 60)