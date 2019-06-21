var Div1;
var Div2;
var Div3;
var Div4;
var Div5;
var Div6;
var Div7;
var Div8;
var Certo;
var Errado;

window.onload= function esconder(){
	Div1=document.getElementById("Div1");
	Div2=document.getElementById("Div2");
	Div3=document.getElementById("Div3");
	Div4=document.getElementById("Div4");
	Div5=document.getElementById("Div5");
	Div6=document.getElementById("Div6");
	Div7=document.getElementById("Div7");
	Div8=document.getElementById("Div8");
	Certo=document.getElementById("Certo");
	Errado=document.getElementById("Errado");

	
	
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}

function mostrarDiv1(){
	Div1=document.getElementById("Div1");
	var paraDiv1= document.getElementById("paraDiv1");
	paraDiv1.onclick=mostrarDiv1;
	
	Div1.classList.remove("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv2(){
	Div2=document.getElementById("Div2");
	var paraDiv2= document.getElementById("paraDiv2");
	paraDiv2.onclick=mostrarDiv2;
	
	Div1.classList.add("escondido");
	Div2.classList.remove("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv3(){
	Div3=document.getElementById("Div3");
	var paraDiv3= document.getElementById("paraDiv3");
	paraDiv3.onclick=mostrarDiv3;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.remove("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");
    Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv4(){
	Div4=document.getElementById("Div4");
	var paraDiv4= document.getElementById("paraDiv4");
	paraDiv4.onclick=mostrarDiv4;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.remove("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv5(){
	Div5=document.getElementById("Div5");
	var paraDiv5= document.getElementById("paraDiv5");
	paraDiv5.onclick=mostrarDiv5;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.remove("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv6(){
	Div6=document.getElementById("Div6");
	var paraDiv6= document.getElementById("paraDiv6");
	paraDiv6.onclick=mostrarDiv6;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.remove("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");	
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv7(){
	Div7=document.getElementById("Div7");
	var paraDiv7= document.getElementById("paraDiv7");
	paraDiv7.onclick=mostrarDiv7;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.remove("escondido");
	Div8.classList.add("escondido");	
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarDiv8(){
	Div8=document.getElementById("Div8");
	var paraDiv8= document.getElementById("paraDiv8");
	paraDiv8.onclick=mostrarDiv8;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.remove("escondido");	
	Certo.classList.add("escondido");
	Errado.classList.add("escondido");
}
function mostrarCerto(){
	Certo=document.getElementById("Certo");
	var RespostaCerta= document.getElementById("RespostaCerta");
	RespostaCerta.onclick=mostrarCerto;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");	
	Certo.classList.remove("escondido");
	Errado.classList.add("escondido");
}
function mostrarErrado(){
	Certo=document.getElementById("Errado");
	var RespostaErradd= document.getElementById("RespostaErrada");
	RespostaErrada.onclick=mostrarErrado;
	
	Div1.classList.add("escondido");
	Div2.classList.add("escondido");
	Div3.classList.add("escondido");
	Div4.classList.add("escondido");
	Div5.classList.add("escondido");
	Div6.classList.add("escondido");
	Div7.classList.add("escondido");
	Div8.classList.add("escondido");	
	Certo.classList.add("escondido");
	Errado.classList.remove("escondido");
}
