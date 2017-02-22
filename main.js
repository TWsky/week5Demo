var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);

function myFunc() {
  var name = document.getElementById('name');
  var phone = document.getElementById('phone');
  var idNumber = document.getElementById('idNumber');

  var nameHint = document.getElementById('nameHint');
  var phoneHint = document.getElementById('phoneHint');
  var idHint = document.getElementById('idHint');

  var suc = document.getElementById('SUCC');
  var success = 0;

  nameHint.style.color='red';
  phoneHint.style.color='red';
  idHint.style.color='red';

  if(name.value.length == 0){
    nameHint.innerHTML = '此處不可為空';
  } 
  else {
  	nameHint.style.color='black';
    nameHint.innerHTML = '成功';
    success++;
  }

  if(phone.value.length == 0){
    phoneHint.innerHTML = '請輸入正確的值';
  } 
  else if(phone.value.length != 10){
    phoneHint.innerHTML = '位元不足';
  }
  else if(phone.value.charAt(0) == 0 && phone.value.charAt(1) == 9){
  	phoneHint.style.color='black';
  	phoneHint.innerHTML = '成功';
    success++;
  }
  else {
    phoneHint.innerHTML = '輸入錯誤，開頭應為 09';
  }


  if(idNumber.value.length == 0){
    idHint.innerHTML = '請輸入正確的值';
  } 
  else if(idNumber.value.length != 10){
    idHint.innerHTML = '請輸入正確的值';
  }
  else {
  	if(idNumber.value.match(/^[A-Z]{1}[0-9]{9}$/) != null){
  		idHint.style.color='black';
  		idHint.innerHTML = '成功!';
    	success++;
  	}
  	else
  		idHint.innerHTML = '請輸入正確的值'
  }
  if(success == 3)
  	suc.innerHTML = '<img src="https://media.giphy.com/media/d3mm5LTOhOiI4im4/giphy.gif">';
}