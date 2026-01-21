const input_03 = +process.argv[2]

for (let i = 1; i <= input_03; i++){
    if (i % 3 === 0 && input_03 % 5 === 0){
    console.log("FizzBuzz")
}
else if (i % 3 === 0){
    console.log("Fizz")
}
else if (i % 5 === 0){
    console.log("Buzz")
}
else {
    console.log(i)
}
}