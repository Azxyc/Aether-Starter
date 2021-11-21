const {SlashCommandBuilder} = require ('@discordjs/builders');
const {MessageEmbed} = require('discord.js');
let config = require('../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user')
        
        .addUserOption(option=>
            option.setName('user')
            .setDescription('specify a user')
            .setRequired(true)
            )
        .addStringOption(option=>
            option.setName('reason')
            .setDescription('specify a reason')
            .setRequired(true)),
        
    async execute(interaction){
        let noPerm = new MessageEmbed()
        .setDescription(':no_entry: You do not have the BAN_MEMBERS permission.')
        .setColor('RED');

        let selfBan = new MessageEmbed()
        .setDescription(':no_entry: You cannot ban yourself.')
        .setColor('RED');

        let rankErr = new MessageEmbed()
        .setDescription(':no_entry: You cannot ban this user as they have the higher role.')
        .setColor('RED');

        let botRankErr = new MessageEmbed()
        .setDescription(':no_entry: You cannot ban this user as they have a higher role than me.')
        .setColor('RED');

        let genErr = new MessageEmbed()
        .setDescription(':no_entry: Could not ban the specified user.')
        .setColor('RED');

        if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply({embeds: [noPerm], ephemeral: true});
        const user = interaction.options.getUser('user');
        if(interaction.user.id === user.id) return interaction.reply({embeds: [selfBan], ephemeral: true});
        const member = interaction.guild.members.cache.get(user.id);
        if(member.roles.highest.position >= interaction.member.roles.highest.position) return interaction.reply({embeds: [rankErr], ephemeral: true});
        if(interaction.guild.me.roles.highest.position <= member.roles.highest.position) return interaction.reply({embeds: [botRankErr], ephemeral: true});

        

        const reason = interaction.options.getString('reason');
        let success = new MessageEmbed()
            .setAuthor(`Banned user`)
            .addField('User', `${user.tag}`, true)
            .addField('Id', `${user.id}`, true)
            .addField('Reason', `${reason}`, true)
            .setThumbnail(user.avatarURL())
            .setTimestamp()
            .setColor(config.colours.turqblue);
        interaction.guild.members.ban(user, {reason})
            .then(()=>interaction.reply({embeds: [success]}))
            .catch(()=>interaction.reply({embeds: [genErr], ephemeral: true}))
        
        
       
    },
};