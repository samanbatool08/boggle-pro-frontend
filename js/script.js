console.log('javascript is running')

const grid = document.querySelector('.container')
const letterBar = document.getElementById('letter')
let numbers = []

grid.addEventListener('click', function(e) {
    e.target.style.backgroundColor = "red"
    let letterXId = e.target.dataset.xId
    let letterYId = e.target.dataset.yId
    let letter = e.target.innerText
    if (numbers.includes(letterXId+letterYId)) {
        alert('You\'ve already played this letter')
    } else {
        numbers.push(letterXId+letterYId)
        letterBar.innerText += letter
    }
})



// grid.addEventListener('click', function(e) {
//     if (e.target.dataset.xId + 2 && e.target.dataset.yId + 2)
// })