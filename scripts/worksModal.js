const works = [
  {
    name: 'Tonic',
    cat: ['CANOPY', 'Back End Dev', 2015],
    description: 
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/Snapshoot-Portfolio.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
  {
    name: 'Multi-Post Stories',
    cat: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/Snapshoot-multi.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
  {
    name: 'Facebook 360',
    cat: ['FACEBOOk', 'Full Stack Dev', 2015],
    description: 
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: './images/topic-porta.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
  {
    name: 'Uber Navigation',
    cat: ['Uber', 'Lead Developer', 2018],
    description: 
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    tags: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    snapshot: './images/mul-stories-porta.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: ['See live', 'See source'],
    connectionsURL: ['https://lordksix.github.io/portafolio-app/', 'https://github.com/lordksix/portafolio-app'],
  },
];

const workBtns = document.querySelectorAll('.works .work-btn');
const body = document.querySelector('body');

function workModal(e) {
  e.stopPropagation();
  const workCardInf = works[parseInt(e.target.dataset.workbtn, 10) - 1];
  const docFragment = document.createDocumentFragment();
  body.classList.add('modal-active');

  const workCardArticule = document.createElement('div');
  workCardArticule.classList.add('project-overlay', 'work-card');

  const workdCardTitleContainer = document.createElement('div');
  workdCardTitleContainer.classList.add('work-title-container');

  const workdCardTitle = document.createElement('h2');
  workdCardTitle.classList.add('work-title');
  workdCardTitle.textContent = workCardInf.name;

  const workdCardExit = document.createElement('span');
  workdCardExit.classList.add('work-clase');
  workdCardExit.textContent = 'X';

  workdCardTitleContainer.appendChild(workdCardTitle);
  workdCardTitleContainer.appendChild(workdCardExit);
  docFragment.appendChild(workdCardTitleContainer);

  const workCardCat = document.createElement('ul');
  workCardCat.classList.add('work-cat');
  for (let i = 0; i < workCardInf.cat.length; i += 1) {
    const catList = document.createElement('li');
    if (i === 0) catList.classList.add('cat-title');
    else catList.classList.add('cat-descrip');
    catList.textContent = workCardInf.cat[i];
    workCardCat.appendChild(catList);
  }
  docFragment.appendChild(workCardCat);

  const workCardImg = document.createElement('img');
  workCardImg.src = workCardInf.snapshot;
  workCardImg.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
  workCardImg.classList.add('work-image');
  docFragment.appendChild(workCardImg);

  const workdCardBody = document.createElement('div');
  workdCardBody.classList.add('work-card-body');

  const workdCardDescrip = document.createElement('p');
  workdCardDescrip.classList.add('work-descrip');
  workdCardDescrip.textContent = workCardInf.description;
  workdCardBody.appendChild(workdCardDescrip);

  const workdCardFooter = document.createElement('div');
  workdCardFooter.classList.add('work-title-footer');

  const workdCardLangs = document.createElement('ul');
  workdCardLangs.classList.add('work-langs');
  workCardInf.tags.forEach((tag) => {
    const langList = document.createElement('li');
    langList.classList.add('work-lang');
    langList.textContent = tag;
    workdCardLangs.appendChild(langList);
  });

  const workdCardBtnsCtn = document.createElement('div');
  workdCardBtnsCtn.classList.add('work-btns');
  for (let i = 0; i < 2; i += 1) {
    const workdCardBtns = document.createElement('button');
    workdCardBtns.classList.add('work-btn');
    const workdCardBtnsLink = document.createElement('a');
    workdCardBtnsLink.href = workCardInf.connectionsURL[i];
    workdCardBtnsLink.target = '_blank';
    workdCardBtnsLink.textContent = workCardInf.connectionstext[i];
    const workdCardBtnsImg = document.createElement('img');
    workdCardBtnsImg.src = workCardInf.connectionsBtn[i];
    workdCardBtnsImg.alt = workCardInf.connectionstext[i];
    workdCardBtnsImg.classList.add('work-image');
    workdCardBtns.append(workdCardBtnsLink, workdCardBtnsImg);
    workdCardBtnsCtn.appendChild(workdCardBtns);
  }

  workdCardFooter.appendChild(workdCardLangs);
  workdCardFooter.appendChild(workdCardBtnsCtn);
  workdCardBody.appendChild(workdCardFooter);
  docFragment.appendChild(workdCardBody);

  workCardArticule.append(docFragment);

  const workCardArticuleWrapper = document.createElement('div');
  workCardArticuleWrapper.classList.add('project-overlay-wrapper');
  workCardArticuleWrapper.appendChild(workCardArticule);

  console.log(workCardArticuleWrapper);

  body.appendChild(workCardArticuleWrapper);

  const workModalClose = document.querySelector('.work-clase');
  const workModal = document.querySelector('.project-overlay-wrapper');
  workModalClose.addEventListener('click', () => {
    workModal.classList.add('out');
    setTimeout(() => body.removeChild(workModal), 300);
    body.classList.remove('modal-active');
  });
}

workBtns.forEach((workBtn) => workBtn.addEventListener('click', workModal));
