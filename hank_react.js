import { Client, Intents } from "discord.js";

import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const catUrl = "https://api.thecatapi.com/v1/images/search?mime_types=gif";

async function cat() {
  const response = await fetch(catUrl, {
    headers: { "x-api-key": process.env.CAT_API_KEY },
  });
  const json = await response.json();
  const cat = json[0].url;
  return cat;
}

const THECAT = await cat();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  const channel = client.channels.cache.get(process.env.CHANNEL_ID);
  channel.send(THECAT);
});

client.login(process.env.DISCORD_TOKEN);
