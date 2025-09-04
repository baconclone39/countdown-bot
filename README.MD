# Countdown Bot

A KakaoTalk bot that simulates the "no_moon.jar Countdown Event" with text-based screen effects.

## Features

-   Responds to the `!countdown` command.
-   Sends a series of suspenseful and cryptic text messages.
-   **Simulates screen effects** like glitches, shaking, and flashes using text messages.
-   Displays a sequence of title images.
-   Provides links to royalty-free sound effects to enhance the atmosphere.

## Installation

1.  **Clone or download** this repository.
2.  **Download the sound files:**
    *   `countdown.mp3`: [Download from Pixabay](https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b3d15a510.mp3?filename=countdown-10-seconds-103321.mp3)
    *   `glitch.mp3`: [Download from Pixabay](https.cdn.pixabay.com/download/audio/2022/05/17/audio_b51e944769.mp3?filename=error-ref-1-109961.mp3)
    *   `loud_alarm.mp3`: [Download from Pixabay](https://cdn.pixabay.com/download/audio/2022/06/23/audio_14163b963e.mp3?filename=warning-siren-112061.mp3)
3.  Place the downloaded MP3 files into the `assets/sounds/` directory. (파일 이름도 `countdown.mp3` 등으로 맞춰주세요)
4.  Create the placeholder title images in the `assets/titles/` directory.
5.  **Set up your KakaoTalk bot environment:**
    *   Import the `main.js` script into your bot's scripting environment.
    *   Ensure the bot has access to the `assets` folder if you intend to send the files directly instead of linking to them.

## Usage

In your KakaoTalk chatroom with the bot, type the following command:
