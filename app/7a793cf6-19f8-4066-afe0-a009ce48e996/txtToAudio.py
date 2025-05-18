from gtts import gTTS
import os

# This function takes a list of strings (text) and converts each of them to audio and saves them as mp3 files.
def text_to_mp3(messages):

    language = 'en'

    for message in messages:
        audio = gTTS(text=message, lang=language, slow=False)
        audio.save(os.path.join("c:/Users/manug/Documents/mhealth-chatbot/app/7a793cf6-19f8-4066-afe0-a009ce48e996/audioFiles", "welcome.mp3"))

        #Play the audio file
        os.system("start c:/Users/manug/Documents/mhealth-chatbot/app/7a793cf6-19f8-4066-afe0-a009ce48e996/audioFiles/welcome.mp3")


if __name__ == "__main__":
    # Example usage
    messages = ["Hello, how can I help you today?"]
    text_to_mp3(messages)
    print("Audio files created successfully.")