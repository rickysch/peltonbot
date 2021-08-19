module.exports= {
    name: 'quote',
    description: 'delivers a quote from the dean',
    const :messages = ["Message1", "Message2", "Message3", "Message4"],

const :randomMessage = messages[Math.floor(Math.random() * messages.length)],

    execute(message, args){
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage);
    }
}