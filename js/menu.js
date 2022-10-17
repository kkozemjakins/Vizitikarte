 /*For hobbys*/
var hobby = document.getElementById("square");
hobby.addEventListener("mouseover", hobbyOver);
hobby.addEventListener("mouseout", hobbyOut);

function hobbyOver(){
    document.getElementById("pill").style.display = "none";
    document.getElementById("social_media").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    
    document.getElementById("title-hobbies").style.display = "inherit";

    document.body.style.backgroundImage = "url('img/guitar.jpg')";
}

function hobbyOut(){
    document.getElementById("pill").style.display = "initial";
    document.getElementById("about_me").style.display = "initial";
    document.getElementById("social_media").style.display = "initial";

    document.getElementById("title-hobbies").style.display = "none";

    document.body.style.backgroundImage = '';
}

 /*For programming languages*/
var prog_language = document.getElementById("pill");
prog_language.addEventListener("mouseover", prog_languageOver);
prog_language.addEventListener("mouseout", prog_languageOut);

function prog_languageOver(){
    document.getElementById("square").style.display = "none";
    document.getElementById("social_media").style.display = "none";
    document.getElementById("about_me").style.display = "none";

    document.getElementById("title-prog_lang").style.display = "inherit";

    document.body.style.backgroundImage = "url('img/prog_lang.jpg')";
}

function prog_languageOut(){
    document.getElementById("square").style.display = "initial";
    document.getElementById("social_media").style.display = "initial";
    document.getElementById("about_me").style.display = "initial";

    document.getElementById("title-prog_lang").style.display = "none";

    document.body.style.backgroundImage = '';
}


 /*For contacts*/
var social = document.getElementById("social_media");
social.addEventListener("mouseover", socialOver);
social.addEventListener("mouseout", socialOut);

function socialOver(){
    document.getElementById("square").style.display = "none";
    document.getElementById("pill").style.display = "none";
    document.getElementById("about_me").style.display = "none";

    document.getElementById("title-social_media").style.display = "inherit";

    document.body.style.backgroundImage = "url('img/social_media.jpg')";
}

function socialOut(){
    document.getElementById("square").style.display = "initial";
    document.getElementById("pill").style.display = "initial";
    document.getElementById("about_me").style.display = "initial";

    document.getElementById("title-social_media").style.display = "none";

    document.body.style.backgroundImage = '';
}

 /*About me*/
 var about_me = document.getElementById("about_me");
 about_me.addEventListener("mouseover", about_meOver);
 about_me.addEventListener("mouseout", about_meOut);
 
 function about_meOver(){
     document.getElementById("square").style.display = "none";
     document.getElementById("pill").style.display = "none";
     document.getElementById("social_media").style.display = "none";
     
     document.getElementById("title-about_me").style.display = "inherit";
     
     document.body.style.backgroundImage = "url('img/about_me.jpg')";
 }
 
 function about_meOut(){
     document.getElementById("square").style.display = "initial";
     document.getElementById("pill").style.display = "initial";
     document.getElementById("social_media").style.display = "initial";

     document.getElementById("title-about_me").style.display = "none";

     document.body.style.backgroundImage = '';
 }