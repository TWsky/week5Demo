var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);

function myFunc() {
	var check=0;
  var name = document.getElementById('name');
  var nameHint = document.getElementById('nameHint');
  if(name.value.length == 0){
    nameHint.innerHTML = 'this value is error!';
  } else {
    nameHint.innerHTML = 'this value is correct!';
    check++;
  }
  var phone =document.getElementById('phone');
  var phoneHint=document.getElementById('phoneHint');
  if(phone.value.length!=10){
  	phoneHint.innerHTML='電話長度應為10個數字';
  }
  else{
  	phoneHint.innerHTML='長度正確';
  	check++;
  }
  var uid=document.getElementById('uid');
  var idHint=document.getElementById('uidHint');
  var idcheck= new RegExp(/^[A-Z]{1}[1-2]{1}[0-9]{8}$/);
  if(idcheck.test(uid.value)!=1){
  	uidHint.innerHTML='身分證字號格式錯誤';
  }
  else{
  	uidHint.innerHTML='身分證字號格式正確';
  	check++;
  }
  var img=document.getElementById('img');
  if(check==3)
  {
  	img.innerHTML="<img src=\"https://crazypic.ck101.com/1/6/16eb63a30474418cef067370c26c077c.jpg\">"	
  }
}
