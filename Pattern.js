function validate(zip) {
    let zipRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
    if (zipRegex.test(zip)) {
        console.log("Zip is correct");
    } else {
        console.log("Zip is incorrect");
    }
}
var prompt = require('prompt-sync')();
let zip = prompt("Enter the zip");
validate(zip);
