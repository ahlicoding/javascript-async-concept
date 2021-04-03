
console.log('Step 1');

// (try turn off the internet  Connection, and see what happended)!
const step2 = fetch('http://jsonplaceholder.typicode.com/users').then(hasil => hasil.json());
console.log('Step 2, we fetch this: ', step2);

setTimeout( () => { console.log('Step 3, after wait 3 seconds!') },3000);
console.log('Step 4');

