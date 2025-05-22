window.addEventListener('load', () =>{
    setTimeout(() => {
        document.getElementById('loader').style.display = "none";
        document.getElementById('main-content').style.display = 'flex'
    }, 700)
})