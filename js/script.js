console.log('javascript is running')

const grid = document.querySelector('.container')
const letterBar = document.getElementById('letter')

let done = false
let numbers = []
grid.addEventListener('click', function(e) {
    e.target.style.backgroundColor = "red"
    let letterXId = e.target.dataset.xId
    let letterYId = e.target.dataset.yId
    if (!done) {
        let letter = e.target.innerText
        letterBar.innerText += letter
        numbers.push([letterXId, letterYId])
        done = true
    } else {
        done = false
    }
    // if (numbers.includes([letterXId, letterYId])) {
    //     alert('you clicked this')
    // }
    // debugger
    // if (e.target.dataset.xId + 2 === ) {

    // }
})

// grid.addEventListener('click', function(e) {
//     if (e.target.dataset.xId + 2 && e.target.dataset.yId + 2)
// })