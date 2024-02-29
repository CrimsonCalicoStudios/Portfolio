// Typing Animation
// List of sentences
var _CONTENT = [ "A Developer", "A Writer", "An Actor", "An Editor", "A Director" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 75);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// Works Area
//Projects to render
const projectsArray = [
	{
	img: "./assets/IMG/PL_preview.png",
	title: "Edens gate Login",
	description: "",
	btn1Link: "https://lazarus.crimsoncali.co/Login/",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	width: "250px",
	height: "125px",
	},
	{
	img: "./assets/IMG/img-2.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	width: "100px",
	height: "100px",
	},
	{
	img: "./assets/IMG/img-3.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "game",
	},
	{
	img: "./assets/IMG/img-4.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "game",
	},
	{
	img: "./assets/IMG/img-5.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "game",
	},
	{
	img: "./assets/IMG/img-6.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-7.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-8.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-9.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-10.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	},
	{
	img: "./assets/IMG/img-11.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	},
	{
	img: "./assets/IMG/img-12.png",
	title: "",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	},
];


// Render Array
const projectsContainer = document.querySelector(".projects_container")

function renderProjects(array) {
	projectsContainer.textContent = "";
	array.map((project) => {
		const projectDiv = document.createElement("div")
		projectDiv.classList.add("project")

		if(project.img) {
			projectDiv.innerHTML = `
				<img src="${project.img}" alt="">
				<h2>${project.title}</h2>
				<p>${project.description}</p>
				<a class="btn_work" href="${project.btn1Link}">${project.btn1}</a>
				<a class="btn_work" href="${project.btn2Link}">${project.btn2}</a>
				<br><br>
			`;
		} else {
			
			projectDiv.innerHTML = `
				<object data="https://instagram.com/crimsoncalico/embed" width="400" height="300" type="text/html" class="project_iframe">
					<img src="./assets/IMG/img-12.png" alt="" class="project_img">
                </object>
				<div class="project_info" style="width: ${project.width}; height: ${project.height};">
					<p>${project.description}</p>
					<div class="project_btns">
						<a class="btn_work" href="${project.btn1Link}">${project.btn1}</a>
						<a class="btn_work" href="${project.btn2Link}">${project.btn2}</a>
					</div>

				</div>
		`;
		}
		

		projectsContainer.append(projectDiv);
	})
}

// Sorting

const tabBtns = document.querySelectorAll(".tab_btn");

tabBtns.forEach(function (tab) {
	tab.addEventListener("click", function () {

		tabBtns.forEach(t => t.classList.remove("active"));

		this.classList.add("active");

		if(tab.id === "all") {
			renderProjects(projectsArray);
		} else {
			const filteredProjects = projectsArray.filter((project) => project.tag === tab.id);

			renderProjects(filteredProjects);
		}
	});
});

renderProjects(projectsArray);

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}