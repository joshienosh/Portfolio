function showlogin(){

    var loginf=document.getElementById("mlogin");
    loginf.style.display="block";

}
function progress() {
    var elem = document.getElementById("myBar");
    var prog=document.getElementById("myProgress");

    prog.style.opacity="1";
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);

            var auth=checkuser();    //checking user authentication
            
            if(auth==1)
            {
                var preloader=document.getElementById("preloader");
                var hp=document.getElementById("homepage");
                hp.style.height="630px";
                preloader.style.opacity="0";
                preloader.style.height="0px";
            }

            else{

                alert("Sorry!! You ought to think more!")
            }


        } else {
        	var incr=Math.floor(Math.random()*8);
            width=width+incr;
            elem.style.width = width + '%';
        }
    }
} 
function checkuser(){
    var uname=document.getElementById("uname");
    var pwd=document.getElementById("pwd");
    if(uname.value=="I_am_smart" && pwd.value=="BayesTheorem")
        {return 1;}
    else
        {return 0;}
}
function changeuser(elem) {
    elem.style.backgroundColor="red";
}


function reset()
{
    var home=document.getElementById("mhome");
    var about=document.getElementById("maboutme");
    var proj=document.getElementById("mprojects");
    var contact=document.getElementById("mcontact")

    home.style.height="0px";
    about.style.height="0px";
    proj.style.height="0px";
    contact.style.height="0px";
}

function showhome(){
    reset();
    var home=document.getElementById("mhome");
    home.style.height="754px";
}

function showabout(){
    reset();
    var about=document.getElementById("maboutme");
    about.style.height="754px";
}

function showproj(){
    reset();
    var proj=document.getElementById("mprojects");
    proj.style.height="754px";
}

function showcontact(){
    reset();
    var contact=document.getElementById("mcontact")
    contact.style.height="754px";
}