const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "509793216896303105"; // ايدي السررفر
var channel = "509793216896303109";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz , Namlol , Naz**')
    },305);
})

client.login(process.env.BOT_TOKEN)
