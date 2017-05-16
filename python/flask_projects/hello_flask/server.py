from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "I<3Secrets"

@app.route('/') 
def hello():
	return 'Hello Kitty!'

app.run(debug=True, port=8888)
