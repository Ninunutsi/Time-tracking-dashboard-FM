let days = document.getElementById("days")

for(let i = 0; i < 5; i ++){
    const node = document.getElementById("day");
    const clone = node.cloneNode(true);
    document.getElementById("days").appendChild(clone);
}

let part = document.getElementsByClassName('part')
let parts = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care']

let colorLogo = document.getElementsByClassName('color-logo')
let colors = ['hsl(15, 100%, 70%)', 
'hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)',
'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)',
'hsl(43, 84%, 65%)']

let icon = document.getElementsByClassName("icon")
let icons = ['<img src="./assets/images/icon-work.svg" alt="">',
'<img src="./assets/images/icon-play.svg" alt="">',
'<img src="./assets/images/icon-study.svg" alt="">',
'<img src="./assets/images/icon-exercise.svg" alt="">',
'<img src="./assets/images/icon-social.svg" alt="">',
'<img src="./assets/images/icon-self-care.svg" alt="">']

let hour = document.getElementsByClassName("hours")
let hours = [32, 10, 4, 4, 5, 2]

let lastHour = document.getElementsByClassName('last-hours')
let lastHours = [36, 8, 7, 5, 10, 2]

for(let i = 0; i < 6; i++){
    part[i].innerHTML = parts[i]
    colorLogo[i].style.backgroundColor = colors[i]
    icon[i].innerHTML = icons[i]
    hour[i].innerHTML = hours[i] + 'hrs'
    lastHour[i].innerHTML = lastHours[i] + 'hrs'
}

icon[3].style.width = "70px"
icon[4].style.height = "55px"

let daily = document.getElementById('daily')
let weekly = document.getElementById('weekly')
let monthly = document.getElementById('monthly')

let lastDay = document.getElementsByClassName('last-day')

window.addEventListener('load', () => {
    weekly.style.color = 'white'
})

daily.addEventListener('click', () => {
    let dhours = [7, 1.5, 1, 1, 2, 0.5]
    let dlastHours = [10, 4, 9, 6, 12, 5]
    daily.style.color = 'white'
    weekly.style.color = ''
    monthly.style.color = ''
    for(let i = 0; i < 6; i ++){
        hour[i].innerHTML = dhours[i] + 'hrs'
        lastHour[i].innerHTML = dlastHours[i] + 'hrs'
        lastDay[i].innerHTML = "Yesterday"
    }
})

weekly.addEventListener('click', () => {
    daily.style.color = ''
    weekly.style.color = 'white'
    monthly.style.color = ''
    for(let i = 0; i < 6; i ++){
        hour[i].innerHTML = hours[i] + 'hrs'
        lastHour[i].innerHTML = lastHours[i] + 'hrs'
    }
})

monthly.addEventListener('click', () => {
    let mhours = [50, 25, 16, 18, 8, 6]
    let mlastHours = [45, 27, 18, 16, 10, 9]
    daily.style.color = ''
    weekly.style.color = ''
    monthly.style.color = 'white'
    for(let i = 0; i < 6; i ++){
        hour[i].innerHTML = mhours[i] + 'hrs'
        lastHour[i].innerHTML = mlastHours[i] + 'hrs'
        lastDay[i].innerHTML = "Last Month"
    }
})
