import { loadAbout } from "./about.js";
import {loadMenu} from './greeting.js'
import {loadHome} from './home.js'
import "./styles.css"


let aboutButton = document.querySelector(".about")
aboutButton.addEventListener('click', () => {
    loadAbout()
})

let menuButton = document.querySelector('.menu')
menuButton.addEventListener('click', () => {
    loadMenu()
})

let homeButton = document.querySelector('.home')
homeButton.addEventListener('click', () => {
    loadHome()
})

