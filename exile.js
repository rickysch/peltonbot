module.exports= {
    name: 'exile',
    description: 'removes the dean from the voice channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You must be in the voice channel to stop the Dean.');
        await voiceChannel.leave();
        await message.channel.send('Goodbye, Jeffrey :smiling_face_with_tear:')
    }
}