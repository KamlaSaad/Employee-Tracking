$(document).ready(function () {

    //change user colors
    $(".profile .save").click(function () {
        var color = $(".colors").val();
        localStorage.setItem("color", color);

    });
    var userColor = localStorage.getItem("color");
    $("aside,hr,.save,thead,aside .links a:before,.activity:before,.activity:after").css("background", userColor);
    $("aside .links a:before").css("background", userColor);
    $(".input,td,th,.time").css("border-color", userColor);
    $("nav select,.content h6,label,.h1,.menu").css("color", userColor);

    //side navigation
    $(".pages div p").click(function () {
        $(".pages div p").removeClass("orange");
        //$(".links").slideUp();
        $("side").css("width", "0");
        $("next").removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).addClass("orange");
        $(this).find("next").toggleClass("fa-angle-down fa-angle-up");
        $(this).parent().find(".links").slideToggle("display");
        $(this).find("side").css("width", "5px");
    });

    localStorage.ClassName = "orange";
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
    location.replace("../login.html");
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
        //select.innerHTML = "<option value='" + months[i] + "'" + months[i] + "</option>";
    }
}
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
//show employee list and report
function Show(btn, ele, txt1, text2) {
    if (ele.style.display == "block") {
        ele.style.display = "none";
        btn.innerHTML = txt1;
    } else {
        ele.style.display = "block";
        btn.innerHTML = text2;
    }
}

