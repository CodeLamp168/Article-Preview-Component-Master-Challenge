const shareBtn = document.getElementById('js_share_area')
const shareActive = document.getElementById('js_active_area')

shareBtn.addEventListener('click', () => {
    shareActive.classList.toggle('active_area')
    shareActive.classList.toggle('deactive_area')
    

    e.preventDefault()
})
