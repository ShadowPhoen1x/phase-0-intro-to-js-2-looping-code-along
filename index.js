// Code your solutions in this file
// example of for loop
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   } 

// for (let age = 30; age < 40; age+=1) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"]

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
             console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
}
return names;
}
writeCards(names);

// {function writeCards (names,event)
//     {const messages = []
//         for (let i = 0; i < names.length; i++)
//          {'Thank you, ${names[i]} for the wonderful ${event} gift';}
//          messages.push(message);
//         return messages }
//     }

// Example of while loop
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function countDown(count){
// let countDown1 = 10;
while (count >= 0) {
  console.log(count--);
} 
}
countDown(15);