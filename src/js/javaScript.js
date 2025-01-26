import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

let swiperInstance, swiperTwo, swiperThree

//Delare value of card-prices on screen
let numberCards = 4
let productNumber = 8

// Toggle Button Show & hide cards
const articleWrap = document.querySelector('.text__wrap')
let btn = document.querySelectorAll('#tongleBtn')
const readTxt = document.querySelector('.readMore')
const btnRow = document.querySelectorAll('#btnRow')
let showTxt = document.querySelectorAll('#btnTxt')

const cardPrices = document.querySelectorAll('.deviceCard')
const cardItem = document.querySelectorAll('#productCard')
pricesToggle(numberCards)
cardProduct(productNumber)

function pricesToggle(maxCardPrice) {
  cardPrices.forEach((item, index) => {
    // if (index >= maxCardPrice) {
    //   //if true we take item by number and left add "none"
    //   item.style.display = "none";
    // } else {
    //   item.style.display = "block";
    // }

    /* ternary operator: */
    item.style.display = index >= maxCardPrice ? 'none' : 'block'
  })
}

function cardProduct(maxCardPrice) {
  cardItem.forEach((item, index) => {
    if (index >= maxCardPrice) {
      item.style.display = 'none'
    } else {
      item.style.display = 'block'
    }
  })
}

btn.forEach((item, index) => {
  item.addEventListener('click', () => {
    const revestIndex = showTxt.length - 1 - index
    switch (index) {
      case 0:
        readTxt.textContent =
          readTxt.textContent === 'Read more' ? 'Less' : 'Read more'
        btnRow[index].style.transform =
          readTxt.textContent === 'Read more'
            ? 'rotate(90deg)'
            : 'rotate(-90deg)'
        articleWrap.style.display =
          readTxt.textContent === 'Read more' ? 'none' : 'block'

        break
      case 1:
        showTxt[revestIndex].textContent =
          showTxt[revestIndex].textContent === 'Show All' ? 'Hide' : 'Show All'
        btnRow[index].style.transform =
          showTxt[revestIndex].textContent === 'Show All'
            ? 'rotate(90deg)'
            : 'rotate(-90deg)'
        productNumber =
          showTxt[revestIndex].textContent === 'Show All' ? 8 : cardItem.length
        break
      case 2:
        // Text toggle
        showTxt[1].textContent =
          showTxt[1].textContent === 'Show All' ? 'Hide' : 'Show All'
        // arrow icon toggle
        btnRow[index].style.transform =
          showTxt[1].textContent === 'Show All'
            ? 'rotate(90deg)'
            : 'rotate(-90deg)'
        // Show & hid cards
        numberCards =
          showTxt[1].textContent === 'Show All' ? 4 : cardPrices.length

        break
    }
    pricesToggle(numberCards)
    cardProduct(productNumber)
  })
})

// Manage Swiper Based on Screen Size
function widthOfScreen() {
  const cards = document.querySelector('.cards')
  const card = document.querySelectorAll('.cards > div')
  const sizeWidth = window.innerWidth

  if (sizeWidth <= 767) {
    numberCards = cardPrices.length

    if (!cards.classList.contains('swiper-wrapper')) {
      cards.classList.add('swiper-wrapper')
      card.forEach((item) => item.classList.add('swiper-slide'))
    }
    // Initialize Swiper if not already initialized
    if (!swiperInstance) {
      swiperInstance = new Swiper('.mySwiper', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-one',
          clickable: true
        }
      })

      swiperTwo = new Swiper('.mySwiperTwo', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-two',
          clickable: true
        }
      })

      swiperThree = new Swiper('.mySwiperThree', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-three',
          clickable: true
        }
      })
    }
  } else {
    cards.classList.remove('swiper-wrapper')
    card.forEach((item) => item.classList.remove('swiper-slide'))

    numberCards = 4

    // Destroy Swiper Instance
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null

      swiperTwo.destroy(true, true)
      swiperTwo = null

      swiperThree.destroy(true, true)
      swiperThree = null
    }
  }
  pricesToggle(numberCards)
}
window.onload = widthOfScreen
window.onresize = widthOfScreen

// BURGER Button Navbar
const sidebar = document.querySelector('.sibebar')
const asideContain = document.querySelector('.aside__container')
const orderSidebar = document.querySelector('.order__container')
//berger mobile
document.querySelectorAll('.burger__btn').forEach((item) => {
  item.addEventListener('click', () => {
    sidebar.style.display = 'block'
    asideContain.classList.add('nabar-popup')
  })
})
// BURGER CLOSE Navbar
document.querySelector('.close__btn').addEventListener('click', (event) => {
  asideContain.classList.remove('nabar-popup')
  if (event.target != asideContain) {
    sidebar.style.display = 'none'
  }
})

// SIDEBAR RIGHT SHOW
const sibebarRight = document.querySelector('.sidebar-right')
const cardBar = document.querySelector('.submit__container')
//repair mobile show
document.querySelector('.repair__btn--m').addEventListener('click', () => {
  cardBar.style.display = 'block'
})
// order mobile show
document.querySelector('.order__btn--m').addEventListener('click', () => {
  orderSidebar.style.display = 'block'
})
//repair desktop show
document.querySelector('.repair__btn').addEventListener('click', () => {
  cardBar.style.display = 'block'
  sibebarRight.classList.add('nabar-popup')
})
//show tablet
document.querySelector('.repair__btn--tablet').addEventListener('click', () => {
  cardBar.style.display = 'block'
  sibebarRight.classList.add('nabar-popup')
})
//SIDEBAR RIGHT HIDE
document.querySelectorAll('.close__btn--right').forEach((item) => {
  item.addEventListener('click', () => {
    cardBar.style.display = 'none'
    sibebarRight.classList.remove('nabar-popup')
    //cards order call
    document.querySelector('.order__container').style.display = 'none'
  })
})
// order tablet & desktop show
document.querySelectorAll('.order__btn').forEach((item) => {
  item.addEventListener('click', () => {
    orderSidebar.style.display = 'block'
    sibebarRight.classList.add('nabar-popup')
  })
})
