var myElement = document.getElementById('submit-btn');
myElement.addEventListener('click', myFunc);

function myFunc() {
	var name = document.getElementById('name');
	var nameHint = document.getElementById('nameHint');
	if(name.value.length == 0){
		nameHint.innerHTML = 'error!';
	} 
	else {
		nameHint.innerHTML = 'correct~';
	}
	var phone = document.getElementById('cellphone');
	var phoneHint = document.getElementById('phoneHint');
	var re = /^[09]{2}[0-9]{8}$/;
    if (!re.test(phone.value))
        phoneHint.innerHTML = 'error!';
    else
    	phoneHint.innerHTML = 'correct~';
	var num = document.getElementById('ssnum');
	var numHint = document.getElementById('ssnumHint');
	var myreg = /^[A-Z]\d{9}$/;
    if (!myreg.test(num.value))
        numHint.innerHTML = 'error!';
    else
    	numHint.innerHTML = 'correct~';

    if(name.value.length != 0 && re.test(phone.value) && myreg.test(num.value)){
    	document.getElementById('myimage').src = "http://i.imgur.com/ZGDOilN.jpg";
		alert("Congratulations!");

    }
}
