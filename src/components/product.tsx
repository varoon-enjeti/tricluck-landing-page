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
    const [baseLang, setBase] = useState("en")
    const [targetLang, setTarget] = useState("en")
    const [isRecording, setIsRecording] = useState(false)
    const [isTranscribing, setTranscribing] = useState(false)
    const [isReplying, setReplying] = useState(false)

    const recorder = useRecorderPermission("audio");
    const startRecording = async () => {
        recorder.startRecording();
        setIsRecording(true)
    };

    const handleBase = (e: any) => {
        setBase(e.target.value)
    }
    const handleTarget = (e: any) => {
        setTarget(e.target.value)
    }
    const stopRecording = async () => {
        await recorder.stopRecording();
        setIsRecording(false)

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

        setTranscribing(true)
        let firstMsg = ""
        
        //await fetch('http://localhost:5000/stt/' + 'en' + '/' + 'zh' + '/', {
        await fetch('https://api-beige-one-57.vercel.app/stt/' + baseLang + '/' + targetLang + '/', {
            method: 'POST',
            body:data,
            headers: {
                accept: 'application/json'
            }
        }).then(res => res.json()).then(data => {
            firstMsg = data.transcription
            setMsgs([...messages, data.transcription])
        })
        setTranscribing(false)
        setReplying(true)
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
        })
        setReplying(false)
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

        })
    };

    const convoTexts = messages.map((message,i) => {
        return <div className = "">
                    <div>
                        <div className="text-right mr-20">You</div>
                        <div className="flex flex-row-reverse">
                            <div className="bg-soft-blue mr-4 self-end mb-4 aspect-square min-w-8 w-8 h-auto rounded-full"></div>
                            <div className="mr-4 mb-4 p-4 rounded-lg bg-blue-600 text-white max-w-prose">{message}</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-left ml-20">John</div>
                        <div className = "flex flex-row">
                        
                            <div className="bg-soft-blue ml-4 self-end mb-4 aspect-square min-w-8 w-8 h-auto rounded-full"></div>
                            {i >= replies.length && isReplying ? 
                                (<div className="text-left ml-4 mb-4 p-4 rounded-lg bg-slate-200 max-w-prose">Replying...</div>) : 
                                (<div className="text-left ml-4 mb-4 p-4 rounded-lg bg-slate-200 max-w-prose">{replies[i]}</div>)}
                        </div>
                    </div>
                </div>
    })

    return (
        <div id="product">
            <p className="text-5xl xl:text-7xl text-center">Test Our Product</p>
            <div className="flex justify-center">
                <label htmlFor="lang1" className="mt-3">Base Language:</label>
                <select name="lang1" id="lang1" className="m-2 p-2 border-2 rounded-lg" onChange={handleBase}>
                    <option value="en">English</option>
                    <option value="zh">Chinese</option>
                    <option value="ko">Korean</option>
                </select>
            
                <label htmlFor="lang2" className="ml-10 mt-3">Target Language:</label>
                <select name="lang2" id="lang2" className="m-2 p-2 border-2 rounded-lg" onChange={handleTarget}>
                    <option value="en">English</option>
                    <option value="zh">Chinese</option>
                    <option value="ko">Korean</option>
                </select>
            </div>
            <div className="ml-10 mr-10 lg:ml-32 lg:mr-32 border-2 min-h-[48px] rounded-lg">
                <div className="">{convoTexts}</div>
                {isTranscribing ? <div className="text-right p-6">Transcribing...</div>: null}
            </div>
            {!isRecording ? (<button onClick={startRecording} className="m-8 ml-10 lg:ml-32 bg-red-600 text-white p-4 rounded-2xl"> Start recording</button>):null}
            {isRecording ? (<button onClick={stopRecording} className="m-8 ml-10 lg:ml-32 bg-gray-500 text-white p-4 rounded-2xl"> Stop recording</button>):null}
            
            
            
        </div>
    );
};