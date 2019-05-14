
var pMenu = document.getElementsByClassName('ddtag');
var drop

document.getElementById("paps").addEventListener('click', cometh);

function cometh() {
  for(drop of pMenu){
    drop.classList.toggle('pop');
    drop.classList.toggle('hidden');
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.paper')) {
    for(drop of pMenu){
      drop.classList.remove('pop');
      drop.classList.add('hidden');
    }
  }
}
