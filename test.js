const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json')
const fs = require('fs');

const commands = []
const commandFiles = fs.readdirSync('./src').filter(file=>file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./src/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(config.key.token);


rest.put(Routes.applicationGuildCommands(config.key.clientId ,config.key.guildId), { body: commands })
	.then(() => console.log(`Registered ${commandFiles} for ${config.stats.botName} ${config.stats.version} @ ${config.key.guildId}`))
	.catch(console.error);