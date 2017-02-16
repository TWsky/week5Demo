var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);

function checkID( id ) {
	var idHin = document.getElementById('idHint');
    tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"                     
    A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
    A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
    x = new Array (9,8,7,6,5,4,3,2,1,1);

    i = tab.indexOf( id.charAt(0) );
    if ( i == -1 ) return false;
    sum = A1[i] + A2[i]*9;
    for ( i=1; i<10; i++ ) {
        v = parseInt( id.charAt(i) );
        if ( isNaN(v) ) return false;
        sum = sum + v * x[i];

    }
    if ( sum % 10 != 0 ) return false;
    return true;
}

function myFunc() {
  var name = document.getElementById('name');
  var phone = document.getElementById('phone');
  var idNumber = document.getElementById('idNumber');

  var nameHint = document.getElementById('nameHint');
  var phoneHint = document.getElementById('phoneHint');
  var idHint = document.getElementById('idHint');

  var air = document.getElementById('airFucker');
  var success = 0;

  nameHint.style.color='red';
  phoneHint.style.color='red';
  idHint.style.color='red';

  if(name.value.length == 0){
    nameHint.innerHTML = '不能空空的喔!';
  } 
  else {
  	nameHint.style.color='black';
    nameHint.innerHTML = '恩很棒!';
    success++;
  }

  if(phone.value.length == 0){
    phoneHint.innerHTML = '不能空空的喔!';
  } 
  else if(phone.value.length != 10){
    phoneHint.innerHTML = '我不太喜歡這種長度的..';
  }
  else if(phone.value.charAt(0) == 0 && phone.value.charAt(1) == 9){
  	phoneHint.style.color='black';
  	phoneHint.innerHTML = '恩很棒!';
    success++;
  }
  else {
    phoneHint.innerHTML = '手機的開頭兩碼不都是09嗎...?';
  }


  if(idNumber.value.length == 0){
    idHint.innerHTML = '不能空空的喔!';
  } 
  else if(idNumber.value.length != 10){
    idHint.innerHTML = '我不太喜歡這種長度的..';
  }
  else {
  	if(checkID(idNumber.value)){
  		idHint.style.color='black';
  		idHint.innerHTML = '恩很棒!';
    	success++;
  	}
  	else
  		idHint.innerHTML = '我讀書少,你不要騙我這是身分證號碼'
  }
  if(success == 3)
  	air.innerHTML = '<p style="font-size:60pt">\\太神拉/</p><img src="http://cdn2.ettoday.net/images/2324/d2324021.jpg">';
}