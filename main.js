const skillsItems = document.querySelectorAll(".skills-item");
const modal = document.createElement("div");
modal.classList.add("modal");
console.log(skillsItems);

skillsItems.forEach((item) => {
  item.addEventListener("click", handleShowModal);
});

function handleShowModal() {}

const SKILLS = ['HTML', 'CSS', 'JS', 'React'];
const SKILLS_IMAGES_URL = generateImageUrl(SKILLS);  


function generateImageUrl (arrayOfSkills) {
  return (arrayOfSkills.map((item) => `./assets/skills/${item}_Quiz.jpg`));
}

// console.log(SKILLS_IMAGES_URL);

function generateModal(skillName) {
  const wrapper = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const image = document.createElement("img");
  const textwWrapper = document.createElement("div");
  const title = document.createElement("span");
  const skillsList = document.createElement("ul");
  const skillsItem = document.createElement("li");
  
  wrapper.classList.add('modal-wrapper');
  
  imageWrapper.classList.add('modal-image_wrapper');
  image.src = `./assets/skills/${skillName}_Quiz.jpg`;
  
  textwWrapper.classList.add('modal-image_wrapper');
  title.classList.add('modal-title');
  title.textContent = `${skillName}`;

  skillsList.classList.add('list-reset');
  skillsList.classList.add('modal-list');


}
