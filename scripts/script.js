let url;

function counts (){
 url = (location.href.replace('index.html', "") + 'timer.html?time=' + Date.parse(document.getElementById("date").value));
 document.getElementById("output").value = url;
};

counts();
setInterval(counts, 1000);

function startpreview(){
  document.location=url
};
