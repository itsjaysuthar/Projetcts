## Model for Sign Language Recognition

def preprocess(action_frame):

    blur = cv2.GaussianBlur(action_frame, (3,3), 0) # Removes high frequency components
    hsv = cv2.cvtColor(blur, cv2.COLOR_RGB2HSV)

    lower_color = np.array([108, 23, 82])
    upper_color = np.array([179, 255, 255])
    
    mask = cv2.inRange(hsv, lower_color, upper_color)
    blur = cv2.medianBlur(mask, 5)

    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (8, 8))
    erode = cv2.erode(blur, kernel)
    hsv_d = cv2.dilate(erode, kernel)
    hsv_d2 = cv2.filter2D(hsv_d, -1, kernel)
    return mask

import cv2
import numpy as np
from PIL import Image
import time
#import requests

# Import the Model
import joblib
model = joblib.load('ISL-CNN-Model2')
alpha = {}
count = 0

cap = cv2.VideoCapture(1)
maxAlpha = 'A'
while True:
    ret, frame = cap.read()
    roi = frame[200:420, 200:420]
    
    cv2.rectangle(frame, (200,200), (420,420), (0,255,0), 0)
    if count == 25:
        count=0
        maxAlpha = max(alpha,key = alpha.get)
        #cv2.putText(frame,maxAlpha, (50,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
        alpha.clear()
        
    cv2.putText(frame,maxAlpha, (50,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
    mask = preprocess(roi)
    maskR = Image.fromarray(mask, mode=None)
    mask1 = maskR.resize((110,110), Image.ANTIALIAS)
    mask2 = np.expand_dims(mask1, axis=0)
    mask3 = np.expand_dims(mask2, axis=3)
    classes = model.predict_classes(mask3)
    if(classes>9):
        char = chr(classes-10+ord('A'))
        if char in alpha.keys():
            alpha[char] += 1
        else:
            alpha[char] = 1
        #cv2.putText(frame,chr(classes-10+ord('A')), (50,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
    else:
        char = str(classes)
        if char in alpha.keys():
            alpha[char] += 1
        else:
            alpha[char] = 1
        #cv2.putText(frame,str(classes), (50,50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
    
    cv2.imshow('Original', frame)
    cv2.imshow('Mask', mask)
    count += 1
    
    k = cv2.waitKey(30) & 0xff
    if(k==27):
        break
cap.release()
cv2.destroyAllWindows()