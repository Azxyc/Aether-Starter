const {SlashCommandBuilder} = require ('@discordjs/builders');
const config = require('../config.json');
const { MessageEmbed, Integration } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Displays bot statistics'),
    async execute(interaction){

        
         let totalSeconds = (interaction.client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;


        let embed = new MessageEmbed()
            .setDescription(`**${config.stats.botName} - Stats**  `)
              .addField("Version", `${config.stats.versionName} (${config.stats.version})`, true)
               .addField(`Status`, interaction.client.presence.status, true)
                .addField("Servers", `${interaction.client.guilds.cache.size}`, true)
                 .addField("Users", `${interaction.client.users.cache.size}`, true)
                  .addField("Channels", `${interaction.client.channels.cache.size}`, true)
                   .addField("Uptime", `${hours}h ${minutes}m ${Math.round(seconds)}s`, true)
              .setTimestamp()
            .setColor(config.colours.independence);

        await interaction.reply({embeds: [embed]});
    },
};