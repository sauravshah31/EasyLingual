from flask import Flask

app = Flask(__name__)

@app.route("/api/home")
def home():
    return {
        "msg":"hi from backend"
    }


if __name__ == "__main__":
    app.run(debug=True)