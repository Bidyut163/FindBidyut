const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#sidebar__close-btn');
const sidebar = document.querySelector('#sidebar');
// const date = document.querySelector('#date');

// add fixed class to navbar
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});
// show sidebar
navBtn.addEventListener('click', function () {
    sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});
// set year
// date.innerHTML = new Date().getFullYear();

// Pop up

const projects = {
    1: {
        projectName: 'AREATAPPEAL',
        image: './img/portfolio-img-1.png',
        tagline: 'E-filing portal for REAT Assam',
        description:
            'Assam REAT portal for filing of appeals. Built using React-Redux and Node.js',
        websiteLink: 'https://efiling-appeal.netlify.app/',
        gitRepository: 'https://github.com/Bidyut163/efiling-appeal-dev',
    },

    2: {
        projectName: 'Nexter',
        image: './img/portfolio-img-2.png',
        tagline: "Let's find a home that's perfect for you",
        description: `This landing page is built using HTML and CSS. The layout is made 
            using CSS Grid and the small itms like navigation is made using flex box.`,
        websiteLink: 'https://stark-shelf-62751.herokuapp.com/',
        gitRepository: 'https://github.com/Bidyut163/Nexter',
    },

    3: {
        projectName: 'Natours',
        image: './img/portfolio-img-3.png',
        tagline: 'A site for tourisim',
        description:
            'The layout is made using css floats. Modern Css cutting edge properties are used to build this UI.',
        websiteLink: 'https://murmuring-wave-62706.herokuapp.com/',
        gitRepository: 'https://github.com/Bidyut163/Natours',
    },

    4: {
        projectName: 'Pig Game',
        image: './img/portfolio-img-4.png',
        tagline: 'Roll the dice and have fun',
        description: `This game is made using Javascipt. Whoever score 100 first wins the game.
             Game is based on Pig game  described by John Scarne in 1945.`,
        websiteLink: 'https://young-forest-01211.herokuapp.com/',
        gitRepository: 'https://github.com/Bidyut163/Pig-game-js',
    },
};

function popup(projectNo) {
    document.querySelector('.popup__heading--main').innerHTML =
        projects[projectNo].projectName;

    document.querySelector('.popup__image').src = projects[projectNo].image;

    document.querySelector('.popup__heading--sub').innerHTML =
        projects[projectNo].tagline;

    document.querySelector('.popup__text').innerHTML =
        projects[projectNo].description;

    document.querySelector('#site-link').href = projects[projectNo].websiteLink;

    document.querySelector('#github-repo').href =
        projects[projectNo].gitRepository;
}
