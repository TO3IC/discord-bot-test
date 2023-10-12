import { ApplicationCommandOptionType } from "discord.js";

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

export default commands;