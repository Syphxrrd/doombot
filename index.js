const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('clientReady', () => { // Change 'ready' to 'clientReady'
    console.log('Bot is online!');
});

client.login(process.env.DISCORD_TOKEN); // Use environment variable instead
