const argument = process.argv[2];
const size = parseInt(argument)
if(isNaN(size)){
    console.log("Missing size")
} else{
    for(let i = 0; i < size; i++){
       let rowString = "";
       for (let j = 0; j < size; j++) { 
        rowString += "X"; 
    }
    console.log(rowString);
}
}