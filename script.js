console.log("Welcome to ganaSuno");
//initilize the variable 
let songIndex = 0;
let audioElement  = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar  = document.getElementById('myProgressBar');
let gif  = document.getElementById('gif');
let masterSongName  = document.getElementById('masterSongName');
let songIteam = Array.from(document.getElementsByClassName('songIteam'));

let songs =[
    {songName:"Kalastar",filePath:"1.mp3",coverPath:"cover.jpg"},
    {songName:"tera fitoor",filePath:"2.mp3",coverPath:"img2.jpeg"},
    {songName:"rang de basanti",filePath:"3.mp3",coverPath:"img1.jpeg"},
    {songName:"tum hi ho",filePath:"4.mp3",coverPath:"img3.jpeg"},
    {songName:"tere name",filePath:"5.mp3",coverPath:"img4.jpeg"},
    {songName:"ranjhana",filePath:"6.mp3",coverPath:"img5.jpg"},
]

// autoElement.play
songIteam.forEach((element,i)=>{
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

// handle the play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to the events
audioElement.addEventListener('timeupdate',()=>{
    //update the seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =( myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songIteamPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songIteamPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src=`${songIndex+1}.mp3`;
      masterSongName.innerText= songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex= 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex= 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})