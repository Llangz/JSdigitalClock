function showTime() {
	let date = new Date();
	let h = date.getHours(); // 0 - 23
	let m = date.getMinutes(); // 0-59
	let s =  date.getSeconds(); // 0-
	
	
	h = updateTime(h);
	m = updateTime(m);
	s = updateTime(s);

	let time = h + ":" + m + ":" + s;
	document.getElementById("myClockDisplay").innerText = time;
	
	
	let t = setTimeOut(function(){
		showTime() }, 1000);

 }


function updateTime(h) {
 	if(h < 10) {
		return "0" + h;
	}

	else {
		return h;
	}
		
}
 
setInterval(showTime, 1000);


 		


 
