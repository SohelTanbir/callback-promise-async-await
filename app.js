// learn async and await


// synchronous code run 
// console.log("asynchronous code executed");
// console.log("1");
// console.log("2");
// console.log("3");

// // asynchronous 
// console.log("synchronous code executed");
// console.log("1");
// setTimeout(()=>{console.log("2");},2000)
// console.log("3");


// callback system
function one() {
    console.log("I am from Callback function");
}

function two(name, callback) {
    console.log("name =", name);
    callback();
}

// two("sohel rana", one)

// to understand callback and Synchronous and Asynchronous

const stocks = {
    fruits: ['banana', "graps", "strawberry", "apple"],
    liquied: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}


// maintain oder and serve ice cream to customer

function order(fruit_name, call_production) {
    // take an oder and process then call production
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);

}

function production() {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("fruit has bee chopped");
            setTimeout(() => {
                console.log(`${stocks.liquied[0]} and ${stocks.liquied[1]} added`);
                setTimeout(() => {
                    console.log("start the machine");
                    setTimeout(() => {
                        console.log(`${stocks.holder[1]} container selected`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} toppings is selected`);
                            setTimeout(() => {
                                console.log("serve ice cream ");
                                console.log("completed the order");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}


// call the oder function
// order(2, production);

// how to solve callback hell problem using Promise
// Promise has three stages
// 1. Pending
// 2. Resolved
// 3. Rejected

const shop_open = true;

function Order(time, work){
    return new Promise(function(resolved, rejected){
        
        if(shop_open){
          setTimeout(() => {
            // work is getting done here
            resolved(work())
          }, time);
        }else{
            rejected(console.log("our shop is closed"));
        }
    })
}
Order(2000, ()=> console.log(`${stocks.fruits[2]} was selected`))
.then(()=> Order(0000, ()=> console.log("Production has started ")))
.then(()=> Order(2000, ()=>console.log("fruit has bee chopped")))
.then(()=> Order(2000, ()=>console.log("fruit has bee chopped")))
.then(()=> Order(1000, ()=>console.log(`${stocks.liquied[0]} and ${stocks.liquied[1]} added`)))
.then(()=> Order(2000, ()=>console.log(`${stocks.holder[1]} container selected`)))
.then(()=> Order(3000, ()=>console.log(`${stocks.toppings[1]} toppings is selected`)))
.then(()=> Order(2000, ()=>console.log("serve ice cream ")))
.catch((err)=> console.log("Customer has gone!"))
.finally(()=> console.log("end of day"))