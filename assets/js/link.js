const x = document.querySelectorAll(".quit")
const nav = document.querySelector("nav")
const vehicles = document.querySelector(".vehicles")
const navItems = document.querySelector(".nav__col").children
const carExplore = document.querySelector(".explore__cars")
const searchBar = document.querySelector(".search__bar")
const quitSearch = document.querySelector(".quit__search")
const body = document.querySelector("body")
const mediaNavCol = document.querySelector(".media__nav__col")
const media = document.querySelector(".fa-bars")
let cars = [
    {
        img: `https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue_sport/Vehicle%20Profile%20Assets/2022/2022-rogue-sport-g41-sl.png.ximg.l_3_m.smart.png`,
        name: `Rogue Sport`,
        price: '24.960',
    },
    {
        img: `https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue/vehicle-profile-assets/2023/model-2023-rogue-platinum-two-tone-champagne-silver-metallic-super-black.png.ximg.l_3_m.smart.png`,
        name: `Rogue`,
        price: '27.360',
    },
    {
        img: `https://www.nissanusa.com/content/dam/Nissan/us/vehicles/rogue/vehicle-profile-assets/2023/model-2023-rogue-platinum-two-tone-champagne-silver-metallic-super-black.png.ximg.l_3_m.smart.png`,
        name: `Murano`,
        price: '33.660',
    },
    {
        img: `https://www.nissanusa.com/content/dam/Nissan/us/vehicles/pathfinder/vehicle-profile-assets/2023/model-2023-pathfinder-platinum-4wd-scarlet-ember-tintcoat.png.ximg.l_3_m.smart.png`,
        name: `Pathfinder`,
        price: '35.000',
    },
    {
        img: `https://www.nissanusa.com/content/dam/Nissan/us/vehicles/ariya/vehicle-profile-assets/2023/model-2023-ariya-platinum-plus-e-4orce-two-tone-sunrise-copper-pearl-black-diamond-metallic.png.ximg.l_3_m.smart.png`,
        name: `Nissan ARIYA`,
        price: '43.190',
    },
    {
        img: `https://www.nissanusa.com/content/dam/Nissan/us/vehicles/armada/vehicle-profile-assets/2023/model-2023-armada-platinum-4wd-aspen-white-tricoat.png.ximg.l_3_m.smart.png`,
        name: `Armada`,
        price: '50.400',
    },
]
