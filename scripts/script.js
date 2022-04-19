let url
function counts (){
 url=location.href.slice(0, (location.href.length-10))+"timer.html?time="+Date.parse(document.getElementById("date").value);
 document.getElementById("output").value=url;
};

counts();
setInterval(counts, 1000);

function startpreview(){
  document.location=url
};
