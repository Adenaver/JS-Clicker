function setTime(){
	var time = document.getElementById("game-time").value
	document.getElementById("time").innerHTML = time;
}
function startGame(){
	var time = document.getElementById('game-time')
	time.disabled=true;
	document.getElementById('result').innerHTML = 0;
	document.getElementById('result-header').style.display = 'none';
	document.getElementById('time').innerHTML = time.value;
	document.getElementById('start').style.display = 'none';
	Game()
}
function Game(){
	var prev = document.getElementById('time').innerHTML
	if(prev!=0){
		document.getElementById('time').innerHTML = prev-1;
		setTimeout(Game,1000)
	}
	else{
		resetPosition()
		document.getElementById('result-header').style.display = 'block';
		document.getElementById('start').style.display = 'block';
		document.getElementById('game-time').disabled=false;
	}
}
function newPosition(){
	var points = parseInt(document.getElementById('result').innerHTML)
	document.getElementById('result').innerHTML = points+1;
	var obj = document.getElementById('box')
	obj.style.marginLeft=Math.random() * (-250 - (250))+250+'px';
	obj.style.marginTop=Math.random()*250+'px';
}
function resetPosition(){
	var obj = document.getElementById('box')
	obj.style.marginLeft=0+"px";
	obj.style.marginTop=125+"px";
}
