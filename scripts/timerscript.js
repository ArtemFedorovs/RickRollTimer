let date_of_timer_ends=location.href.slice((location.href.length-13), (location.href.length));
let rick_gif='<iframe src="https://gifer.com/embed/Jup" width="100%" height="80%" frameBorder="0" allowFullScreen></iframe>'
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function counts (){
  let date_now = new Date();
  let time_until_timer_ends=date_of_timer_ends-date_now;
  
  let days_until_timer_ends = Math.floor(time_until_timer_ends/1000/60/60/24);
  let hours_until_timer_ends = Math.floor(time_until_timer_ends/1000/60/60)%24;
  let minutes_until_timer_ends = Math.floor(time_until_timer_ends/1000/60)%60;
  let seconds_until_timer_ends = Math.floor(time_until_timer_ends/1000)%60;
  document.getElementById("days").innerText=days_until_timer_ends+" d";
  document.getElementById("hours").innerText=hours_until_timer_ends+" h";
  document.getElementById("minutes").innerText=minutes_until_timer_ends+" m";
  document.getElementById("seconds").innerText=seconds_until_timer_ends+" s";
  if(time_until_timer_ends<=30000){
    console.log('ab')
    Array.from(document.getElementsByClassName('board_element')).forEach(function(element){element.style= "color: red";console.log('nb')});
  }
  if(time_until_timer_ends<=0){document.getElementById("containertimer").innerHTML="<h2>Timer has expired!</h2>"+rick_gif}

  
  };
  counts();
  setInterval(counts, 1000);