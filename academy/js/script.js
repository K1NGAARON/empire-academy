const filter = document.querySelector('#services');

function filterCards(e) {
    $('.services .item').hide();

    let activeFilter = filter.value;

    if (activeFilter === 'all') {
        $('.services .item').show();
    } else {
        $('.' + activeFilter).show();
    }
};

filter.addEventListener('change', filterCards);