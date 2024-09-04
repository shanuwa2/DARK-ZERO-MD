const {cmd , commands} = require('../command')

cmd({
    pattern: "darkzeromd",
    desc: "wallpaper the bot",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ MY DARK ZERO WALLPEPAR ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
