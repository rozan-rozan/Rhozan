let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
    document.documentElement.classList.remove('darkmode')
    document.documentElement.classList.add('lightmode')
    lightmode = 'active';
}

const disableLightmode = () => {
    document.documentElement.classList.remove('lightmode')
    document.documentElement.classList.add('darkmode')
    lightmode = null;
}

themeSwitch.addEventListener("click", () => {
    if(lightmode !== "active"){
        enableLightmode()
    }else{
        disableLightmode()
    }
})