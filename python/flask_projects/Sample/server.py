from flask import Flask, render_template, session, redirect, request
from random import randint
app = Flask(__name__)
app.secret_key = "Chadisabitch" 

@app.route('/')
def index():

	if "number" not in session:
		session['number'] = randint(1,100)
	print session['number'], "This is the number"
	return render_template('index.html')

@app.route('/guess', methods=["POST"])
def numberGuess():
	guess = int(request.form['guess'])
	print type(guess)
	if guess < session['number']: 
		print "in low if"
		session['guess'] = "low"
	elif guess > session['number']:
		print "in high elif"
		session['guess'] = "high"
	else:
		print "in match"
		session['guess'] = "match"
	return redirect('/')

app.run(debug=True)