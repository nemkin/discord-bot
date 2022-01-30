import { Client, Intents, MessageEmbed } from "discord.js";

import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
    
  const channel = await client.channels.fetch(process.env.CHANNEL_ID);
  const user = await client.users.fetch(process.env.USER_ID);
  
  const message = new MessageEmbed()
    .setDescription("Hast du ja gegessen? :eyes:\n\n" + user.toString())
    .setAuthor({
      name: "Hallo Tinny!",
      iconURL: "https://cdn.discordapp.com/emojis/809508000100122685.gif",
    })
    .setFooter({
      text: "Bitte?",
      iconURL: "https://cdn.discordapp.com/emojis/922190379791581274.webp",
    })
    .setTimestamp()
    .setColor("#BD93F9")
    .setImage("https://c.tenor.com/IMYZL-7t2ucAAAAC/cat-butt.gif");
    
    cron.schedule("0 12,14,18,20 * * *", () => {
      channel.send({ embeds: [message] });
    });
});

client.login(process.env.DISCORD_TOKEN);
