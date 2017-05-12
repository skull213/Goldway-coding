$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

// ================================================================================


window.onload = function(){
	
	var oHero = document.querySelector("#hero");
	var oPrevious = document.querySelector("#previous");
	var oNext = document.querySelector("#next");

	if(oPrevious != null){

		oNext.onclick = function(){

		var oCurrent = document.querySelector("#hero .current");
		
		if(oCurrent.nextElementSibling != null){
			oCurrent.nextElementSibling.className = "current";
		}else{
			oHero.children[0].className = "current";
		}
		
		oCurrent.className = "";	
	};

	oPrevious.onclick = function(){

		var oCurrent = document.querySelector("#hero .current");

		if(oCurrent.previousElementSibling != null){
			oCurrent.previousElementSibling.className = "current";
		}else{
			var iLastIndex = oHero.children.length - 1;
			oHero.children[iLastIndex].className = "current";
		}
		
		oCurrent.className = "";
	};	
};


	var aH1 = document.querySelectorAll("#header ul li h1");

	for(var iCount=0;iCount<aH1.length;iCount++){



		aH1[iCount].onclick = function(){

			//close the others
			for(var iCount=0;iCount<aH1.length;iCount++){
				if(aH1[iCount].isSameNode(this) == false){
					aH1[iCount].nextElementSibling.className = "";
				}
			}

			//open or close the item you click on
			if(this.nextElementSibling.className == "show"){
				this.nextElementSibling.className = "";
			}else{
				this.nextElementSibling.className = "show";
			}


			
		};

	}


	var oFirstNameInput = document.querySelector("#firstName");
	oFirstNameInput.valid = true;
	oFirstNameInput.onblur = fNameCheck;

	var oLastNameInput = document.querySelector("#lastName");
	oLastNameInput.valid = true;
	oLastNameInput.onblur = fRequiredCheck;

	var oEmailInput = document.querySelector("#email");
	oLastNameInput.valid = true;
	oEmailInput.onblur = fEmailCheck;

	var oBirthDayInput = document.querySelector("#birthDate");
	oBirthDayInput.valid = true;
	oBirthDayInput.onblur = fDayCheck;

	var oPhoneNumberInput = document.querySelector("#phoneNumber");
	oPhoneNumberInput.valid = true;
	oPhoneNumberInput.onblur = fDayCheck;

	var oSignupForm = document.querySelector("#bookingForm");
	oSignupForm.onsubmit = function(){

		
		oFirstNameInput.onblur();
		oLastNameInput.onblur();
		oEmailInput.onblur();
		oBirthDayInput.onblur();
		oPhoneNumberInput.onblur();

		var bFormValid = oFirstNameInput.valid && 
						 oLastNameInput.valid &&
						 oEmailInput.valid &&
						 oBirthDayInput.valid &&
						 oPhoneNumberInput.valid; 


		return bFormValid;
	};

};

// =======================================================================form validation function

var fRequiredCheck = function(){

		var sInput = this.value.trim();

		var oMessage = document.getElementById(this.id+"Message");
		if(sInput.length == 0){
			oMessage.innerHTML = "Please Complete";
			oMessage.className = "message-error";
			this.valid = false;
		}else{
			oMessage.innerHTML = "Thank you";
			oMessage.className = "message-success";
			this.valid = true;
		} 
	};	

var fNameCheck = function(){

	var sInput = this.value.trim();

	var oRegExp =  /[^a-zA-Z]/;
	var bResult = oRegExp.test(sInput);
	var oMessage = document.getElementById(this.id+"Message");

	if(sInput.length == 0){
		oMessage.innerHTML = "Please Complete";
		oMessage.className = "message-error";
		this.valid = false;

	}
	else if(bResult==true){
		oMessage.innerHTML = "letters only";
		oMessage.className = "message-error";
		this.valid = false;
	}
	else{
		oMessage.innerHTML = "Thank you";
		oMessage.className = "message-success";
		this.valid = true;
	}
};

var fDayCheck = function(){

	var sInput = this.value.trim();

	var oRegExp =  /^[0-9]{7,15}$/;
	var bResult = oRegExp.test(sInput);
	var oMessage = document.getElementById(this.id+"Message");

	if(sInput.length == 0){
		oMessage.innerHTML = "Please Complete";
		oMessage.className = "message-error";
		this.valid = false;

	}
	else if(bResult==false){
		oMessage.innerHTML = "digits only";
		oMessage.className = "message-error";
		this.valid = false;
	}
	else{
		oMessage.innerHTML = "Thank you";
		oMessage.className = "message-success";
		this.valid = true;
	}
};




var fEmailCheck = function(){

	var sInput = this.value.trim();

	var oRegExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	var bResult = oRegExp.test(sInput);
	var oMessage = document.getElementById(this.id+"Message");

		if(sInput.length == 0){
			oMessage.innerHTML = "Please Complete";
			oMessage.className = "message-error";
			this.valid = false;
		}else if(bResult == false){
			oMessage.innerHTML = "invalid email";
			oMessage.className = "message-error";
			this.valid = false;
		}
		else{
			oMessage.innerHTML = "Thank you";
			oMessage.className = "message-success";
			this.valid = false;
		}
};

// ========================================================================end


