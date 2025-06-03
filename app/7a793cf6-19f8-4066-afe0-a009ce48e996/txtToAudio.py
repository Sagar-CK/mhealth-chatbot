from gtts import gTTS
import json
import os
from pydub import AudioSegment

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
    message = """
We are committed to safeguarding personal data in compliance with international privacy standards such as the General Data Protection Regulation (GDPR). We ensure transparency in our data practices, guarantee that personal data is never sold to advertisers, and commit to storing data anonymously whenever possible.
We collect personal data such as users’ willingness to self-disclose and their perceived sensitivity of questions. This data is gathered with specific intent—to support academic research in developing mobile health (mHealth) chatbots and to personalize and improve the user experience with the Services.
Personal data may be shared exclusively for academic and research purposes. All shared data is de-identified or anonymized to ensure that individual user identities remain protected.
We use GDPR-compliant data servers to securely store personal data. Collected data is later transferred and stored anonymously on Surf Drive or TU Delft’s secure storage infrastructure.
Personal data is retained only for as long as needed to fulfill the purposes for which it was collected, including supporting research and delivering services. Users may revoke their consent at any time, at which point all collected data will be voided and deleted in accordance with applicable regulations.
Users have the right to access, correct, and delete their data. They may also revoke consent, restrict processing, and request a copy of their data, as outlined by data protection laws.
Users can withdraw consent at any time, which will result in the deletion and invalidation of all previously collected data.
Users are encouraged to regularly review this privacy policy to stay informed about how their data is handled.
For questions or concerns regarding personal data, users can contact e.c.s.degroot@tudelft.nl.
    """

    #Convert to audio
    audio = gTTS(text=message, lang='en', slow=False)
    # Save the audio file
    audio.save("../../public/audioFilesManu/privacyPolicy.mp3")
    privacy = AudioSegment.from_file("../../public/audioFilesManu/privacyPolicy.mp3")
    faster_privacy = privacy.speedup(playback_speed=1.5)

# Export the faster audio
    faster_privacy.export("../../public/audioFilesManu/privacyPolicy_Fast.mp3", format="mp3")
    print("Audio files created successfully.")
