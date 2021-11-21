

const {SlashCommandBuilder} = require ('@discordjs/builders');
const config = require('../config.json');
const { MessageEmbed, Message } = require('discord.js');
const fetch = require('cross-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('id')
        .setDescription('Displays user Id')
        .addUserOption(option=>
            option.setName('user')
            .setDescription('specify a user or leave blank to see your Id')
            .setRequired(false)),

    async execute(interaction){
        let user = 0;
        if(!interaction.options.getUser('user')){
            user = interaction.user
        }
        else{
            user = interaction.options.getUser('user')
        }



        let embed = new MessageEmbed()
        .setDescription(user.id)
        .setColor(config.colours.maxbluegreen)

        await interaction.reply({embeds: [embed]});


       

        
        
    },
};