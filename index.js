function startGame()
{
	var time = document.getElementById('game-time').value
	document.getElementById('result').innerHTML = 0;
	document.getElementById('result-header').style.display = 'none';
	document.getElementById('time').innerHTML = time;
	document.getElementById('start').style.display = 'none';
	Game()
}
function Game(){
	var prev = document.getElementById('time').innerHTML
	if(prev!=0)
	{
		document.getElementById('time').innerHTML = prev-1;
		generator()
		var timer = setTimeout(Game,1000)
	}
	else
	{
		document.getElementById('result-header').style.display = 'block';
		document.getElementById('error-message').style.display = 'none';
		var div = document.getElementById('game');
		while(div.firstChild){
			div.removeChild(div.firstChild);
		}
		document.getElementById('start').style.display = 'block';	
	}
}
function generator()
{
	if (document.getElementsByClassName('box').length<4)
	{
		document.getElementById('error-message').style.display = 'none';
		var x=Math.random()*100;
		x=Math.round(x);
		var y=Math.random()*50;
		y=Math.round(y);
		var element = document.createElement("div");
		element.onclick = function(e){
			var points = parseInt(document.getElementById('result').innerHTML)
			document.getElementById('result').innerHTML = points+1;
			element.remove();
		}
		element.id="box"
		element.className="box"
		element.style.marginLeft=Math.random()*25+'px';
		element.style.marginTop=Math.random()*250+'px';
		element.borderColor="#fad64e"
		document.getElementById('game').appendChild(element);
	}
	else
	{
		document.getElementById('error-message').style.display = 'block';
	}
}