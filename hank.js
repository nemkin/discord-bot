import { Client, Intents, MessageEmbed } from "discord.js";

import cron from "node-cron";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

class Media {
  static async cat() {
    const url = "https://api.thecatapi.com/v1/images/search?mime_types=gif";
    const response = await fetch(url, {
      headers: { "x-api-key": process.env.CAT_API_KEY },
    });
    const json = await response.json();
    return json[0].url;
  }

  static fu() {
    return "https://c.tenor.com/vKqX9v3pAEIAAAAC/flipping-off-flip-off.gif";
  }

  static hearts() {
    return "https://cdn.discordapp.com/emojis/809508000100122685.gif";
  }

  static cryCat() {
    return "https://cdn.discordapp.com/emojis/922190379791581274.webp";
  }

  static eatCat() {
    return "https://c.tenor.com/IMYZL-7t2ucAAAAC/cat-butt.gif";
  }
}

client.on("message", async (message) => {
  const msg = message.content;
  if (msg.startsWith("!hello")) {
    const cat = await Media.cat();
    message.reply(`Is it me you're looking for ${message.author}?`);
    message.channel.send(cat);
  } else if (msg.startsWith("!fu")) {
    const fu = Media.fu();
    message.reply(fu);
  }
});

client.login(process.env.DISCORD_TOKEN);
