var i = 0;
setInterval(() => {
  var titles = ['Rowy', 'Discord ── wade#1011', 'GitHub ── @rowyhere', 'Instagram ── @rowycik'];
  if(i == titles.length) i = 0;
  document.title = titles[i];
  i++;
}, 3000);