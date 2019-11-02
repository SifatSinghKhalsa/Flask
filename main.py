from flask import Flask,render_template, request
from textblob import TextBlob

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def home():
    sentiment, count, positive, negative = 0, 0, 0, 0
    file_load = open("reviews.csv", "r")
    x = file_load.readlines()
    db = []
    for y in x:
        y = y.split(",")
        if len(y) > 5 and len(y[5]) > 4:
            line = (" ".join(y[5:]))
            wiki = TextBlob(line)
            count += 1
            sentiment += wiki.sentiment.polarity
            if wiki.sentiment.polarity > 0:
                positive  += 1
            else:
                negative += 1
            entry = {}
            entry["name"] = y[1]
            entry["sentiment"] = round(wiki.sentiment.polarity,2)
            entry["comment"] = line
            db.append(entry)
    average_sentiment = round(sentiment/count,2)
    return render_template('index.html', sentiment=average_sentiment, positive=positive,negative=negative,count=count, list_reviews=db[1:], posper = round(positive/count * 100, 2), negper =  round(negative/count*100, 2))

@app.route('/add', methods=["GET", "POST"])
def login():
    error = ""

    if request.method == "POST":
        line = f"123123, {request.form['name']}, {request.form['regno']}, {request.form['faculty']}, {request.form['subject']}, {request.form['feedback']}\n"
        a = open("reviews.csv", "a")
        a.write(line)
        a.close()

    return render_template('add_feedback.html', error = error, payload={})

if __name__== '__main__':
    app.run(debug=True) 
