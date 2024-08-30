const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📍",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*💫ℝ𝔼ℙ𝕆-𝕃𝕀ℕ𝕂 💗👇*

🧚‍♀️◦https://github.com/Navinofc44/DARK-ZERO-MD

* *💫ℙ𝕃𝔼𝔸𝕊𝔼 𝐉𝐎𝐈𝐍 𝕄𝕐 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ 𝐆𝐑𝐎𝐔𝐏 💗👇*

🧚‍♀️◦ https://chat.whatsapp.com/B99RDjud9r98m7AqiUUjR7

*©𝐷𝐴𝑅𝐾 𝑍𝐸𝑅𝑂-ᴍᴅ ʙʏ ᗪᗩᖇK ᕼᗩᑕKEᖇ Tᗰッ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
