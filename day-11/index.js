/* Day 11: Promises and async await */

/* Activity 1: Understanding promises */
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. 
const newProm = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`This will be resolve after two seconds`);
    },2000);

});

newProm.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

// Task 2: Create a promise that rejects with an error message after 2 second timeout and handle the error using catch.
const rejProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error(`This will be rejected after two seconds`));
    },2000);
});

rejProm.then((message)=> {
    console.log(console.message);
}).catch((error) => {
    console.log(error.message);
})

/* Activity 2: Chaining promises */

// Task 3 Create a sequence of promises that simulates fetching data from a server . chain the promises to log the message in a specific order
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay)
    })
}

// chaining promises to log messages in a specific order
fetchData("Fetching user data...", 1000)
.then((message) => {
    console.log(message);
    return fetchData('Fetching posts...', 2000);
}).then((message) => {
    console.log(message);
    return fetchData('Fetching comments...', 1500);
}).then((message) => {
    console.log(message);
    return fetchData('All data fetched successfully');
}).catch((error) => {
    console.log("An error occured: ", error);
})

/* Activity 3: using async await */
// Task 4: Write an async function which awaits for the promise to get resolve and then logs the resolve value

const newAsyncPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`This will resolve after 10 sec`)
    }, 10000);

});

const asyncFun = async() => {
    const status = await newAsyncPromise;
    console.log(status);
}

asyncFun();

// Task 5: Write a async function which handles a rejected promise using try catch method and logs the error message
const asyncErrorProm = new Promise((resolve, reject) => {
    reject('This will be rejected');
})

const asyncErrFun = async() => {
    try {
        const result = await asyncErrorProm;
        
    } catch (error) {
        console.log(`The error is ${error}`);
        
    }
}

asyncErrFun();

/* Activity 4: Fetching the data from an api */

// Task 6: Use the fetch Api to get data from a public api and log the data to the console using promises

const apiUrl  = 'https://jsonplaceholder.typicode.com/posts';

// function to fetch data from the api
function fetchData(url) {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('Network was not okay');
        }
        return response.json();
    })
};

fetchData(apiUrl)
.then(data => {
    console.log('Data fetched successfully', data);
}).catch(error => {
    console.error('An error occured:', error);
})

// Task 7 :  Use the fetch Api to get data from a public api and log the data to the console using async await

const fetchDataAsync = async () => {
    try {
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Assuming the response is JSON
        console.log(`Using async await`, data);
    } catch (error) {
        console.error(`Failed to fetch data: ${error.message}`);
    }
}

fetchDataAsync();

// Activity 5: concurrent promises
// Task 8: Use promise.all to wait for multiple promise to get resolved and log the value

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
})


const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000);
});



Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
}).catch((error) => {
    console.error('one of promises got rejected', error);
})


// Task 9: Use promise.race to to log the first value of the first promise that resolves around multiple promises
Promise.race([promise1, promise2, promise3])
.then((value) =>  {
    console.log(value);
}).catch((error) => {
    console.error('one of promises got rejected', error);
})

const sentence = 'I am a bachelor with amazing view';

// const vowels = ['a', 'e', 'i', 'o', 'u']

// const countVowels = (str, vowels) => {
//     let count = 0;
//     for(let char of str.toLowerCase()) {
//         if(vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// const numberOfVowels = countVowels(sentence, vowels);
// console.log(numberOfVowels);

// // flatten object
// const flattenObject = (obj, parent='', res ={}) => {
//     for(let key in obj){
//     if(obj.hasOwnProperty(key)) {
//         let propName = parent ? parent + '.' + key : key
//         if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//             flattenObject(obj[key], propName, res);
//         } else {
//             res[propName] = obj[key];
//         }
//     }
// }
//     return res;
// }

// const nestedObject = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e:3,
//             f:4,
//         }
//     },
//     g:5
// };


// const flatObject = flattenObject(nestedObject);
// console.log(flatObject);