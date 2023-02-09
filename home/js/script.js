// Social proof
const socialProofTarget = document.querySelector('#socialProofHolder');
const socialProofContent = [

];

// Services
const servicesTarget = document.querySelector('#servicesHolder');
const servicesContent = [

];


// Highlighted content
const highlightedContentTarget = document.querySelector('#highlightedContentHolder');
const highlightedContent = [

];

function createSocialProof(e) {

};

function createServices(e) {

};

function createCards() {
    for (let i = 0; i < highlightedContent.length; i++) {
        let template = `

        `;

        highlightedContentTarget.insertAdjacentHTML('beforeend', template);
    }
};

$(document).ready(function() {
    console.log('1');
    console.log('2');
    console.log('3');
});