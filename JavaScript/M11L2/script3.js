// for loop ==> Number of iterations or iterating through an array
// while loop
// do while loop
// for in loop


/* 

For (initialization; condition; increment) {
    code here
}

*/

// FOR

for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}

let my_arr = [1,2,3,4,5,6]
for (let i = 0; i < my_arr.length; )

// WHILE

let count = 0
while (count < 5) {
    console.log("Count:", count)
    if (count == 2) {
        console.log("Breaking...")
        break
    }
    count ++
}

// DO WHILE

// 1 main reason for difference. WIll always run at least once. Even if the condition isn't meant

let num = 7;
do {
    console.log("Number:", num);
    num ++
} while (num <= 5);

/* 
do {
    code inside here
} while (condition/expression)

*/

// FOR....IN LOOP
// This will only provide the index number instead of listing the fruit if you wanted to do the number along with the fruit
// you could do this instead console.log("fruit", fruits[fruit]); the output will be apple bannana cherry instead of
// fruit 0 fruit 1 fruit 3
const fruits = ['apple', 'banana', 'cherry']
for (const fruit in fruits) {
    console.log("fruit", fruit);
}

// NESTED LOOPS

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log('${i}, ${j}');
    }
}