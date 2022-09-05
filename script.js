let shareButton = document.querySelector('.share');
let buttonsElement = document.querySelector('.buttons');
let buttBlock = document.querySelector('.butt-block');



shareButton.addEventListener('click', function(e){
  if(e.target != this) return
else if (buttonsElement.classList.contains('hidden')){
  // shareButton.classList.add('inverted');
  buttBlock.appendChild(buttonsElement);
  setTimeout(()=> buttonsElement.classList.remove('hidden'),1)
  
}
else
{shareButton.classList.remove('inverted');
  buttonsElement.classList.add('hidden');
setTimeout (() => buttonsElement.remove(), 400)};
})