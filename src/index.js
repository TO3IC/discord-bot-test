import { Routes, REST, ApplicationCommandOptionType, ActivityType } from 'discord.js';
import "dotenv/config";
import client from './client.js';
import commands from './arrays/commands.js';
import InteractionHandler from './events/interactionCreate.js';
import MessageHandler from './events/messageCreate.js';

const TOKEN = process.env.TOKEN;

const rest = new REST({ version: 10, }).setToken(TOKEN);

client.on("ready", () => {
    client.user.setActivity({
        name: "菜逼",
        type: ActivityType.Custom,
    });
});

const main = async () => {
    try {
        await rest.put(Routes.applicationCommands("1160915440642564156"), {
            body: commands,
        });
        client.login(TOKEN);
    } catch (err) {
        console.log(err);
    }
};

InteractionHandler();
MessageHandler();

main();
