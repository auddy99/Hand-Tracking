from flask import Flask,render_template,request,Markup,jsonify
# import cv2
import base64
import warnings
warnings.filterwarnings("ignore")

from utilMethods import *

# FLASK PART

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
	return render_template('index.html')

@app.route('/show',methods=['POST'])
def show():
	b64 = str(request.form["b64"])
	# img = readb64(b64)
	# cv2.putText(img, 'hello', (20, 40), cv2.FONT_HERSHEY_PLAIN, 3.0, (255,0,0), thickness=4)
	# b64 = "data:image/png;base64," + readImg(img)

	return jsonify({'verdict':'1','imgURL':b64})


if(__name__ == '__main__'):
	app.run(debug = True)



