const input_04 = +process.argv[2]
//if (isNaN(input_04) || input_04 < 1){
//    
//}
let result = ""
for (let i = 0; i <= input_04; i--){
    if (i < input_04){
        result += ""
    }else {
        result += "i"
    }
}
console.log(result)