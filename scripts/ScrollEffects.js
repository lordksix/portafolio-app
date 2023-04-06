console.log(window.innerWidth);
const menuLinks = document.querySelectorAll('.menu li a');
const headerLink = document.querySelector('.logo a');
let headerHeight = document.getElementById("header").offsetHeight;

menuLinks.forEach(link => link.addEventListener('click', smoothScroll));
headerLink.addEventListener('click', smoothScrollTop);

function smoothScroll(e){
    e.preventDefault();
    const targetDestination = e.target.getAttribute('href');
    const targetSelector= document.querySelector(targetDestination);
    const targetTop = Math.floor(targetSelector.getBoundingClientRect().top)-headerHeight;
    window.scrollBy({top: targetTop, left: 0, behavior: 'smooth'});
}

function smoothScrollTop(e){
    e.preventDefault();
    const targetDestination = e.target.getAttribute('href');
    const targetSelector = document.querySelector(targetDestination);
    const targetTop = Math.floor(targetSelector.getBoundingClientRect().top);
    window.scrollBy({top: targetTop, left: 0, behavior: 'smooth'});
}

window.addEventListener('load',function(){
    const posts = document.querySelectorAll('.scroll');
    let postTops = [];
    postTops.push(0);
    let pageTop;
    let prevCounter=0;
    let counter = 0;
    let doneResizing;
    posts.forEach(element => {postTops.push(Math.floor(element.getBoundingClientRect().top + window.scrollY));});

    window.addEventListener('scroll', ()=>{
        pageTop= window.scrollY+headerHeight*1.1;
        if (pageTop>postTops[counter+1]) {
            console.log(postTops[counter]);
            counter++;
            console.log(`scrolling down at  ${counter}`);
        } else if (counter > 0 && pageTop<postTops[counter]) {
            counter--;
            console.log(postTops[counter]);
            console.log(`scrolling up at  ${counter}`);
        }
        else if(counter!= prevCounter){
            menuLinks.forEach(element => {element.removeAttribute('class')});
            if(counter>0){
                const thisLink = document.querySelector(`.menu li:nth-child(${counter}) a`);
                thisLink.className='selected';
            }
            prevCounter=counter;
        }
    })
    window.addEventListener('resize', ()=>{
        clearTimeout(doneResizing);
        doneResizing = setTimeout(()=>{resetpagePosition();}, 200);
    });
    
    function resetpagePosition(){
        postTops=[];
        postTops.push(0);
        posts.forEach(element => {postTops.push(Math.floor(element.getBoundingClientRect().top + window.scrollY));});
        headerHeight = document.getElementById("header").offsetHeight;
        const pagePosition= window.scrollY+headerHeight*1.1;
        counter=0;
        postTops.forEach(element => {if(pagePosition>element){counter++;}});
        menuLinks.forEach(element => {element.removeAttribute('class')});
        if(counter > 0) {
            const thisLink = document.querySelector(`.menu li:nth-child(${counter}) a`);
            thisLink.className='selected';
        }
    }
})