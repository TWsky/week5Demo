var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);



function myFunc() {
  var correct = 0;

  var name = document.getElementById('name');
  var nameHint = document.getElementById('nameHint');
  if(name.value.length == 0){
    nameHint.innerHTML = 'this value can not be null';
  } else {
    nameHint.innerHTML='';
    correct++;
  }

  var number = document.getElementById('number');
  var numberHint = document.getElementById('numberHint');
  if(number.value.length == 0){
    numberHint.innerHTML = 'this value can not be null!';
  }
  function checkID(number, numberHint){
      var re = /^[A-Z]\d{9}$/;
      if (!re.test(number.value))
          return 1;
  }
  if (checkID(number, numberHint)) {
    numberHint.innerHTML = 'this value is not correct';
  }else {
    numberHint.innerHTML='';
    correct++;
  }

  var phone = document.getElementById('phone');
  var phoneHint = document.getElementById('phoneHint');
  if(phone.value.length == 0){
    phoneHint.innerHTML = 'this value can not be null!';
  }
  else if(phone.length > 10){
    phoneHint.innerHTML = 'this value is longer than 10';
  }
  else if(isNaN(phone.value) || phone.value.length != 10){
    phoneHint.innerHTML = 'this value is not phone number';
  } else {
    phoneHint.innerHTML='';
    correct++
  }

  if(correct == 3){
    var image = document.getElementById('imagePlace');
    image.innerHTML='<h2>success</h2><img src="http://twimg.edgesuite.net/images/ReNews/20170213/420_2a33d38dfc1c58b2723feb29e13c7238.jpg">';
  }
}
