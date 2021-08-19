const path = require('path');

module.exports= {
    name: 'summon',
    description: 'summons the dean to the voice channel',

    execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You must be in a voice channel to speak to the Dean.');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send("You don't have permission for that, Jeffrey.");
        if (!permissions.has('SPEAK')) return message.channel.send("You don't have permission for that, Jeffrey.");

        voiceChannel.join().then((connection) => {
            connection.play(path.join(__dirname, 'Dean.m4a'));
        });
    }
}