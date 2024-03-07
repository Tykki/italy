import './../css/style.css'

const pages = document.querySelectorAll('main')
const navLinks = document.querySelectorAll('#navbar a')

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
 
 window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
 hashHandler(window.location.hash)