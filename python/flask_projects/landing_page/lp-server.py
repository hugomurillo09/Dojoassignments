from flask import Flask, render_template
app = Flask (__name__)

@app.route('/')
def landingPage():
    return render_template('lp-index.html')

@app.route('/ninjas')
def ninjaPage():
    return render_template('lp-ninjas.html')

@app.route('/dojos/new')
def dojoPage():
    return render_template('lp-dojos.html')

app.run(debug=True)