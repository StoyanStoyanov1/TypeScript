// const names: Array<string> = [];

// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000)
// });

// promise.then(data => {
//     data.split(' ');
// });

function merge<T, U>(objA: {name: string}, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge<{name: string}, {age:number}>({name: 'Max'}, {age:30});
console.log(mergeObj.age);
