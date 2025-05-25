const argument = process.argv;
if(argument.length < 3){
    console.log("No arguments")
} else{
    console.log(argument[2] + " is " + argument[3])
}