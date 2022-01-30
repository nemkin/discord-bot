#!/bin/bash

echo "RUN" >> /home/vikto/output.txt
/usr/bin/node /home/vikto/discord-bot/hank_message.js 2>&1 >> /home/vikto/output.txt
echo "DONE" >> /home/vikto/output.txt

