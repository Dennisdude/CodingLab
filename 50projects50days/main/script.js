const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        wasActive = panel.classList.contains('active')
        removeActiveClass()
        if (!wasActive)
            panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(x => {
        x.classList.remove('active')
    })
}