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
    img: './images/loginScreen1.PNG',
    description: 'This is a Virtual Exhibition landing page with registeration and login form flow',
    liveLink: 'https://virtualexhibitionwithevents.web.app/',
    github: '#',
    techstack: [
      { id: 1, tech: 'React' },
      { id: 2, tech: 'CSS' },
    ],
  },
  {
    id: 3,
    name: 'React Firebase Ecommerce',
    img: './images/filteringProducts.png',
    description: 'A Simple ecommerce store developed using React Hooks and Firebase',
    liveLink: 'https://ecommerce-app-with-react-hooks.herokuapp.com/',
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
    name: 'React PDF viewer',
    img: './images/pdf.png',
    description: 'A Simple React App in which users can upload and view pdf files in browser',
    liveLink: 'https://youtu.be/v-PoG1X8jig',
    github: 'https://github.com/HamzaAnwar1998/Upload-View-Pdf-In-Reactjs',
    techstack: [
      { id: 1, tech: 'Hooks' },
      { id: 2, tech: 'PDF' },
    ],
  },
  {
    id: 5,
    name: 'Fetch excel data in React',
    img: './images/reactExcel.png',
    description: 'A Simple React App in which users can upload and view excel files in browser',
    liveLink: 'https://www.youtube.com/watch?v=N42gydeIoQA',
    github: 'https://github.com/HamzaAnwar1998/Fetch-Excel-File-as-JSON-in-React',
    techstack: [
      { id: 1, tech: 'Hooks' },
      { id: 2, tech: 'Sheetjs' },
    ],
  },
  {
    id: 6,
    name: 'Booklist App',
    img: './images/booklist.png',
    description: 'A Simple booklist app developed using react and Local Storage',
    liveLink: 'https://www.youtube.com/watch?v=Mb-f3QfX2rU',
    github: 'https://github.com/HamzaAnwar1998/LocalStorage-with-React-Hooks-BookList-App',
    techstack: [
      { id: 1, tech: 'Hooks' },
      { id: 2, tech: 'LocalStorage' },
    ],
  },
];

const gridContainer = document.getElementById('grid-container');
document.getElementById('body').onload = () => {
  projects.forEach((project, index) => {
    gridContainer.innerHTML += `
      <div class="grid-items pj">
        <div class="bg-img">
            <h3>${project.name}</h3>
            <p>
                ${project.description}
            </p>
            <ul>
              <li>HTML</li>
              <li>Bootstrap</li>
              <li>Ruby</li>
            </ul>
            <button onclick="openModal(projects[${index}])">See Projects</button>
        </div>
      </div>
      `;
  });
};

/* eslint-disable no-unused-vars */
function openModal(project) {
  // modal container
  const modalContainer = document.getElementById('modal-container');

  // boxshadow child of modal container
  const backshadow = document.createElement('div');
  backshadow.className = 'backshadow';

  // modal child of backshadow
  const modal = document.createElement('div');
  modal.className = 'modal';

  // headingDiv child of modal
  const headingDiv = document.createElement('div');
  headingDiv.className = 'heading-div';

  // heading child of headingDiv
  const heading = document.createElement('h3');
  heading.className = 'modal-heading';
  heading.textContent = project.name;
  headingDiv.appendChild(heading);

  // cross child of headingDiv
  const cross = document.createElement('i');
  cross.className = 'fa-solid fa-xmark fa-xl';
  headingDiv.appendChild(cross);

  // techstack UL and its 3 LI's child of modal
  const techstack = document.createElement('ul');
  techstack.className = 'modal-techstack';
  const techHtml = document.createElement('li');
  techHtml.className = 'li';
  techHtml.textContent = 'HTML';
  const techBootstrap = document.createElement('li');
  techBootstrap.className = 'li';
  techBootstrap.textContent = 'Bootstrap';
  const techRuby = document.createElement('li');
  techRuby.className = 'li';
  techRuby.textContent = 'Ruby';
  techstack.appendChild(techHtml);
  techstack.appendChild(techBootstrap);
  techstack.appendChild(techRuby);

  // leftside and rightside container that is child of modal
  const leftRightContainer = document.createElement('div');
  leftRightContainer.className = 'left-and-right-container';

  // leftside div (child of leftRightContainer) to append image
  const leftside = document.createElement('div');
  leftside.className = 'modal-leftside';
  leftRightContainer.appendChild(leftside);

  // creating a div that is child of leftside to append img
  const imgDiv = document.createElement('div');
  imgDiv.className = 'modal-img-div';
  const projectImg = document.createElement('img');
  projectImg.src = project.img;
  imgDiv.appendChild(projectImg);
  leftside.appendChild(imgDiv);

  // rightside div (child of modal) will append p and btns div
  const rightside = document.createElement('div');
  rightside.className = 'modal-rightside';
  leftRightContainer.appendChild(rightside);

  // description child of rightside
  const description = document.createElement('p');
  description.textContent = project.description;
  description.className = 'modal-description';
  rightside.appendChild(description);

  // buttons divs child of rightside to append live and github link
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'modals-btns-div';
  const livelink = document.createElement('a');
  livelink.href = project.liveLink;
  livelink.className = 'a';
  livelink.textContent = 'See Live';
  livelink.target = 'blank';
  buttonsDiv.appendChild(livelink);
  const github = document.createElement('a');
  github.href = project.github;
  github.textContent = 'See Source';
  github.className = 'a';
  github.target = 'blank';
  buttonsDiv.appendChild(github);
  rightside.appendChild(buttonsDiv);

  // modal appending its children
  modal.appendChild(headingDiv);
  modal.appendChild(techstack);
  modal.appendChild(leftRightContainer);

  // backshadow appending modal
  backshadow.appendChild(modal);

  // modal container appending backshadow
  modalContainer.appendChild(backshadow);

  // x click event listner
  cross.addEventListener('click', () => {
    backshadow.style.display = 'none';
  });
}

// multi stories modal
function multipostModal() {
  // modal container
  const modalContainer = document.getElementById('multi-stories-modal-container');

  // boxshadow child of modal container
  const backshadow = document.createElement('div');
  backshadow.className = 'backshadow';

  // modal child of backshadow
  const modal = document.createElement('div');
  modal.className = 'modal';

  // headingDiv child of modal
  const headingDiv = document.createElement('div');
  headingDiv.className = 'heading-div';

  // heading child of headingDiv
  const heading = document.createElement('h3');
  heading.className = 'modal-heading';
  heading.textContent = 'Multi Post Stories';
  headingDiv.appendChild(heading);

  // cross child of headingDiv
  const cross = document.createElement('i');
  cross.className = 'fa-solid fa-xmark fa-xl';
  headingDiv.appendChild(cross);

  // techstack UL and its 3 LI's child of modal
  const techstack = document.createElement('ul');
  techstack.className = 'modal-techstack';
  const techHtml = document.createElement('li');
  techHtml.className = 'li';
  techHtml.textContent = 'HTML';
  const techBootstrap = document.createElement('li');
  techBootstrap.className = 'li';
  techBootstrap.textContent = 'Bootstrap';
  const techRuby = document.createElement('li');
  techRuby.className = 'li';
  techRuby.textContent = 'Ruby';
  techstack.appendChild(techHtml);
  techstack.appendChild(techBootstrap);
  techstack.appendChild(techRuby);

  // leftside and rightside container that is child of modal
  const leftRightContainer = document.createElement('div');
  leftRightContainer.className = 'left-and-right-container';

  // leftside div (child of leftRightContainer) to append image
  const leftside = document.createElement('div');
  leftside.className = 'modal-leftside';
  leftRightContainer.appendChild(leftside);

  // creating a div that is child of leftside to append img
  const imgDiv = document.createElement('div');
  imgDiv.className = 'modal-img-div';
  const projectImg = document.createElement('img');
  projectImg.src = './images/ImgPlaceholder.png';
  imgDiv.appendChild(projectImg);
  leftside.appendChild(imgDiv);

  // rightside div (child of modal) will append p and btns div
  const rightside = document.createElement('div');
  rightside.className = 'modal-rightside';
  leftRightContainer.appendChild(rightside);

  // description child of rightside
  const description = document.createElement('p');
  description.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.';
  description.className = 'modal-description';
  rightside.appendChild(description);

  // buttons divs child of rightside to append live and github link
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'modals-btns-div';
  const livelink = document.createElement('a');
  livelink.href = '#';
  livelink.className = 'a';
  livelink.textContent = 'See Live';
  buttonsDiv.appendChild(livelink);
  const github = document.createElement('a');
  github.href = '#';
  github.className = 'a';
  github.textContent = 'See Source';
  buttonsDiv.appendChild(github);
  rightside.appendChild(buttonsDiv);

  // modal appending its children
  modal.appendChild(headingDiv);
  modal.appendChild(techstack);
  modal.appendChild(leftRightContainer);

  // backshadow appending modal
  backshadow.appendChild(modal);

  // modal container appending backshadow
  modalContainer.appendChild(backshadow);

  // x click event listner
  cross.addEventListener('click', () => {
    backshadow.style.display = 'none';
  });
}
/* eslint-enable no-unused-vars */
