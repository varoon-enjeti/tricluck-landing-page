import pyaudio
import wave

chunk = 1024  # Record in chunks of 1024 samples
sample_format = pyaudio.paInt16  # 16 bits per sample
channels = 2
fs = 44100  # Record at 44100 samples per second
seconds = 10
frames = []
recording = True
p = pyaudio.PyAudio()
    
def record_audio():
    print("recording?")
    p = pyaudio.PyAudio()
    recording = True
    stream = p.open(format=sample_format,
                    channels=channels,
                    rate=fs,
                    frames_per_buffer=chunk,
                    input=True)

    frames = []

    while recording:
        data = stream.read(chunk)
        frames.append(data)
    stream.stop_stream()
    stream.close()
    # Terminate the PortAudio interface
    p.terminate()
    return frames
    
def stop_recording(filename):
    recording = False

    wf = wave.open(filename, 'wb')
    wf.setnchannels(channels)
    wf.setsampwidth(p.get_sample_size(sample_format))
    wf.setframerate(fs)
    wf.writeframes(b''.join(frames))
    wf.close()
    
    print("did i stop ?")
    
if __name__ == "__main__":
    record_audio("output.wav")