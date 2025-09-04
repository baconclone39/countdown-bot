/*
KakaoTalk Bot Project: countdown-bot
Simulates the "no_moon.jar Countdown Event"
*/

const scriptName = "countdown-bot";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg === "!countdown") {
    // Initial message
    replier.reply("Nothing_left: GET INSIDE NOW!!!");
    
    // Short delay for suspense
    java.lang.Thread.sleep(2000);

    // Array of spam messages
    const spamMessages = [
      "<_> YOU ARE NOTHING",
      "WHY CAN'T YOU SEE?",
      "THIS IS OUR WORLD",
      "THE MOON IS A LIE",
      "IT'S ALL YOUR FAULT",
      "THERE IS NO ESCAPE",
      "HE IS WATCHING"
    ];

    // Randomly send spam messages with delays
    for (let i = 0; i < 5; i++) {
      const randomMessage = spamMessages[Math.floor(Math.random() * spamMessages.length)];
      replier.reply(randomMessage);
      java.lang.Thread.sleep(Math.random() * 1500 + 500); // Random delay between 0.5 and 2 seconds
    }

    // Display title images in order with delays
    const titles = ["you_are_nothing.png", "the_end_is_near.png", "god.png", "save_us.png"];
    for (const title of titles) {
      // Placeholder for sending an image. In a real KakaoTalk bot environment,
      // you would use the API to send the image file from the assets/titles/ directory.
      replier.reply("Image: assets/titles/" + title);
      java.lang.Thread.sleep(3000);
    }

    // Repeat achievement PNG images multiple times (placeholders)
    for (let i = 0; i < 3; i++) {
      // Placeholder for a repeating achievement image
      replier.reply("Image: achievement_unlocked.png");
      java.lang.Thread.sleep(1000);
    }
    
    // Provide links to sound placeholders
    replier.reply("Sound: assets/sounds/countdown.mp3");
    java.lang.Thread.sleep(500);
    replier.reply("Sound: assets/sounds/glitch.mp3");
    java.lang.Thread.sleep(500);
    replier.reply("Sound: assets/sounds/loud_alarm.mp3");
  }
}