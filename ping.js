module.exports= {
    name: 'ping',
    description: 'ping test to see if the bot is online',

    execute(message, args){
        message.channel.send('pong!');
    }
}