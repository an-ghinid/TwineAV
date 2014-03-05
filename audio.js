function playAudio(url){

  var se = document.createElement("audio")
  se.src = url
  se.autoplay = true
  //add audio features with se.parameter
  //EXAMPLE: http://www.w3schools.com/tags/tag_audio.asp se.loop for looping
  var hT = document.getElementsByTagName("HEAD")[0];
  hT.appendChild(se);
  if(se.innerText) {eval(se.innerText);}
  else {eval(se.textContent);} 

};


function playVideo(url, place){

  var se = document.createElement("video")
  se.src = url
  se.controls = true
  place.appendChild(se);
  if(se.innerText) {eval(se.innerText);}
  else {eval(se.textContent);} 

};


