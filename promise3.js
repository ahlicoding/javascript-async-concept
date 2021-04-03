// Promise 3 (with fetch to online, try turn off the internet  RTCPeerConnection, and see what happended)!

const posts = [
    {title: 'Post One' , body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout( () => {
        let output  =  '' ;
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('result').innerHTML= output ;
    },1000);
}

function createPost(inputpost){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(inputpost);

            const error = false;
            if(true){
                resolve();
            }
            else{
                reject('Error!!  Something wrong');
            }

        },2000 );
    });


    
}

// createPost({ title: 'Post Three', body: 'This is Post Three'})
// .then(getPosts)
// .catch(err => console.log(err));

const promise1 = Promise.resolve('This is testing  Promise All');
const promise2 = 200;
const promise3 = new Promise( (resolve, reject) =>
{
    setTimeout(resolve,2000,'Goodbye')
});

const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(hasil => hasil.json());

Promise.all([promise1,promise2,promise3,promise4]).then( hasil => console.log(hasil)).catch(salah => console.log(salah));