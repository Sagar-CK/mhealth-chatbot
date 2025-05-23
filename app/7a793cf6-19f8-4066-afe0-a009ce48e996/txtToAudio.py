from gtts import gTTS
import os

# This function takes a list of strings (text) and converts each of them to audio and saves them as mp3 files.
def text_to_mp3(messages):

    language = 'en'

    for message in messages:
        audio = gTTS(text=message, lang=language, slow=False)
        audio.save(os.path.join("c:/Users/manug/Documents/mhealth-chatbot/public/audioFilesManu", "welcome.mp3"))

if __name__ == "__main__":
    # Example usage
    messages = ["Hello, how can I help you today?"]
    text_to_mp3(messages)
    print("Audio files created successfully.")