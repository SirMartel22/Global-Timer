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
	});

	

    // event listener for uploading a logo image
	
	//get the value of logo input and get it to show when a logo is selected
	const logoInput = document.getElementById('logoInput');


	const previewLogo = document.getElementById('preview-logo');
	const logoInput1 = document.getElementById('logoInput')

	logoInput1.style.display = 'none';

	const uploadLogo = document.getElementById('uploadLogo')
	

	uploadLogo.addEventListener('click', function(){
		logoInput.style.display ='block';
	});

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
	})

	//code for changing the background of the timer
	const backgroundInput = document.getElementById('backgroundInput');
	const fileNameDisplay = document.getElementById('fileName');
	
// default gradient backgroundInput
const defaultBackground = 'linear-gradient(45deg, #ff6b6b, $4ecdc4)'

// listen for file selection
backgroundInput.addEventListener('change', function(event){
	const file = event.target.files[0];

	// check if a file was selected
	if (file) {
		// display selected file name

		fileNameDisplay.textContent = `selected: ${file.name}`;

		// create file reader to read the image
		const reader = new FileReader();

		reader.onload = function(e){
			// set the background image when file is loaded
			document.body.style.background = `url('${e.target.result}')`
			document.body.style.backgroundSize = 'cover';
			document.body.style.bakcgroundPosition = 'center';
			document.body.style.backgroundRepeat = 'no-repeat';
		};

		// read the image file
		reader.readAsDataURL(file);
		console.log(backgroundInput.value); 
	}
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
const sideNavBtns = document.querySelectorAll('.right-side-nav button');
const uploadContainer = document.querySelector('.upload-container');
const rightSideNav = document.querySelector('.right-side-nav');

// show side navigation
rightSideNav.style.display = 'block';

//add click handlers for side navigation

sideNavBtns.forEach(btn => {
	btn.addEventListener('click', function(){
		switch(this.textContent){
			case 'Change Background':
				uploadContainer.style.display = 
					uploadContainer.style.display === 'none' ? 'block' : 'none';
				break;
			
				case 'Reset Timer':

		}
	})
})