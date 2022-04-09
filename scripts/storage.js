const STORAGE = [{
        art: "S852I",
        title: "Apple BYZ S852I",
        wireless: false,
        src: "./img/byz.png",
        price: "2927",
        rate: "4.7",
        width: "221",
        height: "238"
    },
    {
        art: "earpods",
        title: "Apple EarPods",
        wireless: false,
        src: "./img/earpods.png",
        price: "2327",
        rate: "4.5",
        width: "221",
        height: "238"
    },
    {
        art: "case-earpods",
        title: "Apple EarPods",
        wireless: false,
        src: "./img/earpods-with-case.png",
        price: "2327",
        rate: "4.5",
        width: "219",
        height: "179"
    },
    {
        art: "airpods",
        title: "Apple AirPods",
        wireless: true,
        src: "./img/airpods.png",
        price: "9527",
        rate: "4.7",
        width: "221",
        height: "239"
    },
    {
        art: "gerlax",
        title: "GERLAX GH-04",
        wireless: true,
        src: "./img/gerlax.png",
        price: "6527",
        rate: "4.7",
        width: "221",
        height: "238"
    },
    {
        art: "borofone",
        title: "BOROFONE BO4",
        wireless: true,
        src: "./img/borofone.png",
        price: "7527",
        rate: "4.7",
        width: "201",
        height: "241"
    },
];

if (!JSON.parse(localStorage.getItem('headphones'))) {
    localStorage.setItem('headphones', JSON.stringify(STORAGE));
};