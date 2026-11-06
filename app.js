const Video1 = document.getElementById('projectVideo1');
const Video2 = document.getElementById('coming-soonVideo2');
const Video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign");

// sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon')

const videolist = [Video1, Video2, Video3];

videolist.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})


//sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar") 
})

close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})
