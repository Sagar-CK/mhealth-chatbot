from gtts import gTTS
import json
import os

# This function takes a list of strings (text) and converts each of them to audio and saves them as mp3 files.
def text_to_mp3():

    language = 'en'


    # with open('scenario.json','r+') as file:
    #     scenario = json.load(file)

    #     steps = scenario["steps"]
    #     for i in range(len(steps)):
    #         text = ""
    #         if "text" in steps[i]:
    #             text = steps[i]["text"]
    #             audio = gTTS(text=text, lang=language, slow=False)
    #             audio.save(f"../../public/audioFilesManu/Scenario3/Scenario3-Step{i+1}.mp3")
    #             steps[i]["textAudio"] = f"audioFilesManu/Scenario3/Scenario3-Step{i+1}.mp3"

    #         elif "question" in steps[i]:
    #             text = steps[i]["question"]
    #             audio = gTTS(text=text, lang=language, slow=False)
    #             audio.save(f"../../public/audioFilesManu/Scenario3/Scenario3-Step{i+1}.mp3")
    #             steps[i]["questionAudio"] = f"audioFilesManu/Scenario3/Scenario3-Step{i+1}.mp3"

    #             for j in range(len(steps[i]["responses"])):
    #                 response = steps[i]["responses"][j]
    #                 if "message" in response:
    #                     text = response["message"]
    #                     audio = gTTS(text=text, lang=language, slow=False)
    #                     audio.save(f"../../public/audioFilesManu/Scenario3/Scenario3-Step{i+1}-Response{j+1}.mp3")
    #                     response["audioUrl"] = f"audioFilesManu/Scenario3/Scenario3-Step{i+1}-Response{j+1}.mp3"
    #         else:
    #             continue



    #     file.write(json.dumps(scenario, indent=4))



if __name__ == "__main__":
    # Example usage
    # text_to_mp3()
    message = "We respect your privacy—your chats are private, never sold, and only shared when needed to support or improve your experience or if required by law. You are in control and can access, update, or delete your data anytime. We use strong security and follow privacy laws to keep your information safe."

    #Convert to audio
    audio = gTTS(text=message, lang='en', slow=False)
    # Save the audio file
    audio.save("../../public/audioFilesManu/privacyPolicy.mp3")
    print("Audio files created successfully.")
