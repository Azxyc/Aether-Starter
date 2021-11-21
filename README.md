Nixerlia is a great option for those who want a robust, fully featured Discord bot. However, you may want to make your own Discord bot. If you don't know where to start, Aether Starter Pack might be for you.
Aether Starter Pack is a Discord bot development template for Discord.JS v13 based on the latest version of Nixerlia (v4.0). This template includes a basic set of commands to get you going.

## Getting started

To get started with Aether Starter Pack, you'll need to clone the git repository. Open your terminal of choice and run these commands:

```zsh
$ git clone https://github.com/Azxyc/Aether-Starter.git
$ cd Aether-Starter
$ npm install
```

Now, open a code editor and open the `config.json` file.
It should look like this:

```json
{
  "colours": {
    "oxfordblue": "#0B132B",
    "spacecadet": "#1C2541",
    "independence": "#3A506B",
    "maxbluegreen": "#5BC0BE",
    "turqblue": "#6FFFE9"
  },

  "key": {
    "token": "ENTER_BOT_TOKEN",
    "ownerId": "ENTER_YOUR_USER_ID",
    "clientId": "ENTER_BOT_CLIENT_ID",
    "guildId": "ENTER_TEST_GUILD_ID"
  },
  "stats": {
    "version": "000001",
    "versionName": "1.0.0",
    "botName": "ENTER_BOT_NAME"
  }
}
```

You'll notice that there are some values you need to specify. You can fill some of these in now. If you haven't already, choose a name for your bot and enter it in the botName field.
Next, choose a server where you will be testing your bot, and find it's guild ID. Enter this in the guildId field. Enter your Discord user ID in the ownerId field.
For the remaining fields, you will need to set up a bot application if you haven't already.
Check this [guide][1] from the Discord.JS team if you need help doing this. When you're done, we can continue.

Once you've created your bot application, you can now fill in the remaining fields.
Congratulations, your bot is now ready to go! You can run the following command in the project directory to start your bot:

```zsh
$ npm run deploy
```

It will take up to a few hours for the commands to be registered across all of the bot's servers.

## Adding new commands

Aether Starter Pack already includes a few basic commands, but you might want to add more.
To do this, just create a new command file in the src folder. You may want to pull up one of the included commands as a reference in case you get stuck.

It is recommended to test your new commands before deploying them globally. Just run this command in the project directory:

```zsh
$ npm run test
```

Your commands will be instantly available in the test server you specified in config.json.
When you're ready for the world to see your new creations, run the deploy script.

[1]: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
