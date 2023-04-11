const btnLive = 'See live';
const btnSource = 'See source';

const works = [
  {
    name: 'Tonic',
    cat: ['CANOPY', 'Back End Dev', 2015],
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/Snapshoot-Portfolio.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
  {
    name: 'Multi-Post Stories',
    cat: ['FACEBOOK', 'Full Stack Dev', 2015],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/Snapshoot-multi.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
  {
    name: 'Facebook 360',
    cat: ['FACEBOOk', 'Full Stack Dev', 2015],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/topic-porta.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
  {
    name: 'Uber Navigation',
    cat: ['Uber', 'Lead Developer', 2018],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    snapshot: './images/mul-stories-porta.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [btnLive, btnSource],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
];

const projectBtns = document.querySelectorAll('.work .work-btn');
const bodyTag = document.querySelector('body');

function projectModal(e) {
  const docFragment = document.createDocumentFragment();

  const projectTarget = parseInt(e.target.dataset.workbtn, 10);

  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-overlay-wrapper');

  const projectCtn = document.createElement('div');
  projectCtn.classList.add('project-overlay', 'work-card');

  const projecHeadingCtn = document.createElement('div');
  projecHeadingCtn.classList.add('work-title-container');

  const projectCloseBtn = document.createElement('span');
  projectCloseBtn.textContent = 'X';
  projectCloseBtn.classList.add('work-clase');

  const projectHeading = document.createElement('h2');
  projectHeading.textContent = works[projectTarget].name;
  projectHeading.classList.add('work-title');

  

  
  projecHeadingCtn.appendChild(projectHeading);
  projecHeadingCtn.appendChild(projectCloseBtn);
  docFragment.appendChild(projecHeadingCtn);
  projectCtn.appendChild(docFragment);
  projectOverlay.appendChild(projectCtn);
  bodyTag.appendChild(projectOverlay);

  const closeBtn = document.querySelector('.work-clase');
  closeBtn.addEventListener('click', () => bodyTag.removeChild(projectOverlay));
  
}

projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));