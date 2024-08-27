const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/7e1f9a45d326abc34d161.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "✫💫 𝐃𝐀𝐑𝐊 𝐙𝐄𝐑𝐎 𝐌𝐃 💫✫\n*Hey there!*💫\n*∂αяκ zєяο  ωнαтѕαρρ вσт* ιѕ υρ αη∂ яυηηιηg!\n🖤 *яυηтιмє : 1 hour, 5 minutes, 47 seconds\n🤍*¢яєαтє∂ ву:* DARK ZERO HACKER TM\n*𝐻𝑒𝓇𝑒'𝓈 𝓌𝒽𝒶𝓉 𝐼 𝒸𝒶𝓃 𝒹𝑜*\n💿*Download Songs & Videos* \n📰*Fetch Latest News*\n🎭*Entertain with Fun Commands*\n🔧*Manage Groups*\n*𝒮𝓉𝒶𝓎 𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈!*    \n      💕  𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💕\n𝗠𝗔𝗡𝗨𝗟 𝗠𝗗\n𝗛𝗔𝗡𝗦𝗔 𝗗𝗘𝗪𝗠𝗜𝗡𝗔\n𝗡𝗜𝗥𝗢\n_*© 𝗗𝗔𝗥𝗞 𝗭𝗘𝗥𝗢 𝘽𝙊𝙏 - MD*_ 
*💻 GitHub:* https://github.com/Navinofc44/DARK-ZERO-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
