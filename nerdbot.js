// TO DO cannot play youtube video on command !nerd play <youtube link>

// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
const saltyLimit = 10;
let saltyLevel = 0;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
  let verbatim = msg.content.toLowerCase();
  let voiceChannel = msg.member.voice.channel;

  //commands
  if (verbatim.substring(0, 5) == '!nerd') {
        var cmd_full = verbatim.substring(1).split(' ');
        var cmd = cmd_full[0];
        var args = cmd_full.splice(1);

        if(args.length == 0){

          if(saltyLevel < saltyLimit){
            saltyLevel += 1;
            msg.reply("You did it, you summoned the nerdbot. Lucky you! For your information, you summon me with a command, like !nerd take candy. Try it.");
          }else{
            saltyLevel = 0;
            msg.reply("You know I have other things to do too! If you're gonna summon me, at least make me do something useful. Sheesh.");
          }

        }else{

          switch(args[0]){
            case "take":
              if(args[1]){
                msg.reply("Oh boy, you make me happy. Thank you for the " + args[1] + "!");
              }else{
                msg.reply("Take? Take what?");
              }
              break;

            case "say":
              if(args[1]){
                msg.reply(args, {tts : true});
              }else{
                msg.reply("What did you want me to say?", {tts : true})
              }
              break;

            case "play":
              if(args[1] && args[1].toString().includes("https://www.youtube.com/watch?v=")){
                if (!voiceChannel) {
                			return msg.reply('please join a voice channel first!');
                		}

                voiceChannel.join().then(connection => {
                  const stream = ytdl('https://www.youtube.com/watch?v=w0pPGOaHm5Y', { filter: 'audioonly' });
                  const dispatcher = connection.play(stream);

                  dispatcher.on('finish', () => voiceChannel.leave());
                });

                msg.reply("Playing the video sent!");

              }else{
                msg.reply("Care to attach a proper youtube link to that?");
              }
              break;

            default:
              msg.reply("I'm not sure I know what you're talking about!");
          }

        }
  }

});
