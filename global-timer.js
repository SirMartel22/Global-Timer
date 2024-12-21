// entering and showing the program title 

// get the value of the button to show the program title input
const titleBtn = document.querySelector("#titleName");
titleBtn.addEventListener('click', function(){
	console.log('button is clicked')
})

// get the input field for program title and hide it by default
const showTitleInput = document.querySelector('#showTitleInput');
showTitleInput.style.display = 'none';

// // add event listener to show the program title input when the button is clicked
	titleBtn.addEventListener('click', ()=>{
		console.log(titleBtn)
		showTitleInput.style.display = 'block';
	});

	// add event listener to generate the program title when the button is clicked
	const generateTitle = document.getElementById('generate');
		generateTitle.addEventListener('click', ()=>{
		const title = document.getElementById('pTitle').value;
		const timerTitle = document.getElementById('timerTitle')

		// display the generated program title in the timer title element
		timerTitle.innerHTML =`<h3 style=" font-weight: bold;  font-size: 50px"> ${title} </h3>`

		// hide the program title input after generating the title
		showTitleInput.style.display = 'none'
		
		// log the generated program title for debugging purposes
		console.log(title);
	});

    // event listener for uploading a logo image
	//get the value of logo input and get it to show when a logo is selected
	const previewLogo = document.getElementById('preview-logo');
	const logoInput = document.getElementById('logoInput')

	const uploadLogo = document.getElementById('uploadLogo')
	
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
		}
	});

//Side navigation code
//get side navigation button
const bgChangeBtn = document.getElementById('bgchange');
// const uploadContainer = document.querySelector('.upload-container');
const rightSideNav = document.querySelector('.right-side-nav');

// show side navigation
rightSideNav.style.display = 'block';
	
// default gradient backgroundInput
const defaultBackground = 'linear-gradient(45deg, #ff6b6b, $4ecdc4)'

//code for changing the background of the timer
const backgroundInput = document.getElementById('backgroundInput');
const bgOverlay = document.querySelector('.overlay')
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
				bgOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
			};

			// read the image file
			reader.readAsDataURL(file);
			console.log(backgroundInput.value); 
			// uploadContainer.style.display ='none';
		}
	});


// timer countdown code
//I get the ids from the html file for manipulation to be used later in the code
let hour = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('seconds');

let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

const timerContainer= document.getElementById('timerContainer')

const timeUpShow = document.getElementById('timeupContainer')

//store variable to track the timer
var interval = null;
var totalTime = 0;
let initialTotalTime = 0;


//this function is calculating total seconds
function calculateTotalSeconds(){
	return Number(hour.value) * 3600 +
			Number(minutes.value) * 60 +
			Number(seconds.value);
}

//this section is updating the timer
function updateTimer(){
	
	if (totalTime >= 0){
		let hr = Math.floor(totalTime / 3600);
		let mt = Math.floor((totalTime % 3600) / 60);
		let sc = totalTime % 60;
		
		//update the input with padding, 
		//i.e. adding extra zero instead of a single number 
		//when the number is less than 10
		hour.value = hr.toString().padStart(2, '0');
		minutes.value = mt.toString().padStart(2, '0');
		seconds.value = sc.toString().padStart(2, '0');
		
		// update display percentage
		updateDisplay();

		// //timer decrement
		totalTime--;
		// console.log(total);
		
	} else {
		clearInterval(interval);
		timerContainer.style.display = 'none';
		timeUpShow.style.display = 'block';
	}
}

const percentageShow = document.getElementById('percentageDisplay');

function calculatePercentage(currentTime, initialTime){

	//prevent division by zero 
	if(initialTime <= 0) return 0;

	//convert remaining time to minutes and seconds
	//calculate the percentage of remaining time from total time
	const percentageRemaining = Math.floor(((currentTime / initialTime)*100).toFixed(2));

	//ensure percentage is between 0 and 100
	return Math.max(0, Math.min(100, percentageRemaining));
	
	remainingTime = newCurrentTime
	console.log(remainingTime);
}

// console.log(remainingTime)

function updateDisplay() {

	//update remaining time with current total
	const percentage = calculatePercentage(totalTime, initialTotalTime);

	console.log(percentage+'%');

	percentageShow.innerHTML = `<h3 style='color:#fcfb7a'><span style='font-weight: bold; font-size: 50px'>${percentage}%</span> <br> of Time Remaining</br></h4>`;
}

//start button manipulation, getting it worked
startBtn.addEventListener('click', ()=>{

	initialTotalTime = calculateTotalSeconds();
	totalTime = initialTotalTime;
	// console.log('button is working!!')
	clearInterval(interval);
	updateTimer();
	interval = setInterval(updateTimer, 1000);
	startBtn.disabled = true;
});

//reset button code
resetBtn.addEventListener('click', ()=>{
	clearInterval(interval);
	hour.value = '00';
	minutes.value = '00';
	seconds.value = '00';
	console.log("Timer reset");
	timerContainer.style.display = 'block';
	timeUpShow.style.display = 'none';
	percentageShow.style.display = 'none';
});