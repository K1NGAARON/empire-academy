// Social proof
const socialProofTarget = document.querySelector('#socialProofHolder');
const socialProofContent = [

];

// Services
const servicesTarget = document.querySelector('#servicesHolder');
const servicesContent = [
    {
        title: "Service 1",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/service1.jpg',
        url: '',
    },
    {
        title: "Service 2",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/service2.jpg',
        url: '',
    },
    {
        title: "Service 3",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/service3.jpg',
        url: '',
    },
];


// Highlighted content
const highlightedContentTarget = document.querySelector('#highlightedContentHolder');
const highlightedContent = [
    {
        title: "This is the first blog",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quia iure corporis autem ab rem id voluptatem, ipsam quibusdam eum?",
        img: '/home/assets/img/banner.jpg',
        url: '',
    },
    {
        title: "This is the second blog",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/banner.jpg',
        url: '',
    },
    {
        title: "This is the third blog",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quia iure corporis autem ab rem id voluptatem, ipsam quibusdam eum?",
        img: '/home/assets/img/banner.jpg',
        url: '',
    },
];

function createSocialProof(e) {

};

function createServices(e) {
    for (let i = 0; i < servicesContent.length; i++) {
        let template = `
            <div class="container">
                <img src="${servicesContent[i].img}" alt="${servicesContent[i].title}">
                <div class="content">
                    <h5>
                        ${servicesContent[i].title}
                    </h5>
                    <p>
                        ${servicesContent[i].body}
                    </p>
                    <a class="btn ghost-btn" href="${servicesContent[i].url}">
                        Read more
                    </a>
                </div>
            <div>
        `;

        servicesTarget.insertAdjacentHTML('beforeend', template);
    }
};

function createCards() {
    for (let i = 0; i < highlightedContent.length; i++) {
        let template = `
            <div class="card">
                <img src="${highlightedContent[i].img}" alt="${highlightedContent[i].title}">
                <h5>
                    ${highlightedContent[i].title}
                </h5>
                <p>
                    ${highlightedContent[i].body}
                </p>
                <a class="btn ghost-btn" href="${highlightedContent[i].url}">
                    Read more
                </a>
            </div>
        `;

        highlightedContentTarget.insertAdjacentHTML('beforeend', template);
    }
};

$(document).ready(function() {
    createServices()
    createCards();
});