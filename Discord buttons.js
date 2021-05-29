const { MessageButton } = require('discord-buttons');
const discord = require('discord.js'); 
const client = new discord.Client(); 
const disbut = require('discord-buttons')(client);

module.exports = {
    name: 'test', // here you put your command name 
    run: async (client, message, args) => {
      let button = new disbut.MessageButton()
      .setStyle('url') 
      .setLabel('Toxica') // here you put your button name  
      .setURL('https://discord.gg/WrgFjZA9') // here you put your button url
    message.channel.send('Salut ! clique sur le boutton pour rejoindre toxica.', button); //the message where the button goes down
    }}                        