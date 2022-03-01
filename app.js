// declaring variable
const header = document.getElementById('header');
const title = document.getElementById('title');
const bars = document.getElementById('bars');
const cross = document.getElementById('cross');
const links = document.getElementById('links');
const wrapper = document.getElementById('wrapper');
const navItems = document.querySelectorAll('.nav-items');

// clicking on hamburger icon
document.getElementById('bars').addEventListener('click', () => {
  // activating header to full height
  header.classList.add('active');

  // hiding the title
  title.classList.add('active');

  // hiding the bars
  bars.classList.add('active');

  // showing the cross
  cross.classList.add('active');

  // showing the links
  links.classList.add('active');

  // overflow hidden to wrapper
  wrapper.classList.add('active');
});

// clicking on cross icon
cross.addEventListener('click', () => {
  // deactivating header from full height to normal
  header.classList.remove('active');

  // showing the title
  title.classList.remove('active');

  // showing the bars
  bars.classList.remove('active');

  // hiding the cross
  cross.classList.remove('active');

  // overflow auto to wrapper
  wrapper.classList.remove('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    // deactivating header from full height to normal
    header.classList.remove('active');

    // showing the title
    title.classList.remove('active');

    // showing the bars
    bars.classList.remove('active');

    // hiding the cross
    cross.classList.remove('active');

    // overflow auto to wrapper
    wrapper.classList.remove('active');
  });
});

// creating projects
const projects = [
  {
    id: 1,
    name: 'Simplex Pharmacy',
    img: './images/simplex.PNG',
    description: 'This is a PSD to React conversion using pure CSS Flexbox',
    liveLink: 'http://simplex123.herokuapp.com/',
    github: 'https://github.com/HamzaAnwar1998/Simplex',
    techstack: [
      { id: 1, tech: 'React' },
      { id: 2, tech: 'CSS' },
    ],
  },
  {
    id: 2,
    name: 'Virtual Exhibition',
    img: './images/simplex.PNG',
    description: 'This is a Virtual Exhibition landing page with registeration and login form flow',
    liveLink: 'https://virtualexhibitionwithevents.web.app/',
    github: 'not available',
    techstack: [
      { id: 1, tech: 'React' },
      { id: 2, tech: 'CSS' },
    ],
  },
  {
    id: 3,
    name: 'Ecommerce App With React Hooks & Firebase',
    img: './images/simplex.PNG',
    description: 'A Simple ecommerce store developed using React Hooks and Firebase',
    liveLink: 'ecommerce-app-with-react-hooks.herokuapp.com',
    github: 'https://github.com/HamzaAnwar1998/ecommerce-site-with-react-hooks-and-firebase',
    techstack: [
      { id: 1, tech: 'React' },
      { id: 2, tech: 'CSS' },
      { id: 3, tech: 'Firebase' },
      { id: 4, tech: 'NodeJS' },
    ],
  },
  {
    id: 4,
    name: 'Upload and View PDF Files in React App',
    img: './images/simplex.PNG',
    description: 'A Simple React App in which users can upload and view pdf files in browser',
    liveLink: 'https://youtu.be/v-PoG1X8jig',
    github: 'https://github.com/HamzaAnwar1998/Upload-View-Pdf-In-Reactjs',
    techstack: [
      { id: 1, tech: 'Hooks' },
      { id: 2, tech: 'PDF' },
    ],
  },
];

const gridContainer = document.getElementById('grid-container');
document.getElementById('body').onload = () => {
  projects.map((project) => {
    gridContainer.innerHTML += `
      <div class="grid-items pj">
        <div class="bg-img">
            <h3>${project.name}</h3>
            <p>
                ${project.description}
            </p>
            <ul id="ul">
                <li>HTML</li>
            </ul>
            <button onclick="openModal('${project}')">See Projects</button>
        </div>
      </div>
      `;
  });
};

// const ul = document.getElementById('ul');
// projects.map((project) => {
//   const technologies = project.techstack;
//   technologies.forEach((technology) => {
//     const li = document.createElement('li');
//     li.textContent = technology.tech;
//     if (ul !== null) {
//       ul.appendChild(li);
//     } else {
//       console.log('ul is null');
//     }
//   });
// });

function openModal(project) {
  const { id, name } = project;
  console.log(id, name);
}