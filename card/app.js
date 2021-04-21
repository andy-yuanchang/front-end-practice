const card = document.querySelector('.card')
const container = document.querySelector('.container')
const picture = document.querySelector('.picture img')
// Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    // console.log(card.style, `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`)
})
// Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = 'none'
    picture.style.transform = "translateZ(200px) rotateZ(-45deg)"
})

// Animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    picture.style.transform = "translateZ(0px) rotateZ(0deg)"
})