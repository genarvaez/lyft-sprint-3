var buttonStart = document.getElementById("button-start");
var positionX = document.getElementById("positionX");
var positionY = document.getElementById("positionY");
var table = document.querySelector(".table");
var inputPhone = document.getElementById("inputPhone");
	var formBox = document.getElementById("form-box");
	var content = document.getElementById("content");

var teclas ={
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	LEFT: 37 
};

//event to validate coodenate x and y
buttonStart.addEventListener("click", function(){
	var playLyft = document.getElementById("play-lyft");
	if(positionX.value > 10 || positionX.value == "" ){
		invalidCoordinate("invalid1")
	}
	else if(positionY.value > 6 || positionY.value == ""){
		invalidCoordinate("invalid2")
	}
	//else, assign coordinate X/Y for begin play-lyft
	else{
		playLyft.classList.add("noShow"); //add class "NoShow" to form coordinate section and hide it.
		table.style.display="block";
		carCoordinate((parseInt(positionY.value)*80), (parseInt(positionX.value)*10),".car img");
	}
	//event and function to move car
	document.addEventListener("keyup", carMoving)
	function carMoving(e){
		var movXDw = parseInt(document.querySelector(".car img").style.top) + 80;
		var movXUp = parseInt(document.querySelector(".car img").style.top) - 80;
		var movYLf = parseInt(document.querySelector(".car img").style.left) - 10;
		var movYRg = parseInt(document.querySelector(".car img").style.left) + 10;
		if(e.keyCode == teclas.UP && movXUp >= 0){
			carCoordinate(movXUp, positionY, ".car img");
		}
		else if(e.keyCode == teclas.DOWN && movXDw<=400){
			carCoordinate(movXDw, positionY, ".car img")
		}
		else if(e.keyCode == teclas.LEFT && movYLf >= 0){
			carCoordinate(positionX, movYLf, ".car img");
			}
		else if(e.keyCode == teclas.RIGHT && movYRg <= 90){
			carCoordinate(positionX, movYRg, ".car img");
			}			
		}
	}
)

var signButton = document.getElementById("sign-button");
signButton.addEventListener("click", invalidPhone);

//function for give class to validation coordenate span
function invalidCoordinate(clase){
	var form = document.getElementById("form2")
	var span = document.createElement("span");
	span.classList.add(clase);
	var textSpan = document.createTextNode("Invalid coordinate");
	span.appendChild(textSpan);
	form.appendChild(span);
}
//function for edit coordinate x/y in css selector
function carCoordinate(coordinateX, coordinateY, element){
	 element = document.querySelector(element);
	 element.style.top = coordinateX+"px";
	 element.style.left = coordinateY+"%";	 
}
//function for validate phone number
function invalidPhone(){
	if(!(/^\+\d{2}\d{9}$/).test(inputPhone.value)){
		var span = document.createElement("span");
		var textSpan = document.createTextNode("Invalid Phone number. Ej: +56123456789");
		span.classList.add("noValid");
		span.appendChild(textSpan);
		formBox.appendChild(span);
	}
	else{
		formBox.removeChild(formBox.lastChild);
		document.getElementById("inputPhone").value = "";
		var newDiv = document.createElement("div");
		var newTitle = document.createElement("p");
		var textP = document.createTextNode("Successful sign, We'll contact you soon");
		var aceptButton = document.createElement("input");
		aceptButton.setAttribute("type", "button");
		aceptButton.setAttribute("value", "OK");
		newDiv.setAttribute("class", "alert");
		newTitle.appendChild(textP);
		newDiv.appendChild(newTitle);
		content.appendChild(newDiv);
		newDiv.appendChild(aceptButton);
	}
	aceptButton.addEventListener("click", function(){
		content.removeChild(content.lastChild)
	})
}


