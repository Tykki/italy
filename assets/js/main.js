// import './../css/style.css'

const pages = document.querySelectorAll('main')
const navLinks = document.querySelectorAll('#navbar a')
const gallery = document.getElementById("gallery")
const infoList = document.querySelectorAll('.info-picker li')
const infoText = document.querySelectorAll('.info-view p')

const hide = () => {
    pages.forEach((page) => {
        page.classList.add('hide')
    })
}
let flag = false
const hashHandler = (hash) => {
    console.log('step 2', hash)
    if (!hash) {
        return
    }
    hide()
    flag = false
    // Active Class on navbar if we doing that
    pages.forEach((page) => {
        if (hash === `#${page.id}`) {
            console.log('pass')
            page.classList.remove('hide')
            flag = true
        }
    })
    // check if a page was set, if not show home page
    if (!flag){
        location.hash = '#splash'
    }
 }
 
 const roam = (e) => {
    const mouseX = e.clientX,
         mouseY = e.clientY;
   
   const xDecimal = mouseX / window.innerWidth,
         yDecimal = mouseY / window.innerHeight;
   
   const maxX = gallery.offsetWidth - window.innerWidth,
         maxY = gallery.offsetHeight - window.innerHeight;
   
   const panX = maxX * xDecimal * -1,
         panY = maxY * yDecimal * -1;
   
   gallery.animate({
     transform: `translate(${panX}px, ${panY}px)`
   }, {
     duration: 4000,
     fill: "forwards",
     easing: "ease"
   })
 }

 const infoHandler = (e) => {
    infoText.forEach(text =>{
        text.classList.add('hide')
    })
    if (e.id === 'ip1') {
        infoText[0].classList.remove('hide')
    } else if (e.id === 'ip2') {
        infoText[1].classList.remove('hide')
    } else if (e.id === 'ip3') {
        infoText[2].classList.remove('hide')
    } else if (e.id === 'ip4') {
        infoText[3].classList.remove('hide')
    }
 }

 infoList.forEach(item => {
    item.addEventListener('click', e => infoHandler(e.target))
})

 window.onmousemove = e => roam(e);
 window.ontouchmove = e => roam(e.touches[0])

 window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
 hashHandler(window.location.hash)