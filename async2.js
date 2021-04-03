
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
            if(!error){
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


// async function intial(){
//     let x = await createPost({ title: 'Post Three', body: 'This is Post Three'});

//     getPosts();
// }

// intial();

async function fetchUsers(){
    const hasil = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await hasil.json();
    console.log(data);
}

fetchUsers();