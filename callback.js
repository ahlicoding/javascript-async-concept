
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

function createPost(inputpost, callback){
    setTimeout(() => {
        posts.push(inputpost);
        callback();
    } , 2000);     
}

//getPosts();


createPost({ title: 'Post Three', body: 'This is Post Three'}, getPosts);