StorageUser = window.localStorage;

current_user_name = localStorage.getItem('Current User Name');

document.getElementById("username").innerHTML = '(' + current_user_name + ')';

let comments = [];

let view_username;
let view_text;

let comment_div = document.getElementById("comments_list");

comment_div.innerHTML = "";

window.addEventListener('load', () => {
    comments = JSON.parse(localStorage.getItem("comments") || "[]");

    for(let i = 0; i < comments.length; i++) {
        view_username = comments[i].username;
        view_text = comments[i].text;
        view_date = comments[i].date;


        if (current_user_name ===  view_username) {
            let comment_block =
            `
            <div class="panel-body">
            <b>${view_username} <div class="time">(${view_date}) 
                <button class='fa fa-trash-o' onclick="DelComment(${i})"></button> </div> </b>
            <p>${view_text} </p>
            <hr>
            </div>
            `;

            comment_div.innerHTML += comment_block
        }
        else{
            let comment_block =
            `
            <div class="panel-body">
            <b>${view_username} <div class="time">(${view_date})</div></b>
            <p>${view_text} </p>
            <hr>
            </div>
            `;

            comment_div.innerHTML += comment_block
        }

     

        
    };


    render();
});

function DelComment(index){

    comments.splice(index,1);

    render();

    window.location.href = "../html/comments.html";

}

function AddComment(){
        
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    var date_time = current_date+" "+current_time;	

    let user_comments = {username: current_user_name, text: text.value, date: date_time};

    comments.push(user_comments);

    render();

    window.location.href = "../html/comments.html";

    text.value = "";




}

function render() {

    localStorage.setItem("comments", JSON.stringify(comments))
}