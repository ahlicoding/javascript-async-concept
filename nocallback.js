
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
    setTimeout(() => {
        posts.push(inputpost);
    } , 2000);     
}


createPost({ title: 'Post Three', body: 'This is Post Three'});

getPosts();