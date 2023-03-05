media.addEventListener("click", ()=> {
    mediaNavCol.classList.toggle("showed")
    nav.classList.toggle("white")
    body.classList.toggle("hidden")
    media.classList.toggle("fa-bars")
    media.classList.toggle("fa-right-from-bracket")
})

x[0].addEventListener("click", ()=> {
    vehicles.classList.remove("show")
    nav.classList.remove("white")
    body.classList.remove("hidden")
})

navItems[8].addEventListener("click", ()=> {
    searchBar.classList.add("active")
    nav.classList.add("white")
    body.classList.add("hidden")
})

x[1].addEventListener("click", () => {
    searchBar.classList.remove("active")
    nav.classList.remove("white")
    body.classList.remove("hidden")
})

cars.forEach((car) => {
    let div = document.createElement("div")
    div.classList.add("car")
    div.innerHTML = `
        <img src="${car.img}">
        <p class="name">${car.name}</p>
        <p class="starting">Starting MSRP</p>
        <p class="price">$ ${car.price} *</p>
    `
    carExplore.appendChild(div)
})