const panels = document.querySelectorAll('.panel');

// just to show the array of div is web console
console.log(panels);

panels.forEach(panel => {
    panel.addEventListener('click', () => {

        //call the function removeActiveClass
        removeActiveClass()

        // adding class=active to the panel we can use the css to extend the content
        panel.classList.add('active')
    })
})

//create function that remove the class=active
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} 