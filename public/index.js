if(localStorage.getItem('theme') == 'white') {
  const emoji = document.getElementById('theme-toggler-emoji');
  emoji.innerHTML = '⚫';
  document.body.style.backgroundColor = 'white';    
  document.getElementsByClassName('rowyhere-outer')[0].style.color = 'black';    
  document.getElementsByClassName('rowyhere-inner')[0].style.color = 'black';
  document.getElementsByClassName('rowyhere-header')[0].style.backgroundColor = '#f9f9f9';    
  document.querySelectorAll('.header-items a').forEach(a => {
    a.style.color = "black";
    a.classList.add('header-items-black');
    a.classList.remove('header-items-white');
  });
};

var played = false;
const element = document.getElementById('audio');
    
function audio() {
  if(played) {
    pause();
  } else play();
};
    
var info_timeout;
function play() {
  element.play();
  played = true;
  document.getElementById('play-button').innerHTML = 'Stop Music';
  info_timeout = setTimeout(() => {
    pause();
    element.currentTime = 0;
    document.getElementsByClassName('info')[0].style.opacity = '1';
    setTimeout(() => {
      document.getElementsByClassName('info')[0].style.opacity = '0';
    }, 3200);
  }, element.duration * 1000);
};

function pause() {
  element.pause();
  played = false;
  clearTimeout(info_timeout);
  document.getElementById('play-button').innerHTML = 'Play Music';
};

var i = 0;
setInterval(() => {
  var titles = ['Rowy', 'Discord ── Rowy#1011', 'GitHub ── @rowyhere', 'Instagram ── @rowycik'];
  if(i == titles.length) i = 0;
  document.title = titles[i];
  i++;
}, 3000);

document.getElementById('theme-toggler-emoji').addEventListener('click', () => {
  const emoji = document.getElementById('theme-toggler-emoji');
  if(emoji.innerText == '⚪') {
    emoji.innerHTML = '⚫';
    localStorage.setItem('theme', 'white');
    document.body.style.backgroundColor = 'white';    
    document.getElementsByClassName('rowyhere-outer')[0].style.color = 'black';    
    document.getElementsByClassName('rowyhere-inner')[0].style.color = 'black';
    document.getElementsByClassName('rowyhere-header')[0].style.backgroundColor = '#f9f9f9';    
    document.querySelectorAll('.header-items a').forEach(a => {
      a.style.color = "black";
      a.classList.add('header-items-black');
      a.classList.remove('header-items-white');
    }); 
  } else if(emoji.innerText == '⚫') {
    emoji.innerHTML = '⚪';
    localStorage.setItem('theme', 'dark');
    document.body.style.backgroundColor = '#080808';    
    document.getElementsByClassName('rowyhere-outer')[0].style.color = 'white';  
    document.getElementsByClassName('rowyhere-inner')[0].style.color = 'white';   
    document.getElementsByClassName('rowyhere-header')[0].style.backgroundColor = '#0c0c0c';    
    document.querySelectorAll('.header-items a').forEach(a => {
      a.style.color = "white";
      a.classList.remove('header-items-black');
      a.classList.add('header-items-white');
    });
  };
});
