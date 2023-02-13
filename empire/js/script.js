

// Run date checker and add inactive to passd events
const events = [
    {
        title: 'Example event title 1',
        body: 'Compellingly impact extensible customer service impactful manufactured products. generate client-centric bandwidth through multifunctional meta-services. impact extensible customer service.',
        day: '01',
        month: 'March',
        year: '2023',
        location: 'Wellington',
        url: '',
        passed: 'active',
    },
    {
        title: 'Example event title 2',
        body: 'Compellingly impact extensible customer service impactful manufactured products. generate client-centric bandwidth through multifunctional meta-services. impact extensible customer service.',        day: '01',
        month: 'March',
        year: '2023',
        location: 'Wellington',
        url: '',
        passed: 'active',
    },
    {
        title: 'Example event title 3',
        body: 'Compellingly impact extensible customer service impactful manufactured products. generate client-centric bandwidth through multifunctional meta-services. impact extensible customer service.',        day: '01',
        month: 'March',
        year: '2023',
        location: 'Wellington',
        url: '',
        passed: 'active',
    },
];

function sortDate(e) {

};

function isPassed(events) {

};

function createCards(e) {
    const target = document.querySelector('#events');

    for (let i = 0; i < events.length; i++) {
        let template = `
            <div class="event ${events[i].passed}">
                <div class="event-item">
                    <div class="date-wrapper">
                        <p class="month">
                            ${events[i].month}
                        </p>
                        <p class="day">
                            ${events[i].day}
                        </p>
                    </div>
                </div>
                <div class="event-item">
                    <h5 class="headline">
                        ${events[i].title}
                    </h5>
                    <p class="location">
                        ${events[i].location}
                    </p>
                    <p class="body">
                        ${events[i].body}
                    </p>
                </div>
            </div>
        `;

        target.insertAdjacentHTML('afterbegin', template);
    };
};

$(document).ready(createCards);