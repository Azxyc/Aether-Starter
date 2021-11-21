const {SlashCommandBuilder} = require ('@discordjs/builders');
const {Client, CommandInteraction, MessageEmbed, Message} = require('discord.js');
const ms = require ('ms');
let config = require('../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('afk')
        .setDescription('Sets AFK')
      ,
    async execute(interaction){
            const Target = interaction.user

    

            let noRole = new MessageEmbed()
            .setDescription(':no_entry: No "AFK" role found.')
            .setFooter('To use this command, please create a role named "AFK".')
            .setColor('RED')
            .setTimestamp();


            const AFKRole = interaction.guild.roles.cache.find(role => role.name=== "AFK");
            if(!AFKRole) return interaction.reply({embeds: [noRole], ephemeral: true});

            const member = await interaction.guild.members.fetch(Target)
           
            
            await member.roles.add(AFKRole)
        

            let success = new MessageEmbed()
            .setDescription(':white_check_mark: **Set AFK**.')
            .setTimestamp()
            .setFooter('Use /unafk to remove AFK.')
            .setColor(config.colours.turqblue);

            await interaction.reply({embeds: [success]});


            




        
      
       
    },
};