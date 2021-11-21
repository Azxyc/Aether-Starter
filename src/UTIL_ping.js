const {SlashCommandBuilder} = require ('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
let config = require('../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Displays latency'),
    async execute(interaction){
         let start = Date.now();

        let embed1 = new MessageEmbed()
            .setDescription("Pinging...")
            .setColor("RANDOM")

        await interaction.reply({
            embeds: [embed1]
        })
        let end = Date.now();

        let embed = new MessageEmbed()
          .setTitle("Ping")
          .addField("Message Latency", `${end - start}ms`, true)
          .setTimestamp()
          .setColor(config.colours.independence);

       await interaction.editReply({ embeds: [embed] }).catch((e) => interaction.reply(e));
        
       
    },
};