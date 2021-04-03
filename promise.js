
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

createPost({ title: 'Post Three', body: 'This is Post Three'})
.then(getPosts)
.catch(salah => console.log(salah));