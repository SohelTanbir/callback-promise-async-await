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

function Order(time, work) {
    return new Promise(function (resolved, rejected) {

        if (shop_open) {
            setTimeout(() => {
                // work is getting done here
                resolved(work())
            }, time);
        } else {
            rejected(console.log("our shop is closed"));
        }
    })
}
Order(2000, () => console.log(`${stocks.fruits[2]} was selected`))
// .then(()=> Order(0000, ()=> console.log("Production has started ")))
// .then(()=> Order(2000, ()=>console.log("fruit has bee chopped")))
// .then(()=> Order(2000, ()=>console.log("fruit has bee chopped")))
// .then(()=> Order(1000, ()=>console.log(`${stocks.liquied[0]} and ${stocks.liquied[1]} added`)))
// .then(()=> Order(2000, ()=>console.log(`${stocks.holder[1]} container selected`)))
// .then(()=> Order(3000, ()=>console.log(`${stocks.toppings[1]} toppings is selected`)))
// .then(()=> Order(2000, ()=>console.log("serve ice cream ")))
// .catch((err)=> console.log("Customer has gone!"))
// .finally(()=> console.log("end of day"));

// async and await

// a normal way to promse
function takeOrder() {
    return new Promise((resoloved, rejected) => {
        // write code here
    })
}

// in async and await promise handle
async function takeOrder() {
    // write code here
    console.log("async and await system");
}


// use of await keyword

function topping_choice() {
    return new Promise(function (resoloved, rejected) {
        setTimeout(() => {
            resoloved(console.log("which topping would you like?"))
        }, 3000);
    })
}

async function kitchen() {
    console.log("1");
    console.log("2");
    console.log("3");
    const topping_choose = await topping_choice();
    console.log("4");
    console.log("5");
}
// kitchen();

// real use of async and await

function getData() {
    console.log("call getdata method");
    return (
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(users => users)
    )

}



// do some using async function
async function show() {
    try {
        const users = await getData();
        console.log(users[0].id);
        console.log("Total user =", users);
        console.log("call show method");
    }
    catch (err) {
        console.log(err.message);
    }



}
show()