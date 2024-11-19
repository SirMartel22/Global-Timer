// entering and showing the program title 

// get the value of the button to show the program title input
const titleBtn = document.getElementById('generateTitle')

// get the input field for program title and hide it by default
const showTitleInput = document.querySelector('#showTitleInput');
showTitleInput.style.display = 'none'

// add event listener to show the program title input when the button is clicked
	titleBtn.addEventListener('click', ()=>{
		showTitleInput.style.display = 'block';
	});

	// add event listener to generate the program title when the button is clicked
	const generateTitle = document.getElementById('generate');
		generateTitle.addEventListener('click', ()=>{
		const title = document.getElementById('pTitle').value;
		const timerTitle = document.getElementById('timerTitle')

		// display the generated program title in the timer title element
		timerTitle.innerHTML =`<h3> ${title} </h3>`

		// hide the program title input after generating the title
		showTitleInput.style.display = 'none'
		
		// log the generated program title for debugging purposes
		console.log(title);
	})





    // event listener for uploading a logo image
	
	//get the value of logo input and get it to show when a logo is selected
	const logoInput = document.getElementById('logoInput');


	const previewLogo = document.getElementById('preview-logo');
	const logoInput1 = document.getElementById('logoInput')

	logoInput1.style.display = 'none';

	const uploadLogo = document.getElementById('uploadLogo')
	

	uploadLogo.addEventListener('click', function(){
		logoInput.style.display ='block';
	
	logoInput.addEventListener('change', function(ev){
		const file = ev.target.files[0];

		if(file){
			//display the selected file name

			const reader = new FileReader();

			reader.onload = function(eve){
				previewLogo.src = eve.target.result;
				previewLogo.style.display = 'block';
				console.log(logoInput.value)
			}

			reader.readAsDataURL(file);
			console.log(logoInput.value)
			logoInput.style.display ='none';
		}
	});
});





//Function to reset background to default gradient
function resetBackground(){
	console.log("working")
	document.body.style.background = defaultBackground;

	// // clear the file input and filename display
	backgroundInput.value = '';
	fileNameDisplay.textContent = '';
	console.log(backgroundInput.value)
}




//Side navigation code
//get side navigation button
const bgChangeBtn = document.getElementById('bgchange');
// const uploadContainer = document.querySelector('.upload-container');
const rightSideNav = document.querySelector('.right-side-nav');

// show side navigation
rightSideNav.style.display = 'block';

//code for changing the background of the timer
	const backgroundInput = document.getElementById('upload-btn');
	const bgOverlay = document.querySelector('.overlay')
	
	
// default gradient backgroundInput
const defaultBackground = 'linear-gradient(45deg, #ff6b6b, $4ecdc4)'

		// listen for file selection
	backgroundInput.addEventListener('change', (event)=>{
		const file = event.target.files[0];

		// check if a file was selected
		if (file) {
			// create file reader to read the image
			const reader = new FileReader();

			reader.onload = function(e){
				// set the background image when file is loaded
				document.body.style.background = `url('${e.target.result}')`
				document.body.style.backgroundSize = 'cover';
				document.body.style.backgroundPosition = 'center';
				document.body.style.backgroundRepeat = 'no-repeat';
				document.body.style.zIndex = '1';
				bgOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
			};

			// read the image file
			reader.readAsDataURL(file);
			console.log(backgroundInput.value); 
			// uploadContainer.style.display ='none';
		}
	});

// countdown timer js code
const start = document.getElementById('startBTN');
const reset = document.getElementById('resetBTN');
const hour = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const timerContainer = document.getElementById('timerContainer')


//store a reference to the variable
let startTimer = null;

function timer(){
	if(hour.value == 0 && minutes.value == 0 && seconds.value == 0){
		hour.value = 0;
		minutes.value = 0;
		seconds.value = 0;
	}else if(seconds.value != 0	){
		seconds.value --;
	} else if( minutes.value != 0 && seconds.value == 0){
		seconds.value = 59;
		minutes.value --;
	} else if(hour.value != 0 && minutes.value == 0){
		minutes.value = 59;
        hour.value --;
		timerContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
	}
	return;
}

reset.addEventListener('click', ()=>{
function stopTimer(){
	clearInterval(startTimer);
}

stopTimer();
hour.value = 0;
minutes.value = 0;
seconds.value = 0;
	console.log("Timer reset")
});


start.addEventListener('click', ()=>{
	//initialize the variable startTimer
    // startTimer = setInterval(timer, 1000);

	function startInterval(){
		startTimer = setInterval(function(){
			timer();
		}, 1000)
	}
	startInterval();
});