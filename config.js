const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/7e1f9a45d326abc34d161.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*_Hello there 👋_**_🙌 I am DARKZERO-MD WhatsApp User Bot_*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
