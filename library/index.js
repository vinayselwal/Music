const music = new Audio('vande.mp3');

const songs = [
    {
        id:"1",
        songName: `Dhoke pyaar ke`,
        songArtist:`<div class="subtitle">B Praak</div>`,
        poster: "img/1.jpg",
    },
    {
        id:"2",
        songName: `Ranjha`,
        songArtist:`<div class="subtitle">B Praak</div>`,
        poster: "img/2.jpg",
    },
    {
        id:"3",
        songName: `Kesariya`,
        songArtist:`<div class="subtitle">Arijit Singh</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Tujhe kitna chahne lage`,
        songArtist:`<div class="subtitle">Arijit Singh</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Agar tum sath ho `,
        songArtist:`<div class="subtitle">Alka Yagnik</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Raatan Lambiyan`,
        songArtist:`<div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Nain ta heere`,
        songArtist:`<div class="subtitle">Guru Randhawa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `O bedardi`,
        songArtist:`<div class="subtitle">Pritam</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Kaise hua`,
        songArtist:`<div class="subtitle">Vishal Mishra</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Humdard`,
        songArtist:`<div class="subtitle">Arijit Singh</div>`, 
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Hawayein`,
        songArtist:`<div class="subtitle">Pritam</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Mann mera`,
        songArtist:`<div class="subtitle">Gajendra Verma</div>`,
        poster: "img/12.jpg",
    },
    

    

]
const song1=[
    {
        id:"13",
        songName: `Mera na`,
        songArtist:`<div class="subtitle">Sidhu Moose Wala</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `P.O.V`,
        songArtist:`<div class="subtitle">Karan Aujla</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lemonade`,
        songArtist:`<div class="subtitle">Diljit Dosanjh</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `White Brown Black`,
        songArtist:`<div class="subtitle">Karan Aujla</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Rubicon drill`,
        songArtist:`<div class="subtitle">Parmish Verma</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Players`,
        songArtist:`<div class="subtitle">Badshahr</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Baller`,
        songArtist:`<div class="subtitle">Shubh</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Thaa`,
        songArtist:`<div class="subtitle">Varinder Brar</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Daku`,
        songArtist:`<div class="subtitle">Chani Nattan</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Spain`,
        songArtist:`<div class="subtitle">Jassa Dhillon</div>`,
        poster: "img/22.jpg",
    }
]
const song2 =[
    {
        id:"23",
        songName: `Ishq hua kaise hua`,
        songArtist:`<div class="subtitle">Udit Narayan</div>`,
        poster: "img/23.jpg",
    },
    {
        
        id:"24",
        songName: `Ye dil deewana`,
        songArtist:`<div class="subtitle">Sonu Nigam</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Pyaar kiya toh darna kya`,
        songArtist:`<div class="subtitle">Lata Mangeshkar</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Tumsa koi pyara`,
        songArtist:`<div class="subtitle">Kumar Sanu</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Pehla nasha`,
        songArtist:`<div class="subtitle">Udit Narayan</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Mausam pyar ka`,
        songArtist:`<div class="subtitle">Kishore Kumar</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Hum tumhe chahte hai`,
        songArtist:`<div class="subtitle">Anand Panchal</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Chand chupa badal mein`,
        songArtist:`<div class="subtitle">Udit Narayan</div>`,
        poster: "img/30.jpg",
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})
Array.from(document.getElementsByClassName('songItem1')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = song1[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = song1[i].songName;

})
Array.from(document.getElementsByClassName('songItem2')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = song2[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = song2[i].songName;

})


let masterPlay = document.getElementById('masterPlay');
let poster_master_play = document.getElementById('poster_master_play');
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        poster_master_play.classList.add('rotate');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
       
    } else {
        music.pause();
        poster_master_play.classList.remove('rotate');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
            poster_master_play.classList.add('rotate');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
    Array.from(document.getElementsByClassName('songItem1')).forEach((element)=>{
        element.style.background = "rgb(105, 105, 170, 0)";
})
Array.from(document.getElementsByClassName('songItem2')).forEach((element)=>{
    element.style.background = "rgb(105, 105, 170, 0)";
})
}

let index = 0;
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        poster_master_play.classList.add('rotate');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        let song_title1 = song1.filter((ele)=>{
            return ele.id == index;
        })
        let song_title2 = song2.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        song_title.forEach(ele =>{
            let {songArtist} = ele;
            subtitle.innerHTML = songArtist;
        })
        song_title1.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        song_title1.forEach(ele =>{
            let {songArtist} = ele;
            subtitle.innerHTML = songArtist;
        })
        song_title2.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        song_title2.forEach(ele =>{
            let {songArtist} = ele;
            subtitle.innerHTML = songArtist;
        })
        poster_master_play.classList.add('rotate');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            poster_master_play.classList.remove('rotate');
            wave.classList.remove('active2');
        })
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })
    let song_title1 = song1.filter((ele)=>{
        return ele.id == index;
    })
    let song_title2 = song2.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    song_title.forEach(ele =>{
        let {songArtist} = ele;
        subtitle.innerHTML = songArtist;
    })
    song_title1.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    song_title1.forEach(ele =>{
        let {songArtist} = ele;
        subtitle.innerHTML = songArtist;
    })
    song_title2.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    song_title2.forEach(ele =>{
        let {songArtist} = ele;
        subtitle.innerHTML = songArtist;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    document.getElementById(`${index}`).classList.add('rotate');
    
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })
    let song_title1 = song1.filter((ele)=>{
        return ele.id == index;
    })
    let song_title2 = song2.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    song_title.forEach(ele =>{
        let {songArtist} = ele;
        subtitle.innerHTML = songArtist;
    })
    song_title1.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    song_title1.forEach(ele =>{
        let {songArtist} = ele;
        subtitle.innerHTML = songArtist;
    })
    song_title2.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    song_title2.forEach(ele =>{
        let {songArtist} = ele;
        subtitle.innerHTML = songArtist;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    document.getElementById(`${index}`).classList.add('rotate');
    
})



let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scroll_1 = document.getElementById('left_scroll_1');
let right_scroll_1 = document.getElementById('right_scroll_1');
let punjabi_song = document.getElementsByClassName('punjabi_song')[0];

left_scroll_1.addEventListener('click', ()=>{
    punjabi_song.scrollLeft -= 330;
})
right_scroll_1.addEventListener('click', ()=>{
    punjabi_song.scrollLeft += 330;
})


let left_scroll_2 = document.getElementById('left_scroll_2');
let right_scrolls_2 = document.getElementById('right_scroll_2');
let old_song = document.getElementsByClassName('old_song')[0];

left_scroll_2.addEventListener('click', ()=>{
    old_song.scrollLeft -= 330;
})
right_scroll_2.addEventListener('click', ()=>{
    old_song.scrollLeft += 330;
})
