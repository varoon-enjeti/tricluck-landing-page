import React, { useState , useRef , useEffect } from 'react';

import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";


export const useRecorderPermission = (recordingType: RecordRTC.Options["type"]) => {
    const [recorder, setRecorder] = useState<any>();
    useEffect(() => {
        getPermissionInitializeRecorder();
    }, []);
    const getPermissionInitializeRecorder = async () => {
        let stream = await (navigator as any).mediaDevices.getUserMedia({
            video: false,
            audio: true,
        });
        let recorder = new RecordRTCPromisesHandler(stream, {
            type: recordingType,
        });
        setRecorder(recorder);
    };
    return recorder;
};

export default function AudioRecorder() {
    
    const [messages, setMsgs] = useState<string[]>([])
    const [replies, setReplies] = useState<string[]>([])
    const [length, setLength] = useState(0)
    const recorder = useRecorderPermission("audio");
    const startRecording = async () => {
        recorder.startRecording();
    };

    const stopRecording = async () => {
        await recorder.stopRecording();
        let blob = await recorder.getBlob();
        let data = new FormData();
        data.append('file',blob, 'output.wav')
        /*//await fetch('http://localhost:5000/stop', {
        await fetch('https://api-beige-one-57.vercel.app/stop', {
            method:'POST',
            body: data,
            headers: {
                accept:'application/json'
            },
        }).then(response => response.json()
        ).then(json => {
            console.log(json)
        });*/

        let firstMsg = ""
        
        //await fetch('http://localhost:5000/stt/' + 'en' + '/' + 'zh' + '/', {
        await fetch('https://api-beige-one-57.vercel.app/stt/' + 'en' + '/' + 'zh' + '/', {
            method: 'POST',
            body:data,
            headers: {
                accept: 'application/json'
            }
        }).then(res => res.json()).then(data => {
            firstMsg = data.transcription
            setMsgs([...messages, data.transcription])
            setLength(length+1)
        })
        


        let message = new FormData();
        let response = ""
        message.append('message',firstMsg)
        await fetch('https://api-beige-one-57.vercel.app/reply/', {
        //await fetch('http://localhost:5000/reply/', {
            method: 'POST',
            body: message,
            headers: {
                accept:'application/json'
            }
        }).then(res => res.json()).then(data => {

            response = data.reply
            setReplies([...replies,response])
            setLength(length+1)
        })

        let toSpeak = new FormData()
        toSpeak.append('text',response)
        await fetch('https://api-beige-one-57.vercel.app/speak/', {
        //await fetch('http://localhost:5000/speak/', {
            method: 'POST',
            body: toSpeak,
            headers: {
                accept:'application/json'
            }
        }).then(res => res.json()).then(data => {

            console.log(data)
        })
    };

    const convoTexts = messages.map((message,i) => {
        return <div className = "w-screen">
                    <div className="m-4 p-4 rounded-lg bg-blue-600 text-white max-w-prose">{message}</div>
                    <div className="text-left m-4 p-4 rounded-lg bg-slate-200 max-w-prose">{replies[i]}</div>
                </div>
    })

    return (
        <div>
            <button onClick={startRecording} className="m-8 ml-32 bg-red-600 text-white p-4 rounded-2xl"> Start recording</button>
            <button onClick={stopRecording} className="m-8 bg-gray-500 text-white p-4 rounded-2xl"> Stop recording</button>
            <div className="m-32 mt-20 border-2">
                <div className="w-screen">{convoTexts}</div>
            </div>
        </div>
    );
};