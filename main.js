var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);

function myFunc() {
  var t = 0;

  var name = document.getElementById('name');
  var nameHint = document.getElementById('nameHint');
  if(name.value.length == 0){
    nameHint.innerHTML = 'this value is error!';
  } else {
    nameHint.innerHTML = 'this value is correct!';
    t++;
  }

  var name = document.getElementById('phone');
  var phoneHint = document.getElementById('phoneHint');
  if(phone.value.length != 10)
  	phoneHint.innerHTML = 'this value should have 10 numbers';
  else if(isNaN(phone.value))
  	phoneHint.innerHTML = 'this value is not a phone number';
  else {
  	phoneHint.innerHTML = 'this value is correct';
  	t++;
  }

  var id = document.getElementById('ID');
  var idHint = document.getElementById('IDHint');
  
  function check(id, idHint){
  	var c = /^[A-Z]\d{9}$/;
  	if(!c.test(id.value))
  		return 1;
  }
  if(check(id, idHint))
  	idHint.innerHTML = 'this value is error';
  else{
  	idHint.innerHTML = 'this value is correct';
  	t++;
  }

  if(t == 3)
  	var image = document.getElementById('image');
    image.innerHTML = '<img src = "http://applealmond.com/wp-content/uploads/2017/02/2330413.gif">'
}
