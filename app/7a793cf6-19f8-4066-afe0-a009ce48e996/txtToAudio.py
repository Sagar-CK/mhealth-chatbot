from gtts import gTTS
import os

# This function takes a list of strings (text) and converts each of them to audio and saves them as mp3 files.
def text_to_mp3(messages):

    language = 'en'

    for message in messages:
        audio = gTTS(text=message, lang=language, slow=False)
        audio.save("welcome.mp3")

# Playing the converted file
os.system("start welcome.mp3")