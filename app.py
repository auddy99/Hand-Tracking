from flask import Flask,render_template,request,Markup,jsonify
import warnings
warnings.filterwarnings("ignore")


# FLASK PART

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
	return render_template('index.html')

@app.route('/show',methods=['POST'])
def show():
	print(str(request.form["b64"]))
	return jsonify({'verdict':"1"})


if(__name__ == '__main__'):
	app.run(debug = True)



