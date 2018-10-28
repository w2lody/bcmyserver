const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "w";
/////////////////////////
////////////////////////

client.on('message', message => {
var prefix = "f!";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("f!bc <message>");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» Server :', ${message.guild.name})
            .addField('» اSender : ', ${message.author.username}#${message.author.discriminator})
    .setFooter('Super Bot','https://cdn.discordapp.com/avatars/439427357175185408/e757876a5561c2d4682fd664119568f2.jpg?size=128%27)
            .addField(' » Message : ', args)
            .setColor('#ff0000')
            // m.send([${m}]);
            m.send(${m},{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Diamond Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`- PornHub Movie !`,"http://twitch.tv/S-F")
client.user.setStatus("online")
 
});

client.login(process.env.BOT_TOKEN);
