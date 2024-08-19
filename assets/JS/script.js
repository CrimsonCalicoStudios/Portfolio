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
	img: "./assets/IMG/Work/PL_Preview.png",
	title: "Edens gate Login",
	description: "A Login site I made for my college project that was dropped, Currently being redesigned and the login system is broken.",
	btn1Link: "https://lazarus.crimsoncali.co/Login/",
	btn1: "View Live",
	btn2Link: "/#",
	btn2: "test2",
	type: "site",
	tag: "site",
	},
	{
	vid: "./assets/IMG/Work/Castle_Render.mp4",
	title: "Castle Fire Test",
	description: "A test on using fire and water physics in blender i made to resemble a castle on a small island.",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	type: "animation",
	tag: "model",
	},
	{
	vid: "./assets/IMG/Work/Bingo_Logo.mp4",
	title: "CCS Animated Logo",
	description: "The animation i made for CCS intro's in blender.",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	type: "animation",
	tag: "model",
	},
	{
	img: "./assets/IMG/Work/ccslogo.png",
	title: "CCC Logo",
	description: "My new logo for CCC which i drew in procreate.",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	type: "img",
	tag: "art",
	},
	{
	img: "./assets/IMG/Work/PL_Email.png",
	title: "Edens Gate Emails",
	description: "The email page connected to the Edens Gate Login page for my Project: Lazarus ARG.",
	btn1Link: "https://lazarus.crimsoncali.co/Email/",
	btn1: "View Live",
	btn2Link: "/#",
	btn2: "test2",
	type: "site",
	tag: "site",
	},
	{
	vid: "./assets/IMG/Work/Bingo_BG.mp4",
	title: "Bingo Background",
	description: "A looping animation i made originally for a website background.",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	type: "animation",
	tag: "model",
	},
	{
	img: "./assets/IMG/Work/DeltaStar.png",
	title: "Deltastar",
	description: "A website made for a game build to work on the Sir Patrick Moore Planetarium dome.",
	btn1Link: "./assets/Non-Live_Sites/DomeShow/",
	btn1: "View Live",
	btn2Link: "/#",
	btn2: "test2",
	type: "site",
	tag: "site",
	},
	{
	vid: "./assets/IMG/Work/Satis.mp4",
	title: "Satisfying Render",
	description: "We were tasked with making satisfying renders like Corridor Digital however i attempted to make it unstatisfting, i failed however due to keeping everything in sync.",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	type: "animation",
	tag: "model",
	},
	{
	vid: "./assets/IMG/Work/Permaspin.mp4",
	title: "Bingo Logo placement",
	description: "Designed for my original portfolio site where she would sit inside my old logo structure next to my name and information at the top, ended up being unused.",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	type: "animation",
	tag: "model",
	},
	{
	vid: "./assets/IMG/Work/360_VR.mp4",
	title: "360 VR project",
	description: "A VR film project for film class i made using a 360 camera, photoshop and after effects. I unfortunately got distracted at the end by the people i asked to act as distractions and went off script but im still proud of it, you will need a vr headset or 360 viewer to get the full experience.",
	download: "./assets/IMG/Work/360_VR.mp4",
	btn1: "Download",
	btn2Link: "/#",
	btn2: "test2",
	type: "video",
	tag: "video",
	},
	{
	img: "./assets/IMG/Work/Beeple_Render.png",
	title: "Beeple Render",
	description: "Using free assets found omline we competed as a class to make a render close to beeple (warning, his content is weirder).",
	type: "img",
	tag: "model",
	},
	{
	img: "./assets/IMG/Work/Astronaut_drawing.png",
	title: "Drowning in space",
	description: "The astronaut is traced however the background is the true star here and it's where i leanred i prefer drawing backgrounds a lot more than characters.",
	type: "img",
	tag: "art",
	},
	{
	img: "./assets/IMG/Work/Branza_Background.png",
	title: "Branza",
	description: "The background i made for the website still in development made for the John Furst show: \"Out of this world\" in partnership with the bbc and national space centers: Immersive academy.",
	type: "img",
	tag: "art",
	},
	{
	img: "./assets/IMG/Work/Abstract_Background_Red.png",
	imga: "./assets/IMG/Work/Abstract_Background.png",
	title: "Crimson Sunset",
	description: "Just a background i made out of bordom in class but im happy with the result.",
	type: "img",
	tag: "art",
	},
	{
	img: "./assets/IMG/Work/Dream_Drawing.png",
	title: "Dreaming in a night sky",
	description: "The first drawing i did in art class following a tutorial and definately inspired me to mess with all the extra settings that i used in my future work.",
	type: "img",
	tag: "art",
	},
];


// Render Array
const projectsContainer = document.querySelector(".projects_container")

function renderProjects(array) {
	projectsContainer.textContent = "";
	array.map((project) => {
		const projectDiv = document.createElement("div")
		projectDiv.classList.add("project")

		if(project.type == "img") {
			projectDiv.innerHTML = `
			<a href="${project.img}" data-lightbox="roadtrip" data-title="${project.title}" alt="">
				<img src="${project.img}" alt="">
			</a>
				<h2>${project.title}</h2>
				<p>${project.description}</p>
			`;
		}  else if(project.type == "animation") {
			
			projectDiv.innerHTML = `
			<video controls muted loop style="width: 90%;" preload="auto">
				<source src="${project.vid}" type="video/mp4">
				Your browser does not support the video tag.
			</video>
			<h2>${project.title}</h2>
			<p>${project.description}</p>
		`;
		} else if(project.type == "video") {
			projectDiv.innerHTML = `
			<video muted controls loop style="width: 90%;">
				<source src="${project.vid}" type="video/mp4">
				Your browser does not support the video tag.
			</video>
			<h2>${project.title}</h2>
			<p>${project.description}</p>
			<a class="btn_work" href="${project.btn1Link}">${project.btn1}</a>
			<br><br>
		`;
		}else if(project.type == "site") {
			projectDiv.innerHTML = `
				<img src="${project.img}" alt="">
				<h2>${project.title}</h2>
				<p>${project.description}</p>
				<a class="btn_work" href="${project.btn1Link}">${project.btn1}</a>
				<br><br>
			`;
		} else {
			
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