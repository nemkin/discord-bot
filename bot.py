import discord
import requests
import random

with open('token') as token_file:
    token = token_file.read().replace('\n','')
with open('apikey') as apikey_file:
    apikey = apikey_file.read().replace('\n','')

headers = {'x-api-key': apikey}

client = discord.Client()

def cat():
  response = requests.get(url='https://api.thecatapi.com/v1/images/search?mime_types=gif', headers=headers)
  data = response.json()
  return data[0]["url"]


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!hello'):
        catgif = cat()
        await message.channel.send(f'Is it me you\'re looking for {message.author.mention}?')
        await message.channel.send(catgif)

client.run(token)

