import client from "../client.js";

const reponses = ["做人不要太嚣张!😳", "菜逼🤣", "听不到菜逼😁", "...😂"];

export default async function MessageHandler() {
    await client.on("messageCreate", async (msg) => {
        if (msg.author.bot) return;
        let triggerWord = ["ez", "easy", "ggez", "noob", "shit", "uninstall"];
        try {
            for (let i = 0; i < triggerWord.length; i++) {
                msg.content.toLowerCase().split(" ").forEach((msgWord) => {
                    if (msgWord === triggerWord[i]) {
                        msg.reply(reponses[Math.floor(Math.random() * 3)]);
                        throw new Error("Break loop");
                    }
                });
            }
        } catch (err) {
            return;
        }
    });
}