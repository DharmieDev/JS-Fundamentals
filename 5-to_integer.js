const argument = process.argv;
if(argument.length < 3 ){
    console.log("Not a number")
    return;
} else{
    console.log("My number:" ,Number(argument[2]))
}