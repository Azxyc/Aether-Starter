const {SlashCommandBuilder} = require ('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
let config = require('../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Starts a poll')
        .addStringOption(option=>
            option.setName('question')
            .setDescription('specify a question')
            .setRequired(true)),
    async execute(interaction){
        let question = interaction.options.getString('question');
        let channel = interaction.channel;

        let embed = new MessageEmbed()
        .setTitle(`Poll`)
        .setAuthor(interaction.user.tag, interaction.user.avatarURL())
        .addField('Question', question)
        .setColor(config.colours.maxbluegreen)
        .setTimestamp();

        const message = await interaction.reply({embeds: [embed], fetchReply: true});
        message.react('👍');
        message.react(`👎`);
       
        
       
    },
};