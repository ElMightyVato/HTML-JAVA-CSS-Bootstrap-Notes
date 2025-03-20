/* new promise (function(resolve,reject) {
    used for api calls
    because api call can take an unknonw amount of time.
    ex 1000 users using it --> might take a few minutes 
    1000000 user using it ---Could take a while for it to retrieve 
    1 user using it -> pretty easy to get your data
})
*/

let pizzaPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Pizza delived!");
    }, 3000); //delivery in 3 seconds
});

pizzaPromise.then(function(message) {
    document.getElementById('deliveryStatus').textContent = message;
}).catch(function(error) {
    console.log("delivery failed:", error);
});

// More examples
function myStringChecker(my_str) {
    return new Promise((resolve, reject) => {
        if (my_str.length > 6) {
            resolve("This is greater than 6")
        } else {
            reject("this is less than or equal to 6")
        }
    })
}

myStringChecker("hello").then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})







