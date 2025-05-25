const argument = process.argv[2];
const myNumber = parseInt(argument)
if(argument === undefined ){
    console.log("Not a number")
} 
else if(isNaN(argument)){
    console.log("Not a number")
}
else{
    console.log(`My number: ${myNumber}`)
}