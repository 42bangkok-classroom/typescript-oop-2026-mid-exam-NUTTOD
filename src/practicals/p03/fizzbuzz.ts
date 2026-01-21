const input_03 = +process.argv[2]

let answer: string[] = [];
 for (let i = 0; i <= input_03; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log("FizzBuzz");
     } else if (i % 3 === 0) {
        console.log("Fizz");
     } else if (i % 5 === 0) {
        console.log("Buzz");
     } else {
        console.log(i);
     }
}