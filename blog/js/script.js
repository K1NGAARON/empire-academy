const blogContent = [
    {
        title: "Blog title number 1",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/banner.jpg',
        url: '',
    },
    {
        title: "Blog title number 2",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/banner.jpg',
        url: '',
    },
    {
        title: "Blog title number 3",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        img: '/home/assets/img/banner.jpg',
        url: '',
    },
];

function createCards(e) {
    const target = document.querySelector('#blogContent');

    for (let i = 0; i < blogContent.length; i++) {
        let template = `
            <div class="card">
                <img src="${blogContent[i].img}" alt="${blogContent[i].title}">
                <h5>
                    ${blogContent[i].title}
                </h5>
                <p>
                    ${blogContent[i].body}
                </p>
                <a href="" class="btn ghost-btn">Lees meer</a>
            <div>
        `;

        target.insertAdjacentHTML('beforeend', template);
    }
};

$(document).ready(createCards);