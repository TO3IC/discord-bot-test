import client from "../client.js";

export default async function InteractionHandler() {
    await client.on("interactionCreate", (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === "做人不要太嚣张") {
            interaction.reply({ content: `<@${interaction.options.get("name").value}> 做人不要太嚣张` });
        }
    });
}
