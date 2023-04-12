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
  const workCardInf = works[parseInt(e.target.dataset.workbtn, 10)];

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
  projectHeading.textContent = workCardInf.name;
  projectHeading.classList.add('work-title');

  projecHeadingCtn.appendChild(projectHeading);
  projecHeadingCtn.appendChild(projectCloseBtn);
  docFragment.appendChild(projecHeadingCtn);

  const workCat = document.createElement('ul');
  workCat.classList.add('work-cat');
  for (let i = 0; i < workCardInf.cat.length; i += 1) {
    const catList = document.createElement('li');
    if (i === 0) catList.classList.add('cat-title');
    else catList.classList.add('cat-descrip');
    catList.textContent = workCardInf.cat[i];
    workCat.appendChild(catList);
  }
  docFragment.appendChild(workCat);

  const workImage = document.createElement('img');
  workImage.classList.add('work-image');
  workImage.src = workCardInf.snapshot;
  workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
  docFragment.appendChild(workImage);

  const workCardBody = document.createElement('div');
  workCardBody.classList.add('work-card-body');

  const workDescrip = document.createElement('p');
  workDescrip.classList.add('work-descrip');
  workDescrip.textContent = workCardInf.description;
  workCardBody.appendChild(workDescrip);

  docFragment.appendChild(workCardBody);

  const workCardFooter = document.createElement('div');
  workCardFooter.classList.add('work-title-footer');

  const workCardLangs = document.createElement('ul');
  workCardLangs.classList.add('work-langs');
  workCardInf.tags.forEach((tag) => {
    const langList = document.createElement('li');
    langList.classList.add('work-lang');
    langList.textContent = tag;
    workCardLangs.appendChild(langList);
  });

  const workCardBtnsCtn = document.createElement('div');
  workCardBtnsCtn.classList.add('work-btns');
  for (let i = 0; i < 2; i += 1) {
    const workCardBtnsLink = document.createElement('a');
    workCardBtnsLink.href = workCardInf.connectionsURL[i];
    workCardBtnsLink.target = '_blank';
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    const workCardBtnsText = document.createElement('span');
    workCardBtnsText.textContent = workCardInf.connectionstext[i];
    workCardBtns.appendChild(workCardBtnsText);
    const workCardBtnsImg = document.createElement('img');
    workCardBtnsImg.src = workCardInf.connectionsBtn[i];
    workCardBtnsImg.alt = workCardInf.connectionstext[i];
    workCardBtnsImg.classList.add('work-image');
    workCardBtns.appendChild(workCardBtnsImg);

    workCardBtnsLink.append(workCardBtns);
    workCardBtnsCtn.appendChild(workCardBtnsLink);
  }

  workCardFooter.appendChild(workCardLangs);
  workCardFooter.appendChild(workCardBtnsCtn);
  workCardBody.appendChild(workCardFooter);
  docFragment.appendChild(workCardBody);

  projectCtn.appendChild(docFragment);
  projectOverlay.appendChild(projectCtn);
  bodyTag.appendChild(projectOverlay);

  const closeBtn = document.querySelector('.work-clase');
  closeBtn.addEventListener('click', () => bodyTag.removeChild(projectOverlay));
}

projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));