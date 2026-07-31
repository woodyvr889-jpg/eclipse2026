/* =========================================
   SOLAR ECLIPSE GUIDE UK 2026
   SCRIPT.JS
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loading-screen");
    const app = document.getElementById("app");

    setTimeout(() => {

        if(loader){
            loader.style.opacity = "0";
            loader.style.transition = "opacity .5s";
        }

        setTimeout(()=>{

            if(loader)
                loader.style.display="none";

            if(app)
                app.classList.remove("hidden");

        },500);


    },2500);

});



/* =========================================
   PAGE NAVIGATION
========================================= */


function navigateTo(page){

    document.querySelectorAll(".page")
    .forEach(p=>{
        p.classList.remove("active");
    });


    const target =
    document.getElementById(
        "page-" + page
    );


    if(target){
        target.classList.add("active");
    }


    document.querySelectorAll(".nav-btn")
    .forEach(btn=>{

        btn.classList.remove("active");

        if(btn.dataset.page===page){
            btn.classList.add("active");
        }

    });


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



/* =========================================
   COUNTDOWN
========================================= */


const eclipseDate =
new Date(
"August 12, 2026 18:13:45"
);


function updateCountdown(){


const now = new Date();


let difference =
eclipseDate - now;



if(difference <=0){

document.getElementById("countdown-status")
.innerHTML="The eclipse has started!";

return;

}



let days =
Math.floor(
difference/(1000*60*60*24)
);


let hours =
Math.floor(
(difference/(1000*60*60))%24
);


let mins =
Math.floor(
(difference/(1000*60))%60
);


let secs =
Math.floor(
(difference/1000)%60
);



document.getElementById("cd-days").textContent =
days;


document.getElementById("cd-hours").textContent =
hours;


document.getElementById("cd-mins").textContent =
mins;


document.getElementById("cd-secs").textContent =
secs;


}


setInterval(
updateCountdown,
1000
);


updateCountdown();





/* =========================================
   DARK MODE
========================================= */


function toggleDarkMode(enabled){

if(enabled){

document.body.style.background =
"radial-gradient(circle at top,#1b2750,#050505 60%)";

}

else{

document.body.style.background =
"#eeeeee";

document.body.style.color =
"#111";

}

}





/* =========================================
   ANIMATION TOGGLE
========================================= */


function toggleAnimations(enabled){


if(enabled){

document.body.style.setProperty(
"--animations",
"1"
);

}

else{

document.body.style.setProperty(
"--animations",
"0"
);

}

}





/* =========================================
   LOCATION BUTTON
========================================= */


function requestLocation(){


if(!navigator.geolocation){

alert(
"Location is not supported on this device."
);

return;

}



navigator.geolocation.getCurrentPosition(

(position)=>{


alert(
"Location enabled successfully!"
);


},

()=>{


alert(
"Unable to access location."
);


}


);


}





/* =========================================
   ECLIPSE SIMULATOR
========================================= */


const slider =
document.getElementById(
"eclipse-slider"
);


if(slider){


slider.addEventListener(
"input",
()=>{


let value =
slider.value;



let moon =
document.getElementById(
"sim-moon"
);



if(moon){

moon.style.transform =
`translateX(${value}px)`;

}



let label =
document.getElementById(
"sim-label"
);



if(label){


if(value < 40){

label.textContent =
"Eclipse beginning";

}

else if(value < 70){

label.textContent =
"Greatest eclipse";

}

else{

label.textContent =
"Eclipse ending";

}


}


}

);

}





/* =========================================
   SHOP BUTTON
========================================= */


function openShop(){

navigateTo("shop");

}





/* =========================================
   PWA INSTALL
========================================= */


let installPrompt;


window.addEventListener(
"beforeinstallprompt",
(e)=>{

e.preventDefault();

installPrompt=e;


const section =
document.getElementById(
"install-section"
);


if(section){

section.classList.remove(
"hidden"
);

}


});



function installPWA(){


if(!installPrompt)
return;



installPrompt.prompt();



installPrompt=null;


}





/* =========================================
   START APP
========================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


navigateTo("home");


});
