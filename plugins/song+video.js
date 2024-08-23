const config = require('../config')
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
    
cmd({
    pattern: "song",
    react: "🎶",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or titel")
const search = await yts(q)
const deta = search.videos[0];
const url = data.url 

let desc= 🎶 *_DARK-ZERO MD AUDIO DOWNLOADER_* 🎶

title: ${data.title}
author: ${data.description}
views: ${data.timestamp}
duration: ${data.ago}
ago: ${data.views}

> DARK-ZERO WA BOT 2024 
   
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod audio+ document

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"*©Powerd by DARK ZERO MD*"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3" ,caption :"*©Powerd by DARK ZERO TM*"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video dl=======

cmd({
    pattern: "video",
    react: "🎥",
    desc: "downlod video",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or title")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `🎶 *_DARK-ZERO MD AUDIO DOWNLOADER_* 🎶

title: ${data.title}
author: ${data.description}
views: ${data.timestamp}
duration: ${data.ago}
ago: ${data.views}

> DARK-ZERO WA BOT 2024 
   
`
await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod video + document 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video  message 
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"*©Power by DARK ZERO TM*"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption :"*©Power by DARK ZERO TM*"},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
