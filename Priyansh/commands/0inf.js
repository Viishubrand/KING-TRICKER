module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/eDbdlvd.jpg"];
var callback = () => api.sendMessage({body:` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️Bot Name︎︎︎☄️  ${i.imgur.com/XwsHOXL.jpeg}

🔥Bot Admin🔥☞︎︎︎☜︎︎︎✰ 𒁍͟͞»𝑲̭̭̭̭̭𝒊𝒏͡𝒈𝒐̽𝒇𝑻𝒓𝒊͜𝒄̌̌̌̌̌𝒌𝒆͡𝒓̭̭̭̭̭🥀

🙈bot andmin owner facebook id link🙈➪ https://www.facebook.com/King.Bolti.he.public 💞🕊️

👋For Any Kind Of Help Contact On Telegram  Username 👉 @𒁍͟͞»𝑲̭̭̭̭̭𝒊𝒏͡𝒈𝒐̽𝒇𝑻𝒓𝒊͜𝒄̌̌̌̌̌𝒌𝒆͡𝒓̭̭̭̭̭😇

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰ ${i.imgur.com/XwsHOXL.jpeg}

♥️Bot Owner♥️ ☞︎︎︎☜︎︎︎✰ 𒁍͟͞»𝑲̭̭̭̭̭𝒊𝒏͡𝒈𝒐̽𝒇𝑻𝒓𝒊͜𝒄̌̌̌̌̌𝒌𝒆͡𝒓̭̭̭̭̭

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒𒁍͟͞»𝑲̭̭̭̭̭𝒊𝒏͡𝒈𝒐̽𝒇𝑻𝒓𝒊͜𝒄̌̌̌̌̌𝒌𝒆͡𝒓̭̭̭̭̭🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
