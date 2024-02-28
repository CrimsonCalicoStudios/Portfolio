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
	description: "Edens gate Login",
	btn1Link: "https://lazarus.crimsoncali.co/Login/",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-2.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	},
	{
	img: "./assets/IMG/img-3.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "game",
	},
	{
	img: "./assets/IMG/img-4.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "game",
	},
	{
	img: "./assets/IMG/img-5.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "game",
	},
	{
	img: "./assets/IMG/img-6.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-7.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-8.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-9.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "site",
	},
	{
	img: "./assets/IMG/img-10.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	},
	{
	img: "./assets/IMG/img-11.png",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	btn1Link: "/#",
	btn1: "test",
	btn2Link: "/#",
	btn2: "test2",
	tag: "model",
	},
	{
	img: "./assets/IMG/img-12.png",
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
				<img src="${project.img}" alt="" class="project_img">
					<div class="project_info">
						<p>${project.description}</p>
						<div class="project_btns">
							<a class="btn_work" href="${project.btn1Link}">${project.btn1}</a>
							<a class="btn_work" href="${project.btn2Link}">${project.btn2}</a>
						</div>
					</div>
			`;
		} else {
			
			projectDiv.innerHTML = `
				<object data="https://instagram.com/crimsoncalico/embed" width="400" height="300" type="text/html" class="project_iframe">
					<img src="./assets/IMG/img-12.png" alt="" class="project_img">
                </object>
				<div class="project_info">
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