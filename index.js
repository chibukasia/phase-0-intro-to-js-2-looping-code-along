// Code your solutions in this file
const messages = [];

function writeCards (name, eventName) {
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
        //console.log(messages)
    }
    console.log(messages)
    return messages;
}

function countDown(number) {
    let num = number;
     while (num >= 0) {
        console.log(num)
        num --;
     }
}

countDown(40)