setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    let day = time.getDay()
    let date = time.getDate()
    let month = time.getMonth()
    const weekdays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const Months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Nov', 'December']
    let CurrentDay = weekdays[day]
    let CurrentMonth = Months[month]
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	

	let currentTime = hour + ":"
			+ min + " " + am_pm;

    let currentdate = "It's " + CurrentDay + ", " + CurrentMonth + " " + date ;
	document.getElementById("clock")
			.innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentdate

   
}
showTime();

function Greetings() {
    let greettime = new Date();
    let greethour = greettime.getHours();
    let greetings = ""
    if (greethour > 0 && greethour <=12) {
        greetings = "morning";
    }
    else if(greethour >12 && greethour <= 17){
        greetings = "afternoon";
    }
    else if(greethour > 17 && greethour <=20){
        greetings = "evening";
    }
    else if(greethour > 20 ){
        greetings = "night";
    }
    document.getElementById('greeting-1').innerHTML = "Good " + greetings + " , Tushar" 
    // let unsplash = "https://source.unsplash.com/1600x900/?" + greetings
    document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.425), rgba(0, 0, 0, 0.562)), url("https://cdn.wallpapersafari.com/94/12/DAd5oy.jpg")'
}
Greetings();

