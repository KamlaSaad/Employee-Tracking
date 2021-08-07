$(document).ready(function () {
    //change site colors
    $(".profile .save").click(function () {
        var color = $(".colors").val();
        localStorage.setItem("color", color);

    });
    var userColor = localStorage.getItem("color");
    $("aside,aside .links a:before,.save,.start,thead").css("background", userColor);
    $("aside .links a:before").css("background", userColor);
    $(".input,.time,th,td").css("border-color", userColor);
    $("nav select,.content h6,.content h5,label,.h1,.menu,.notice,.qoute p").css("color", userColor);

    //side navigation
    $(".pages div p").click(function () {
        refresh=false;
        $(".pages div p").removeClass("active");
        //$(".links").slideUp();
        $("side").css("width", "0");
        $("next").removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).addClass("active");
        $(this).find("next").toggleClass("fa-angle-down fa-angle-up");
        $(this).parent().find(".links").slideToggle("display");
        $(this).find("side").css("width", "5px");
    });

    localStorage.ClassName = "active";
    $(window).load(function () {
        var url = $(location).attr('href');
        var parts = url.split("/");
        var last_part = parts[parts.length - 1];
        last_part = last_part.replace("%20", " ");
        $(".pages a").each(function () {
            if ($(this).attr("href") == last_part) {
                $(this).parent().parent().find("p").addClass(localStorage.ClassName);
                $(this).parent().parent().find("side").css("width", "5px");
            }
        })
    })

});
//nav select
var pageLink = document.getElementById("link");
pageLink.onchange = function () {
    if (this.value == "logout") { location.replace("../login.html"); }
    else { window.location.href = this.value + ".html"; }
}
var logout = document.getElementById("logout");
logout.onclick = function () {
    location.href = "../login.html";
}
//side menu
var menu = document.getElementsByClassName("menu")[0],
    aside = document.getElementsByTagName("aside")[0];
menu.onclick = function () {
    if (aside.style.marginLeft == "-200px") {
        aside.style.marginLeft = "0px";
        this.style.left = "200px";
    } else {
        aside.style.marginLeft = "-200px";
        this.style.left = "0px";
    }
}
//month select box
function Month() {
    var select = document.getElementById("month"),
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < months.length; i++) {
        var opt = document.createElement("option");
        opt.value = months[i];
        opt.innerHTML = months[i];
        select.appendChild(opt);
    }
}
//clock
let hour = document.getElementById('h'),
    minute = document.getElementById('m'),
    second = document.getElementById('s');
var interval1;
var refresh=false;
function clock(){
   let date=new Date();
   let h=date.getHours()*30;
   let m=date.getMinutes()*6;
   let s=date.getSeconds()*6;
   hour.style.transform=`rotateZ(${h+(m/12)}deg)`;
   minute.style.transform=`rotateZ(${m}deg)`;
   second.style.transform=`rotateZ(${s}deg)`;
}
// console.log("hour "+hour);
// console.log("minute "+minute);
// console.log("second "+second);
// console.log("hour "+date.getHours()*30);
// console.log("minute "+getMinutes()*6);
// console.log("second "+getSeconds()*6);
setInterval(clock);



function startWork(btn) {
    if (btn.innerHTML == "Start Working Today") {
        refresh=false;
        btn.innerHTML = "Stop Working Today";
        interval1 = setInterval(clock);
    } else {
        refresh=true;
        btn.innerHTML = "Start Working Today";
        clearInterval(interval1);
    }
}
//let hourHand = document.querySelector('.hour'),
//    minuteHand = document.querySelector('.minute'),
//    secondHand = document.querySelector('.second');
//var interval;
//
//
//function clock() {
//    const currentDate = new Date();
//    const hours = currentDate.getHours();
//    const minutes = currentDate.getMinutes();
//    const seconds = currentDate.getSeconds();
//
//    const secondsFraction = seconds / 60;
//    const minutesFraction = (secondsFraction + minutes) / 60;
//    const hoursFraction = (minutesFraction + hours) / 12;
//
//    const secondsRotate = secondsFraction * 360;
//    const minutesRotate = minutesFraction * 360;
//    const hoursRotate = hoursFraction * 360;
//
//    secondHand.style.transform = `rotate(${secondsRotate}deg)`;
//    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
//    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
//}


// upload profile picture
var profileImgs = document.getElementsByClassName("profile-img"),
    imgBox = document.getElementById("profile-img"),
    imgFile = document.getElementById("fileImg"),
    src = document.getElementById("src");
window.onload = function () {
    for (var x = 0; x < profileImgs.length; x++) { profileImgs[x].src = localStorage.getItem("src"); }
}

imgFile.onchange = function () {
    var file = this.files;
    if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            var target = event.target.result;
            imgBox.setAttribute("src", target);
            localStorage.setItem("src", target);
        }
        fileReader.readAsDataURL(file[0]);
        src.innerHTML = imgFile.value;
    }
}

//show attendance report
function Show(btn, ele, txt1, text2) {
    if (ele.style.display == "block") {
        ele.style.display = "none";
        btn.innerHTML = txt1;
    } else {
        ele.style.display = "block";
        btn.innerHTML = text2;
    }
}