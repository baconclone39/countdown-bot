/*
KakaoTalk Bot Project: countdown-bot
Simulates the "no_moon.jar Countdown Event" with screen effects.
*/

const scriptName = "countdown-bot";

// --- Helper function for Zalgo/Glitch Text ---
function zalgoText(text) {
  const chars = '̴̵̷̸̡̢̧̨̛̜̝̟̠̣̤̥̦̩̪̫̬̭̮̖' + '̛̖̝̟̠̤̥̦̩̪̫̬̭̮́̀̃́̂́̌́̋́́̏́́̑́́̓́́̔́́́́́́́́́́́́́́́́́́́́́́́́́́́́́́́́̕̚';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += text[i];
    for (let j = 0; j < Math.random() * 5 + 1; j++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return result;
}

// --- Helper function to simulate screen effects ---
function simulateScreenEffect(effect, replier) {
  switch (effect) {
    case 'glitch':
      replier.reply("E̴R̸R̴O̴R̴ ▒▓▒▓▒▓");
      java.lang.Thread.sleep(300);
      replier.reply(zalgoText("SYSTEM CORRUPTION"));
      java.lang.Thread.sleep(400);
      break;
    case 'shake':
      replier.reply("w h y c a n t y o u s e e");
      java.lang.Thread.sleep(200);
      replier.reply("i t s a l l y o u r f a u l t");
      java.lang.Thread.sleep(200);
      break;
    case 'flash':
      replier.reply("███████████████");
      java.lang.Thread.sleep(150);
      break;
  }
}


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg === "!countdown") {
    // Initial message
    replier.reply("Nothing_left: GET INSIDE NOW!!!");
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

    // Randomly send spam messages with delays and effects
    for (let i = 0; i < 5; i++) {
      const randomMessage = spamMessages[Math.floor(Math.random() * spamMessages.length)];
      if (Math.random() > 0.6) {
        simulateScreenEffect('glitch', replier);
      }
      replier.reply(randomMessage);
      java.lang.Thread.sleep(Math.random() * 1500 + 500); // Random delay
    }

    // Display title images in order with effects
    simulateScreenEffect('flash', replier);
    replier.reply("Image: assets/titles/you_are_nothing.png");
    java.lang.Thread.sleep(3000);

    simulateScreenEffect('shake', replier);
    replier.reply("Image: assets/titles/the_end_is_near.png");
    java.lang.Thread.sleep(3000);

    replier.reply(zalgoText("GOD"));
    replier.reply("Image: assets/titles/god.png");
    java.lang.Thread.sleep(3000);

    replier.reply("Image: assets/titles/save_us.png");
    java.lang.Thread.sleep(1000);
    
    // Links to sound files
    replier.reply("Sound Event 1: Countdown");
    replier.reply("Listen: https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b3d15a510.mp3?filename=countdown-10-seconds-103321.mp3");
    java.lang.Thread.sleep(5000); // Give time to listen

    replier.reply("Sound Event 2: Glitch");
    replier.reply("Listen: https://cdn.pixabay.com/download/audio/2022/05/17/audio_b51e944769.mp3?filename=error-ref-1-109961.mp3");
    java.lang.Thread.sleep(3000);

    simulateScreenEffect('flash', replier);
    simulateScreenEffect('shake', replier);

    replier.reply("Sound Event 3: ALARM");
    replier.reply("Listen: https://cdn.pixabay.com/download/audio/2022/06/23/audio_14163b963e.mp3?filename=warning-siren-112061.mp3");
    java.lang.Thread.sleep(1000);
    replier.reply(zalgoText("IT'S TOO LATE"));
  }
}
