const {Client, Collection, Intents, MessageEmbed, Message} = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const fetch = require('cross-fetch');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src').filter(file=>file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./src/${file}`);
    client.commands.set(command.data.name, command);
}

    

client.once('ready', ()=>{
    console.log(`${config.stats.botName} started`);
    console.log(`Version: ${config.stats.version} (${config.stats.versionName})`);
    console.log(`Prefix set to ${config.key.prefix}`);
    console.log(`Set owner as ${config.key.ownerId}`);

});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if(!command) return;
    try{
        await command.execute(interaction);
    } catch (error){
        console.error(error);
        let embed = new MessageEmbed()
        .setDescription(":flushed:  There was a problem executing this command.")
        .setColor('RED');
        await interaction.reply({embeds: [embed], ephemeral: true});
    }

});



client.login(config.key.token);