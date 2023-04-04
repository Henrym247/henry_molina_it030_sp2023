var hoursOfDay = new Date().getHours();

	if (hoursOfDay < 12) {
		document.getElementById("headerGreeting").innerHTML = 'Good morning, Welcome to the New York Yankees Championships Page.'; 
	} 

		else if (hoursOfDay < 16) {
		document.getElementById("headerGreeting").innerHTML = 'Good afternoon, Welcome to the New York Yankees Championships Page.';
		
		}

		else if (hoursOfDay < 20) {
			document.getElementById("headerGreeting").innerHTML = 'Good evening, Welcome to the New York Yankees Championships Page.';

		}

		else {
			document.getElementById("headerGreeting").innerHTML = 'Good night, Welcome to the New York Yankees Championships Page.';

		}


var w = window.innerWidth;

console.log (w);

	if (w < 768 && w > 567) {

		document.getElementById("screenSize").innerHTML = 'You are currently on a mobile device';
	}
		
		else if (w < 1024 && w > 768) {
			
			document.getElementById("screenSize").innerHTML = 'You are on a tablet device';

		}

		else if (w > 1024) {
			
			document.getElementById("screenSize").innerHTML = 'Desktop devices are the best to view my website';

		}
		
