StorageUser = window.localStorage;

let user_data = [];

const login = document.getElementById('buttonLOGIN');

const reg = document.getElementById('buttonREG');

window.addEventListener('load', () => {
    user_data = JSON.parse(localStorage.getItem("user_data") || "[]");
    render();
});

document.getElementById('buttonREG').addEventListener('click', () => {

    login.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("login_div").innerHTML = ` 
    <p><input id="username" class="input" type="text"  maxlength="30" placeholder="Username" required></p>
    <p><input id="password" class="input" type="password" maxlength="30" placeholder="Password" required></p>
    <p><input id="passwordADD" class="input" type="password" maxlength="30" placeholder="Confirm password" required></p>
    <p><button class="button" id="Registracija" onclick="registracija()" style="font-size: 40px;margin-top: 20%;height: 73px;width: 500px;">Registration</button></p>
    <p><a href="login.html"><button class="atpakaļ">Back</button></a></p>`;

})

document.getElementById('buttonLOGIN').addEventListener('click', () => {

    login.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("login_div").innerHTML = `      
    <p><input id="username" class="input" type="text"  maxlength="30" placeholder="Username" required></p>
    <p><input id="password" class="input" type="password" maxlength="30" placeholder="Password" required></p>
    <p><button class="button" id="Login" onclick="Login()" style="font-size: 40px;margin-top: 20%;height: 73px;width: 500px;">Login</button></p>
    <p><a href="login.html"><button class="atpakaļ">Back</button></a></p>`;

})

function Login(){
    
    for(let i = 0; i < user_data.length; i++) {
        login_name = document.getElementById('username').value;

        login_pass = document.getElementById('password').value;



        if(login_name === user_data[i].username && login_pass == user_data[i].password){

            window.location.href = "../html/menu.html";
            let current_user_name = localStorage.setItem("Current User Name", login_name)
        }

    }

    username.value = "";
    password.value = "";

}

function registracija(){
    let data = {username: username.value, password: password.value};

    if(password.value === passwordADD.value && password.value != ""){
        user_data.push(data);

        render();

        window.location.href = "../html/login.html";
    }

    username.value = "";
    password.value = "";
    passwordADD.value = "";



}

function render() {

    localStorage.setItem("user_data", JSON.stringify(user_data))
}