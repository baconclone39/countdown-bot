/*
KakaoTalk Bot Project: countdown-bot
'no_moon.jar'의 underscore 엔티티 사운드를 적용한 버전입니다.
*/

const scriptName = "countdown-bot";

// (이전과 동일한 zalgoText, simulateScreenEffect 함수들...)
function zalgoText(text) {const chars = '̴̵̷̸̡̢̧̨̛̜̝̟̠̣̤̥̦̩̪̫̬̭̮̖'+'̛̖̝̟̠̤̥̦̩̪̫̬̭̮́̀̃́̂́̌́̋́́̏́́̑́́̓́́̔́́́́́́́́́́́́́́́́́́́́́́́́́́́́́́́́̕̚';let result = '';for (let i=0; i<text.length; i++){result += text[i];for (let j=0; j<Math.random()*5+1; j++){result += chars[Math.floor(Math.random()*chars.length)];}}return result;}
function simulateScreenEffect(effect, replier) {switch(effect){case 'glitch':replier.reply("E̴R̸R̴O̴R̴ ▒▓▒▓▒▓");java.lang.Thread.sleep(300);replier.reply(zalgoText("SYSTEM CORRUPTION"));java.lang.Thread.sleep(400);break;case 'shake':replier.reply("w h y c a n t y o u s e e");java.lang.Thread.sleep(200);replier.reply("i t s a l l y o u r f a u l t");java.lang.Thread.sleep(200);break;case 'flash':replier.reply("███████████████");java.lang.Thread.sleep(150);break;}}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg === "!countdown") {
    // --- 님의 구글 드라이브 직접 다운로드 링크를 여기에 붙여넣으세요 ---
    const countdownSoundURL = "여기에 countdown.mp3 구글 드라이브 직접 링크를 붙여넣으세요";
    // underscore 엔티티 사운드를 클라이맥스에 사용합니다.
    const underscoreSoundURL = "여기에 underscore_sound.mp3 구글 드라이브 직접 링크를 붙여넣으세요";
    // -----------------------------------------------------------------

    replier.reply("Nothing_left: GET INSIDE NOW!!!");
    java.lang.Thread.sleep(2000);

    const spamMessages = ["<_>", "<_>", "<_>", "WHY CAN'T YOU SEE?", "THIS IS OUR WORLD", "HE IS HERE", "SAVE US"];
    for (let i = 0; i < 7; i++) {
      const randomMessage = spamMessages[Math.floor(Math.random() * spamMessages.length)];
      if (Math.random() > 0.5) {
        simulateScreenEffect('glitch', replier);
      }
      replier.reply(randomMessage);
      java.lang.Thread.sleep(Math.random() * 1200 + 400);
    }

    replier.reply("Image: assets/titles/the_end_is_near.png");
    java.lang.Thread.sleep(3000);

    // 카운트다운 소리 재생
    replier.reply("Sound Event 1: Countdown");
    replier.reply("Listen: " + countdownSoundURL);
    java.lang.Thread.sleep(5000);

    // 화면 효과 후, 하이라이트인 underscore 사운드 재생
    simulateScreenEffect('flash', replier);
    simulateScreenEffect('shake', replier);

    replier.reply(zalgoText("HE IS AWAKE"));
    replier.reply("Sound Event 2: _");
    replier.reply("Listen: " + https://drive.google.com/file/d/1Gxfw1DF9VXGYk4gQ3rjMQbfdmoA7ko8x/view?usp=sharing); // 여기가 핵심입니다.
    java.lang.Thread.sleep(1000);
    replier.reply(zalgoText("IT'S TOO LATE"));
  }
}
