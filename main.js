var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);

function myFunc() {
  var name = document.getElementById('name');
  var nameHint = document.getElementById('nameHint');
  if(name.value.length == 0){
    nameHint.innerHTML = 'this value is error!';
  } else {
    nameHint.innerHTML = 'this value is correct!';
  }
}
