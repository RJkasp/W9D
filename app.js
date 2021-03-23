





// Hint: There is a very helpful built in method for doing the starts with part.
// Test the functions by calling each one 3 times with different arguments and 
// console logging the returned values



// Function 1 - This function will take 2 arguments expected to be integers. 
//The function will add the two arguments together and then multiple the result
// by five. The function will finally return this newly computed value.
  

function func_1(a1, a2){
     var result = a1 + a2;  //adds the 2 numbers
     return result * 5; //multiplys the result by 5
}


var results = func_1(1002, 10006); //takes in both numbers(integers)and follows the code above and prints a result to the console
console.log(results);

var results = func_1(10, 5);
console.log(results);

var results = func_1(5, 5);
console.log(results);

// Function 2 - This function will take in 1 argument expected to be a string. 
// The function will return true if the string length is > 10 characters and false otherwise.

function func_2(string){     //name of function
    if(string.length > 10){  // if string length is greater than 10 print to console true
        return true; 
    }else if(string.length < 10){  //if string length is less than 10 print to console false
        return false;
    }
}
var string = func_2(`hello world`); //func_2 is the function im envoking on the string
console.log(string); //console.log prints the string if true or false to console this string prints true 
                    // cause its 10 letters or longer

var string = func_2(`ouch`);
console.log(string);  //console.log prints out if the string is true or false because of the function i created 
                      //and because the string is only 4 letters long it prints out false because of my function i created above

var string = func_2(`im getting it`);
console.log(string);



// function 2 another way of doing it
function func_2b(string){
    if(string.length >= 10){
        console.log(true);
    }else if(string.length <= 10){
        console.log(false);
    }
}
func_2b("this is freaking crazy");
func_2b("for real");
func_2b("coding is hard");


// Function 3 - This function will take in 1 argument expected to be an array of strings. 
// The function will return the first element in the array that starts with "ph"

function func_3(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i].startsWith('ph')){
            return arr[i];
        }
    }
}

var array = func_3([`dont know if this is right`, `phenomianl`, `noway`, `phone home`])
console.log(array)

