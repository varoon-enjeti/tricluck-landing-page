from flask import Flask, request, jsonify
from flask_cors import CORS
from deepgram_test import transcribe
from pringles import pringles
from chatpgt import call
from googletts import save_audio
from recordaudio import *
import os 
import asyncio
fname = "output.wav"

app = Flask(__name__)
CORS(app)

@app.route('/record/')
def record():
    print("hello")
    return {"response": record_audio()}

@app.route('/stop/', methods=['POST'])
def stop():
    if request.method == 'POST':
        print("stopped")
        files = request.files
        file = files.get('file')
        print(file)

        file.save(os.path.join("", "output.wav"))
        
        return {"response" : "recording processed"}

@app.route('/stt/<string:lang1>/<string:lang2>') #record audio w/ pyaudio and transcribe w/ deepgram
def get_transcription(lang1,lang2):
    print("transcribing")
    print(lang1, " ", lang2)
    transcription = asyncio.run(transcribe(lang1,lang2,fname))
    print(transcription)
    return jsonify({"transcription": transcription})

@app.route('/reply/', methods=['POST']) #chatgpt + pringles
def get_reply():
    if request.method == 'POST':
        text = request.form.get("message")
        replies = call(text)
        index = int(pringles(replies,text))
        best = replies[index-1]
        return jsonify({"reply": best}) 
    
@app.route('/speak/', methods=["POST"])
def speak_sentence():
    if request.method == 'POST':
        text = request.form.get("text")
        print(text)
        
        save_audio(text)
        return jsonify({"response" : "processed"})