var theme = document.getElementById("theme")
var themeball = document.getElementById("theme-ball")
var themeicon = document.getElementById("theme-icon")
var themebg = document.getElementById("theme-bg")
var body = document.getElementById("body")
var outer = document.getElementById("outer")
var loader = document.getElementById("loader")
var buttonleft = document.getElementById("button-left")
var buttonright = document.getElementById("button-right")
var btnleft = document.getElementById("button-leftt")
var btnright = document.getElementById("button-rightt")
var eduscroll = document.getElementById("edu-scroll")
var proscroll = document.getElementById("pro-scroll")
var star = document.getElementsByClassName("star")
var starvalue = 0
var modal = document.getElementById("modalte")
var starin = document.getElementById("star-value")
var cbody = document.getElementById("chatbot-body")
var cinput = document.getElementById("chat-input")
var home = document.getElementById("home")
var about = document.getElementById("about")
var edua = document.getElementById("education")
var educard = document.querySelectorAll("#educar")
var pcard = document.querySelectorAll(".project-card")
var form = document.getElementById("fo")
var inp = document.querySelectorAll(".form input")
var mes = document.getElementById("message")
var bk = document.querySelectorAll("#bk")
var ci = document.querySelectorAll("#star-form input")[0]
var nav = document.getElementsByTagName("nav")[0]
var snow = document.getElementsByClassName("fa-snowflake")

//loader

var loader = document.getElementById("loader")
window.addEventListener("load", function () {
    loader.classList.add("d-none")
    body.style.opacity = "1"
})

function themefu() {
    if (theme.checked == true) {
        themeball.style.left = "32px"
        themeicon.classList.add("fi-ts-clouds-moon")
        themeicon.classList.remove("fi-ts-cloud-sun")
        themebg.classList.add("bg-dark")
        themebg.classList.remove("bg-warning")
        body.classList.add("bg-dark")
        home.classList.add("text-white")
        about.classList.add("text-white")
        buttonleft.style.backgroundColor = "white"
        form.classList.add("border-white", "text-bg-dark")
        form.classList.remove("bg-white")
        mes.style.border = "1px solid white"
        cbody.classList.add("text-bg-dark")
        ci.style.border = "1px solid white"
        cinput.classList.add("text-bg-dark")
        buttonleft.style.background = "linear-gradient(to right, white, rgb(255, 255, 255, 0))"
        buttonright.style.background = "linear-gradient(to left, white, rgb(255, 255, 255, 0))"
        btnleft.style.background = "linear-gradient(to right, white, rgb(255, 255, 255, 0))"
        btnright.style.background = "linear-gradient(to left, white, rgb(255, 255, 255, 0))"
        nav.classList.remove("bg-primary")
        nav.classList.add("text-bg-dark")

        for (i = 0; i < snow.length; i++) {
            snow[i].classList.add("text-white")
            snow[i].classList.remove("text-primary")
        }

        for (i = 0; i < bk.length; i++) {
            bk[i].classList.add("text-bg-dark")
        }

        for (i = 0; i < inp.length; i++) {
            inp[i].style.border = "1px solid white"
        }

        for (i = 0; i < educard.length; i++) {
            educard[i].classList.remove("bg-body-tertiary")
            educard[i].classList.add("bg-dark")
            educard[i].classList.add("text-white")
            educard[i].classList.add("border-white")
        }

        for (i = 0; i < pcard.length; i++) {
            pcard[i].classList.remove("border-dark")
            pcard[i].classList.add("border-white")
        }


    }

    else {
        themeball.style.left = "5px"
        themeicon.classList.remove("fi-ts-clouds-moon")
        themeicon.classList.add("fi-ts-cloud-sun")
        themebg.classList.remove("bg-dark")
        themebg.classList.add("bg-warning")
        body.classList.remove("bg-dark")
        home.classList.remove("text-white")
        about.classList.remove("text-white")
        form.classList.remove("border-white", "text-bg-dark")
        form.classList.add("bg-white")
        mes.style.border = "none"
        cbody.classList.remove("text-bg-dark")
        ci.style.border = "none"
        cinput.classList.remove("text-bg-dark")
        buttonleft.style.background = "linear-gradient(to right, blue, rgb(255, 255, 255, 0))"
        buttonright.style.background = "linear-gradient(to left, blue, rgb(255, 255, 255, 0))"
        btnleft.style.background = "linear-gradient(to right, blue, rgb(255, 255, 255, 0))"
        btnright.style.background = "linear-gradient(to left, blue, rgb(255, 255, 255, 0))"
        nav.classList.remove("text-bg-dark")
        nav.classList.add("bg-primary")

        for (i = 0; i < snow.length; i++) {
            snow[i].classList.remove("text-white")
            snow[i].classList.add("text-primary")
        }


        for (i = 0; i < bk.length; i++) {
            bk[i].classList.remove("text-bg-dark")
        }

        for (i = 0; i < inp.length; i++) {
            inp[i].style.border = "none"
        }

        for (i = 0; i < educard.length; i++) {
            educard[i].classList.add("bg-body-tertiary")
            educard[i].classList.remove("bg-dark")
            educard[i].classList.remove("text-white")
            educard[i].classList.remove("border-white")
        }

        for (i = 0; i < pcard.length; i++) {
            pcard[i].classList.add("border-dark")
            pcard[i].classList.remove("border-white")
        }








    }
}

// if (window.innerWidth < 768) {

//     if (confirm("Please do not on desktop Mode") == true) {

//     } else {
//         body.style.display = "none"
//         outer.innerHTML = "Don't turn on desktop mode To continue reload the page and click ok !!  It was a kind request of asvin"
//     }
// }

var add = new URLSearchParams(window.location.search)

var hi = add.get("res")
var st = add.get("star")
var nam = add.get("name")
var stars = add.get("stars")
var re = add.get("re")

if (add == 0) {
    window.location.replace("https://megaakart.000webhostapp.com/contactmetotalstars.php")
}

var strs=document.getElementById("total-stars")
strs.innerHTML=stars




if (hi == "response_sumitted_successfully") {
    alert("Feedback Submitted Successfully \nThank you " + nam)
    window.location.replace("https://asvin2001.github.io/Asvin_AM_starcount/")
}
else if (hi == "star_sumitted_successfully") {
    alert("Thank you for rating " + st + " stars " + nam)
    window.location.replace("https://asvin2001.github.io/Asvin_AM_starcount/")

}



function btnle() {
    eduscroll.scrollLeft -= 200

}
function btnri() {
    eduscroll.scrollLeft += 200

}

function btnlee() {
    proscroll.scrollLeft -= 200

}
function btnrigg() {
    proscroll.scrollLeft += 200

}

setInterval(function () {
    if (eduscroll.scrollLeft <= 0) {
        buttonleft.style.display = "none"
    }
    else {
        buttonleft.style.display = "block"
    }


}, 10)

setInterval(function () {
    if (proscroll.scrollLeft <= 0) {
        btnleft.style.display = "none"
    }
    else {
        btnleft.style.display = "block"
    }


}, 10)

setInterval(function () {
    if (eduscroll.scrollLeft >= eduscroll.scrollWidth - eduscroll.clientWidth - 10) {
        buttonright.style.display = "none"
    }
    else {
        buttonright.style.display = "block"
    }

}, 10)

setInterval(function () {
    if (proscroll.scrollLeft >= proscroll.scrollWidth - proscroll.clientWidth - 10) {
        btnright.style.display = "none"
    }
    else {
        btnright.style.display = "block"
    }

}, 10)


function starq() {
    var starvalue = 1
    for (i = 0; i <= 0; i++) {
        star[i].classList.add("fa-solid")
        star[i].classList.remove("fa-regular")
    }
    for (i = 1; i <= 4; i++) {
        star[i].classList.remove("fa-solid")
        star[i].classList.add("fa-regular")
    }
    modal.innerHTML = "You have rated " + starvalue + " stars"
    starin.value = starvalue


}
function starw() {
    var starvalue = 2
    for (i = 0; i <= 1; i++) {
        star[i].classList.add("fa-solid")
        star[i].classList.remove("fa-regular")
    }
    for (i = 2; i <= 4; i++) {
        star[i].classList.remove("fa-solid")
        star[i].classList.add("fa-regular")
    }
    modal.innerHTML = "You have rated " + starvalue + " stars"
    starin.value = starvalue


}
function stare() {

    var starvalue = 3
    for (i = 0; i <= 2; i++) {
        star[i].classList.add("fa-solid")
        star[i].classList.remove("fa-regular")
    }
    for (i = 3; i <= 4; i++) {
        star[i].classList.remove("fa-solid")
        star[i].classList.add("fa-regular")
    }
    modal.innerHTML = "You have rated " + starvalue + " stars"
    starin.value = starvalue


}
function starr() {
    var starvalue = 4

    for (i = 0; i <= 3; i++) {
        star[i].classList.add("fa-solid")
        star[i].classList.remove("fa-regular")
    }
    for (i = 4; i <= 4; i++) {
        star[i].classList.remove("fa-solid")
        star[i].classList.add("fa-regular")
    }
    modal.innerHTML = "You have rated " + starvalue + " stars"
    starin.value = starvalue


}
function start() {
    var starvalue = 5
    for (i = 0; i <= 4; i++) {
        star[i].classList.add("fa-solid")
        star[i].classList.remove("fa-regular")
    }
    modal.innerHTML = "You have rated " + starvalue + " stars"
    starin.value = starvalue

}

function ent() {
    if (event.keyCode == 13) {
        enter()
    }
}

function enter() {
    inpu = cinput.value.toLowerCase()

    if (inpu.length == 0) {

        alert("Please enter something")

    }

    else if (inpu == "hi") {

        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "Hi there!"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()

        }, 200)

    }

    else if (inpu == "hello") {

        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "Hello there!"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)


    }

    else if (inpu == "what is your name" || inpu == "what's your name" || inpu == "what is your name?" || inpu == "what's your name?" || inpu == "name" || inpu == "name?" || inpu == "your name" || inpu == "your name?" || inpu == "who are you" || inpu == "who are you?") {

        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "I am Asvin AM"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)


    }

    else if (inpu == "what is your age" || inpu == "what's your age" || inpu == "what is your age?" || inpu == "what's your age?" || inpu == "age" || inpu == "age?" || inpu == "your age" || inpu == "your age?") {

        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "I am 22 years old"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)
    }

    else if (inpu == "what is your qualification" || inpu == "what's your qualification" || inpu == "what is your qualification?" || inpu == "what's your qualification?" || inpu == "qualification" || inpu == "qualification?" || inpu == "your qualification" || inpu == "your qualification?" || inpu == "what is you higher qualification" || inpu == "what's your higher qualification" || inpu == "what is you higher qualification?" || inpu == "what's your higher qualification?" || inpu == "higher qualification" || inpu == "higher qualification?" || inpu == "your higher qualification" || inpu == "your higher qualification?" || inpu == "what is your higher qualification" || inpu == "what's your higher qualification" || inpu == "what is your higher qualification?" || inpu == "what's your higher qualification") {

        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "I am a B.E graduate in Mechanical Engineering"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)
    }

    else if (inpu == "qualifications" || inpu == "qualifications?" || inpu == "what is your qualifications" || inpu == "what's your qualifications" || inpu == "what is your qualifications?" || inpu == "what's your qualifications?" || inpu == "your qualifications" || inpu == "your qualifications?") {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "I am a B.E graduate in Mechanical Engineering"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)
    }

    //cgpa in b.e



    else if (inpu == "cgpa" || inpu == "cgpa?" || inpu == "what is your cgpa" || inpu == "what's your cgpa" || inpu == "what is your cgpa?" || inpu == "what's your cgpa?" || inpu == "your cgpa" || inpu == "your cgpa?" || inpu == "what is your cgpa in b.e" || inpu == "what's your cgpa in b.e" || inpu == "what is your cgpa in b.e?" || inpu == "what's your cgpa in b.e?" || inpu == "your cgpa in b.e" || inpu == "your cgpa in b.e?" || inpu == "what is your cgpa in b.e" || inpu == "what's your cgpa in b.e" || inpu == "what is your cgpa in b.e?" || inpu == "what's your cgpa in b.e") {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "My cgpa in B.E is 8.7"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)
    }

    //perxentage in be

    else if (inpu == "what is your percentage in b.e" || inpu == "be mark" || inpu == "b.e mark" || inpu == "b.e cgpa" || inpu == "b.e percentage" || inpu == "b.e cgpa" || inpu == "b.e percentage" || inpu == "percentage in be" || inpu == "total mark in be" || inpu == "total marks in be" || inpu == "percentages in be" || inpu == "total percentage in be" || inpu == "what's your percentage in b.e" || inpu == "what is your percentage in b.e?" || inpu == "what's your percentage in b.e?" || inpu == "your percentage in b.e" || inpu == "your percentage in b.e?" || inpu == "what is your percentage in b.e" || inpu == "what's your percentage in b.e" || inpu == "what is your percentage in b.e?" || inpu == "what's your percentage in b.e" || inpu == "b.e percentages" || inpu == "be percentages" || inpu == "b.e percentages" || inpu == "be percentages" || inpu == "b.e percentage" || inpu == "be percentage" || inpu == "b.e percentage" || inpu == "be percentage" || inpu == "b.e") {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "My percentage in B.E is 87%"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)
    }

    //percentage in 12th



    else if (inpu == "what is your percentage in 12th" || inpu == "mark in 12th" || inpu == "percentage in 12th" || inpu == "total mark in 12th" || inpu == "total marks in 12th" || inpu == "percentages in 12th" || inpu == "total percentage in 12th" || inpu == "what's your percentage in 12th" || inpu == "what is your percentage in 12th?" || inpu == "what's your percentage in 12th?" || inpu == "your percentage in 12th" || inpu == "your percentage in 12th?" || inpu == "what is your percentage in 12th" || inpu == "what's your percentage in 12th" || inpu == "what is your percentage in hsc" || inpu == "what's your percentage in hsc" || inpu == "what is your percentage in hsc?" || inpu == "what's your percentage in hsc?" || inpu == "your percentage in hsc" || inpu == "your percentage in hsc?" || inpu == "what is your percentage in hsc" || inpu == "what's your percentage in hsc" || inpu == "marks in 12th" || inpu == "marks in hsc" || inpu == "hsc marks" || inpu == "hsc mark" || inpu == "12th percentage" || inpu == "12th mark" || inpu == "12th marks" || inpu == "12th percentage?" || inpu == "12th mark?" || inpu == "12th marks?" || inpu == "12th" || inpu == "12th?" || inpu == "hsc" || inpu == "hsc?" || inpu == "12th percentage") {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "My percentage in 12th is 58.6%"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)

    }

    //percentage in 10th

    else if (inpu == "what is your percentage in 10th" || inpu == "mark in 10th" || inpu == "percentage in 10th" || inpu == "total mark in 10th" || inpu == "total marks in 10th" || inpu == "percentages in 10th" || inpu == "total percentage in 10th" || inpu == "what's your percentage in 10th" || inpu == "what is your percentage in 10th?" || inpu == "what's your percentage in 10th?" || inpu == "your percentage in 10th" || inpu == "your percentage in 10th?" || inpu == "what is your percentage in 10th" || inpu == "what's your percentage in 10th" || inpu == "what is your percentage in sslc" || inpu == "what's your percentage in sslc" || inpu == "what is your percentage in sslc?" || inpu == "what's your percentage in sslc?" || inpu == "your percentage in sslc" || inpu == "your percentage in sslc?" || inpu == "what is your percentage in sslc" || inpu == "what's your percentage in sslc" || inpu == "marks in 10th" || inpu == "marks in sslc" || inpu == "sslc marks" || inpu == "sslc mark" || inpu == "10th percentage" || inpu == "10th mark" || inpu == "10th marks" || inpu == "10th percentage?" || inpu == "10th mark?" || inpu == "10th marks?" || inpu == "10th" || inpu == "10th?" || inpu == "sslc" || inpu == "sslc?" || inpu == "10th percentage") {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "My percentage in 10th is 85.8%"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)

    }

    // percentage


    else if (inpu == "percentage" || inpu == "mark" || inpu == "cgpa" || inpu == "percentages" || inpu == "marks" || inpu == "percentage in studies") {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "In 10th my percentage is 85.8% \nIn 12th my percentage is 58.6% \nIn B.E my cgpa is 8.7"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)


    }

    //skills

    else if (inpu == "skills" || inpu == "skills?" || inpu == "what are your skills" || inpu == "skill" || inpu == "your skills" || inpu == "your skill") {

        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "<b>Programming: </b>I'm proficient in languages like <b>java </b>and <b>Javascript</b> and I enjoy building applications and solving problems with code.\n <b>\nWeb Development: </b>I can create responsive and user-friendly websites using <b> HTML, CSS, and JavaScript, Bootstrap, php, Mysql. \n</b>\n<b>\nSoftwares: </b>I'm proficient in <b>Adobe Photoshop, Adobe Illustrator, Adobe Premier pro, Figma, Tableau and MS Office.</b>"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()
        }, 200)

    }

    //sorry i didnt get you
    else {
        var par = document.createElement("p")

        par.innerHTML = inpu
        par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'bg-danger', 'ps-3m', 'float-end', 'text-white')
        cbody.appendChild(par)
        cinput.value = ""

        setTimeout(function () {
            par = document.createElement("p")
            par.innerHTML = "Sorry I didn't get you"
            par.classList.add('p-3', 'chat-output', 'w-75', 'rounded', 'rounded-5', 'bg-danger', 'ps-3m', 'float-start', 'text-white')
            cbody.appendChild(par)
            cbody.scrollTo(0, 55555555555555555555555555);
            cinput.focus()

        }, 200)
    }

}

// skkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

