var image = function(imgg){
	document.getElementById('disp-col').innerHTML = '<img src="images/portfolio/' + imgg + '" />';
	}
function opener(){
	document.getElementById('disp-col').style.visibility = 'visible';
	document.getElementById('bg').style.visibility = 'visible';
	document.getElementById('close').style.visibility = 'visible';
	document.getElementById('bg').style.webkitanimationplaystate = 'running';
	}
function closer(){
	document.getElementById('disp-col').style.visibility = 'hidden';
	document.getElementById('disp-col').innerHTML = '';
	document.getElementById('bg').style.visibility = 'hidden';
	document.getElementById('close').style.visibility = 'hidden';
	document.getElementById('bg').style.webkitanimationplaystate = 'paused';
	document.getElementById('bg').style.webkitanimationdirection = 'reverse';
	}