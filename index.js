function gototop() {
    window.scrollTo({top: 0, behavior:'smooth'});
}
var count = 1;
function NextSlideLeft(){
    let showImg = document.getElementById("main-thumb");
    let textImg = document.querySelector(".bigThumbnail p")
    if (count == 1)
        count = 3;
    else
        count--;
    showImg.style.backgroundImage = `url(/images/thumbnail${count}.jpg)`;
    if (count == 1)
        textImg.innerHTML = "Du lịch";
    else if(count == 2)
        textImg.innerHTML = "Ẩm thực";
    else textImg.innerHTML = "Lối sống";
}
function NextSlideRight(){
    let showImg = document.getElementById("main-thumb");
    let textImg = document.querySelector(".bigThumbnail p")
    if (count == 3)
        count = 1;
    else
        count++;
    showImg.style.backgroundImage = `url(/images/thumbnail${count}.jpg)`;
    if (count == 1)
        textImg.innerHTML = "Du lịch";
    else if(count == 2)
        textImg.innerHTML = "Ẩm thực";
    else textImg.innerHTML = "Lối sống";
}
var showInfo = false;
function show(){
    let getButton = document.querySelector(".show-info > input");
    let x = document.querySelector(".rightContent");
    if(showInfo==false)
    {
        x.style.display = `block`;
        getButton.value = "Ẩn thông tin";
        showInfo = true;
    }
    else{
        x.style.display = `none`;
        getButton.value = "Hiện thông tin";
        showInfo = false;
    }
}
function changePage1(){
    let page = document.querySelectorAll(".page");
    let page1 = document.querySelector(".page-1");
    let pageNumber = document.querySelectorAll(".page-num");
    for(let i = 0; i<page.length; i++)
        page[i].style.display="none";
    page1.style.display = "flex";
    for(let i = 0; i<pageNumber.length; i++)
        pageNumber[i].style.backgroundColor = "white";
    pageNumber[0].style.backgroundColor = "rgb(254, 174, 165)";
}
function changePage2(){
    let page = document.querySelectorAll(".page");
    let page2 = document.querySelector(".page-2");
    let pageNumber = document.querySelectorAll(".page-num");
    for(let i = 0; i<page.length; i++)
        page[i].style.display="none";
    page2.style.display = "flex";
    for(let i = 0; i<pageNumber.length; i++)
        pageNumber[i].style.backgroundColor = "white";
    pageNumber[1].style.backgroundColor = "rgb(254, 174, 165)";
}
function changePage3(){
    let page = document.querySelectorAll(".page");
    let page3 = document.querySelector(".page-3");
    let pageNumber = document.querySelectorAll(".page-num");
    for(let i = 0; i<page.length; i++)
        page[i].style.display="none";
    page3.style.display = "flex";
    for(let i = 0; i<pageNumber.length; i++)
        pageNumber[i].style.backgroundColor = "white";
    pageNumber[2].style.backgroundColor = "rgb(254, 174, 165)";
}