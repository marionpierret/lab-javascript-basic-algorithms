// Iteration 1: Names and Input
let driverName = "Marion";
console.log(`The driver's name is ${driverName}.`);

let navigatorName = "Lea";
console.log(`The navigator's name is ${navigatorName}.`);

// Iteration 2: Conditionals
if (driverName.length > navigatorName.length) {
  console.log(
    `${driverName} has the longest name, it has ${driverName.length} characters.`
  );
} else if (driverName.length < navigatorName.length) {
  console.log(
    `${navigatorName} has the longest name, it has ${navigatorName.length}.`
  );
} else {
  console.log(
    `They both have equally long names, ${driverName.length} characters!`
  );
}

// Iteration 3: Loops

let driverNameUpper = "";
for (let i=0; i<driverName.length; i++){
     driverNameUpper += `${driverName[i].toUpperCase()+' '}`
}
console.log (driverNameUpper)


let reversed="";
for (let i=navigatorName.length -1; i>=0; i--){
        reversed +=navigatorName[i]
    }
console.log (reversed)



if (driverName.localeCompare(navigatorName)){
  console.log("The driver's name goes first")
}else if (navigatorName.localeCompare(driverName)){
  console.log("The navigator's name goes first")
}else{
  console.log("You both have the same name?")
}





