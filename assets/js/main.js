import './../css/style.css'

const pages = document.querySelectorAll('main')
const navLinks = document.querySelectorAll('#navbar a')

const hide = () => {
    pages.forEach((page) => {
        page.classList.add('hide')
    })
}

const hashHandler = (hash) => {
    console.log('step 2', hash)
    if (!hash) {
        return
    }
    hide()
    // Active Class on navbar if we doing that
    pages.forEach((page) => {
        if (hash === `#${page.id}`) {
            console.log('pass')
            page.classList.remove('hide')
        } else {
            // location.hash = ''
            // location.reload()
        }
    })
    //  if (hash === "#event"){
    //      eventPage.classList.remove('hide')
    //  } else if (hash === "#artist"){
    //      artistPage.classList.remove('hide')
    //  } else if (hash === "#testi"){
    //      testiPage.classList.remove('hide')
    //  } else if (hash === "#gallery"){
    //      galleryPage.classList.remove('hide')
    //  }
 }
 
 window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
 hashHandler(window.location.hash)