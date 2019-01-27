import discord
import requests

client = discord.Client()

@client.event
async def on_message(message):

    if message.author == client.user:
        return

    print("(" + message.channel.name + ") " +\
          message.author.name  + ": " +\
          message.content)

    #!hello
    if message.content.startswith('!hello'):
        msg = 'Hello {0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)

    #!vicc
    if message.content.startswith('!vicc'):
        result = requests.get(url='http://api.icndb.com/jokes/random')
        msg = result.json()['value']['joke']
        await client.send_message(message.channel, msg)

    #!cica
    if message.content.startswith('!cica'):
        result = requests.get('https://api.thecatapi.com/v1/images/search?mime_types=gif&size=full')
        msg = result.json()[0]['url']
        await client.send_message(message.channel, msg)

    #ping
    if message.content.startswith('ping'):
        msg = 'pong'
        await client.send_message(message.channel, msg)

    #pong
    if message.content.startswith('pong'):
        msg = 'ping'
        await client.send_message(message.channel, msg)

    if message.channel.name != 'bottest':
        return

@client.event
async def on_ready():
    print(client.user.name + ' is running.')

with open('token') as token_file:
    token = token_file.read().replace('\n','')

client.run(token)
