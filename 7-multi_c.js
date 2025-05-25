const argument = process.argv[2];
const myNumber = parseInt(argument)
if(isNaN(myNumber)){
    console.log("Missing number of occurrences")
} else{
    for(let i = 0; i < myNumber; i++){
        console.log("C is fun"); 
}
}
