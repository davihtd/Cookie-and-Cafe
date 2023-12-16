let num = 0;
let cookie = document.getElementById("cookie")

function cookieClick() {
    num += 1;

    let numbers = document.getElementById("numbers")
    let upgradeLevel = document.getElementById("upgradeLevel")
    let ocultar = document.getElementById("hidden")
    let win = document.querySelector('.game-win')

    numbers.innerHTML = num

    if (num >= 30) {
        num += 2;
        upgradeLevel.innerHTML = "ABUELA"
    }

    if (num >= 500) {
        num += 10
        upgradeLevel.innerHTML = "GRANJA"
    }

    if (num >= 700) {
        num += 30
        upgradeLevel.innerHTML = "Fábrica"
    } 
    
    if (num >= 1000) {
        num += 100
        upgradeLevel.innerHTML = "Súper Fábrica"
    }

    if (num >= 1500) {
        ocultar.style.display = 'none'
        win.style.display = 'block'
    }


}
function indexPage() {
    window.location.href = "index.html"
}

