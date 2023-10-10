import { Client, IntentsBitField, Routes, REST, ApplicationCommandOptionType } from 'discord.js';
import "dotenv/config";

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const commands = [
    {
        name: "做人不要太嚣张",
        description: "做人不可以太嚣张",
        options: [
            {
                name: "name",
                description: "send this message to someone",
                type: ApplicationCommandOptionType.User,
                required: true,
            }
        ],

    }
];

const TOKEN = process.env.TOKEN;

const rest = new REST({ version: 10, }).setToken(TOKEN);

const main = async () => {

    try {
        await rest.put(Routes.applicationGuildCommands(process.env.BOTID, process.env.SERVERID), {
            body: commands,
        });
        client.login(TOKEN);
    } catch (err) {
        console.log(err);
    }
};

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;
    let triggerWord = ["ez", "easy", "ggez", "noob", "shit", "uninstall"];
    try {
        for (let i = 0; i < triggerWord.length; i++) {
            msg.content.toLowerCase().split(" ").forEach((msgWord) => {
                if (msgWord === triggerWord[i]) {
                    msg.reply("做人不要太嚣张!");
                    throw new Error("Break loop");
                }
            });
        }
    } catch (err) {
        return;
    }

});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "做人不要太嚣张") {
        interaction.reply({ content: `<@${interaction.options.get("name").value}> 做人不要太嚣张` });
    }
});



main();