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