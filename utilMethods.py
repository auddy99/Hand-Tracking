# import base64
# import numpy as np
# import cv2

# def readb64(uri):
#     encoded_data = uri.split(',')[1]
#     nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
#     print(nparr)
#     img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#     return img

# def readImg(img):
# 	uri = base64.b64encode(cv2.imencode('.jpg', img)[1]).decode()
# 	return uri

# def test(a):
# 	return a




