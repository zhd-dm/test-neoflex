const headphones = [{
        title: "Apple BYZ S852I",
        src: "./img/byz.png",
        price: "2927",
        rate: "4.7",
        width: "221",
        height: "238"
    },
    {
        title: "Apple EarPods",
        src: "./img/earpods.png",
        price: "2327",
        rate: "4.5",
        width: "221",
        height: "238"
    },
    {
        title: "Apple EarPods",
        src: "./img/earpods-with-case.png",
        price: "2327",
        rate: "4.5",
        width: "219",
        height: "179"
    },
    {
        title: "Apple BYZ S852I",
        src: "./img/byz.png",
        price: "2927",
        rate: "4.7",
        width: "221",
        height: "238"
    },
    {
        title: "Apple EarPods",
        src: "./img/earpods.png",
        price: "2327",
        rate: "4.5",
        width: "221",
        height: "238"
    },
    {
        title: "Apple EarPods",
        src: "./img/earpods-with-case.png",
        price: "2327",
        rate: "4.5",
        width: "219",
        height: "179"
    }
]

const wirelessHeadphones = [{
        title: "Apple AirPods",
        src: "./img/airpods.png",
        price: "9527",
        rate: "4.7",
        width: "221",
        height: "239"
    },
    {
        title: "GERLAX GH-04",
        src: "./img/gerlax.png",
        price: "6527",
        rate: "4.7",
        width: "221",
        height: "238"
    },
    {
        title: "BOROFONE BO4",
        src: "./img/borofone.png",
        price: "7527",
        rate: "4.7",
        width: "201",
        height: "241"
    },
]


const cards = document.querySelector('.card-list-not-wireless'); // Main cards
let i = 1;

headphones.forEach(item => {
    cards.insertAdjacentHTML('beforeend',
        `<li class="card-item" index="${i}">
            <div class="card-logo">
                <img src="${item.src}" alt="byz" style="width: ${item.width}px; height: ${item.height}px">
            </div>
            <div class="card-footer">
                <div class="card-first-line">
                    <div class="card-title">
                        <span> ${item.title} </span>
                    </div>
                    <div class="card-price">
                        <span> ${item.price} ₽ </span>
                    </div>
                </div>
                <div class="card-last-line">
                    <div class="card-rate">
                        <img src="./img/svg/rate.svg" alt="rate">
                        <span> ${item.rate} </span>
                    </div>
                    <a href="#!" class="card-add-to-cart"> Buy </a>
                </div>
            </div>
         </li>`
    )
    i++;
});

const wirelessCards = document.querySelector('.card-list-wireless'); // Main cards
let j = 1;

wirelessHeadphones.forEach(item => {
    wirelessCards.insertAdjacentHTML('beforeend',
        `<li class="card-item" index="${j}">
            <div class="card-logo">
                <img src="${item.src}" alt="byz" style="width: ${item.width}px; height: ${item.height}px">
            </div>
            <div class="card-footer">
                <div class="card-first-line">
                    <div class="card-title">
                        <span> ${item.title} </span>
                    </div>
                    <div class="card-price">
                        <span> ${item.price} ₽ </span>
                    </div>
                </div>
                <div class="card-last-line">
                    <div class="card-rate">
                        <img src="./img/svg/rate.svg" alt="rate">
                        <span> ${item.rate} </span>
                    </div>
                    <a href="#!" class="card-add-to-cart"> Buy </a>
                </div>
            </div>
         </li>`
    )
    j++;
});