from flask import Flask,render_template, request

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def login():
    error = ""

    if request.method == "POST":
        if request.form['username'] == "sifat" and request.form['password'] == "khalsa":
            return "Access Granted"
        else:
            error = "Invalid Username/Password"

    return render_template('login.html', error = error)

@app.route('/student_portal')
def info():
    return render_template('add_feedback.html', payload={})


@app.route('/student/<name>')
def data(name):
    return "<h1> {} can use this personalized portal. </h1>".format(name)


@app.route('/employee_portal')
def rec():
    return "<h1> Employee recieve data over here </h1>"

@app.route('/thank')
def thanks():
    return render_template('thank.html')

if __name__== '__main__':
    app.run(debug=True) 
