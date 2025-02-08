//home
let loadHome = function(){
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.style.backgroundColor = "rgba(128, 128, 128, 0.8)"
    content.innerHTML = `
<div>
    <p><h1>Welcome to Berry Bliss</h1></p>
    <p>Fresh Berries, Light Snacks, and Cold Drinks</p>
</div>

<div class="main-content">
    <h2>About Us</h2>
    <p>At Berry Bliss, we offer a refreshing escape from the everyday with the finest selection of fresh berries, delicious snacks, and cold beverages. Whether you're looking for a burst of fruity goodness or a healthy snack on the go, we have something to satisfy every craving. Our cozy and vibrant space is the perfect spot to relax, unwind, and indulge in our wholesome offerings. Join us and experience the blissful taste of fresh, quality ingredients.</p>
</div>

<div class="contact-info">
    <h3>Contact Us</h3>
    <p><strong>Phone:</strong> (123-456-7890)</p>
    <p><strong>Email:</strong> <a href="#">contact@berrybliss.com</a></p>
    <p><strong>Address:</strong> 123 Berry Lane, Fruitville, FL 98765</p>
    <p><strong>Opening Hours:</strong> Monday - Friday: 8 AM - 8 PM | Saturday - Sunday: 9 AM - 6 PM</p>
</div>

<footer>
    <p>© 2025 Berry Bliss. All rights reserved.</p>
    </footer>`
}
export {loadHome}


