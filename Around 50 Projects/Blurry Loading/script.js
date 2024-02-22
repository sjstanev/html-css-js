let bg = document.querySelector('.bg')
let loadText = document.querySelector('.loading-text')


// The setInterval() method, offered on the Window and WorkerGlobalScope interfaces,
// repeatedly calls a function or executes a code snippet, with a fixed time delay (ms) between each call.
let int = setInterval(blurring, 30)

load = 0

function blurring() {
    load++

    // don't stop couting until reach 100
    if (load > 99) {

        //The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().
        //If the parameter provided does not identify a previously established action, this method does nothing. 
        clearInterval(int)
    }


    loadText.innerText = `${load}%`
    // on this way make load bar (number%) more transparent
    loadText.style.opacity = scale(load, 0 , 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0 , 100, 30, 0)}px)`
}   


// map-a-range-of-numbers-to-another-range-of-numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}