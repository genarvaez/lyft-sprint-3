var buttonStart = document.getElementById("button-start");
var positionX = document.getElementById("positionX");
var positionX = document.getElementById("positionX");
var table = document.querySelector(".table");

//evento para validar coordenadas y empezar el play-lyft
buttonStart.addEventListener("click", function(){
	var playLyft = document.getElementById("play-lyft");
	if(positionX.value > 10 || positionX.value == "" ){
		invalidCoordinate("invalid1")
	}
	else if(positionY.value > 6 || positionY.value == ""){
		invalidCoordinate("invalid2")
	}
	else{
	playLyft.classList.add("noShow");
	table.style.display="block";
	carMoving(coodinateX, coordinateY, ".car img" )
	}

})
//funcion para dar clase al span de la validacion de coordenadas
function invalidCoordinate(clase){
	var form = document.getElementById("form2")
	var span = document.createElement("span");
	span.classList.add(clase);
	var textSpan = document.createTextNode("Invalid coordinate");
	span.appendChild(textSpan);
	form.appendChild(span);
}

var teclas ={
	UP: 38,
	RIGTH: 39,
	DOWN: 40,
	LEFT: 37 
};

function carMoving(coodinateX, coordinateY, element){
	 element = document.querySelector(element);
	 element.style.left = coordinateY;
	 element.style.top = coodinateX;
}