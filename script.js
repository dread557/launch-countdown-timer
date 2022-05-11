const dayValue = document.querySelector(".day")
const hourValue = document.querySelector(".hour")
const minuteValue = document.querySelector(".minute")
const secondValue = document.querySelector(".second")


const countdown = () => {
    const countDate = new Date("June 30, 2022 00:00:00").getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)
    // console.log(textDay)

    dayValue.innerHTML = textDay
    hourValue.innerHTML = textHour
    minuteValue.innerHTML = textMinute
    secondValue.innerHTML = textSecond

    if (gap < 1000000) {
        countDate += 50000000
    }
}

setInterval(countdown, 1000)