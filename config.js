const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167235563";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_06_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhlaTFNcTlWZ1FBUlBXeTNZazJic3RkcnNNcDd5ZkxGRFFYbm5HQlFYTU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjF4NFA1X1F1VE5HYWVMX2hNdnN0VWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzNmNGExODItMTg2Ny00YmUxLThhZGYtYjlkYWVmZjU3OGNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIxLFxuICAgICAgNDYsXG4gICAgICA0MSxcbiAgICAgIDE0LFxuICAgICAgMTEwLFxuICAgICAgMTU1LFxuICAgICAgMjM3LFxuICAgICAgMzcsXG4gICAgICAxMDAsXG4gICAgICAxODEsXG4gICAgICA1NSxcbiAgICAgIDE3OSxcbiAgICAgIDE4NixcbiAgICAgIDc0LFxuICAgICAgMjgsXG4gICAgICA1NyxcbiAgICAgIDQyLFxuICAgICAgMjM0LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMDYsXG4gICAgICAxNjcsXG4gICAgICAyMDMsXG4gICAgICAxMDIsXG4gICAgICA3OSxcbiAgICAgIDIzMCxcbiAgICAgIDc5LFxuICAgICAgNTUsXG4gICAgICA1OCxcbiAgICAgIDc5LFxuICAgICAgMTg4LFxuICAgICAgODAsXG4gICAgICA4MyxcbiAgICAgIDMyLFxuICAgICAgODMsXG4gICAgICAzNyxcbiAgICAgIDQ5LFxuICAgICAgMjQwLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktRUVpFUFNOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY3MjM1NTYzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzUzMTYzNDg3NjUzNDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ2x1ZkFFRUlDS3Via0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNTTGtDS0ozR0UyMjQxQUJSWjB0OC9BeFZvL0duZ1RaMVQ5UHdvNUN5R0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib1NLOEo2RThEWjBzZEhwZUJJeW9aUUFwODE3dHA3cGxuTVpTRmpOYTZwcno2Y093c2FqRXZxL3ZVL0wyZTQremxmdXdkQzd1NVEwRnFpTWk0QS9vQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1dWWlpDanpEaGkzajhpVUJ3M1RRZmZLeDVrL1pOMmlGeEYzbnhESzhKKzZCQkxNQW5WRHBLckV2YjROMll2c3l5K0NZOTJlcTNuTVdoR1IxaFRnaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NzIzNTU2MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTA4NTU3MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
