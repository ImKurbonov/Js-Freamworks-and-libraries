const slider = document.querySelector('.slider')
const container = document.querySelector('.container')
const active = document.getElementById('active')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const line4 = document.getElementById('line4')

line1.addEventListener('click', ()=> {
    slider.style.transform = 'translateX(0)'
    active.style.top = '0'
    container.style.background = `linear-gradient(45deg, #ff4500, rgb(253, 234, 20)`
})

line2.addEventListener('click', ()=> {
    slider.style.transform = 'translateX(-25%)'
    active.style.top = '80px'
    container.style.background = `linear-gradient(45deg, rgb(3, 194, 10), rgb(32, 180, 72)`
})

line3.addEventListener('click', ()=> {
    slider.style.transform = 'translateX(-50%)'
    active.style.top = '160px'
    container.style.background = `linear-gradient(45deg, #0c03ab, #0eecda`
})

line4.addEventListener('click', ()=> {
    slider.style.transform = 'translateX(-75%)'
    active.style.top = '240px'
    container.style.background = `linear-gradient(45deg, #ac1717, #b3228f`
})