const projectGrid = document.getElementById("projectGrid");

async function fetchPeople() {
  const projects = await fetch("data/projects.json");
  const data = await projects.json();
  return data;
}

async function displayProjects() {
  const data = await fetchPeople();
  console.log(data);
  data.map((project) => {
    cardTempalte(project);
  });
}

displayProjects();

function cardTempalte(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const techList = project.tech.map((t) => `<li>${t}</li>`).join("");

  card.innerHTML = `<img
        src=${project.img}
        alt="${project.name} project image"
        class="project-img"
      />
      <div class="project-content">
        <div class="project-navigation">
        <h4 class="project-name">${project.name}</h4>
        <a href=${project.github} class="github-link"><i class="fa-brands fa-github"></i></a>
        </div>
 
        <p class="project-description">${project.description}</p>
        <ul class="tech-list">
        ${techList}
        </ul>
      </div>
`;
  projectGrid.appendChild(card);
}
