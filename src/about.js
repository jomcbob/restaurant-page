// import Food from './img/food.jpg'    // content.innerHTML = `<img src=${Food} class='food'>`;
//Greeting

let loadAbout = function(){
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.style.backgroundColor = "rgba(128, 128, 128, 0.8)"
    content.innerHTML = `   
     <div>
        <h1>Berry Bliss</h1>
        <p>Fresh Berries, Light Snacks, and Cold Drinks</p>
    </div>

    <section>
        <h2>About Us</h2>
        <p>Welcome to <span class="highlight">Berry Bliss</span> – your ultimate destination for all things refreshing and delicious! We are a cozy, vibrant eatery specializing in the finest selection of fresh <span class="highlight">berries</span>, light and satisfying snacks, and a wide range of <span class="highlight">cold drinks</span> to keep you feeling cool and energized.</p>
        
        <p>Our mission is simple: to provide a wholesome and enjoyable experience for everyone who walks through our doors. Whether you're craving a burst of fruity goodness from our berry bowls, looking for a quick snack to satisfy your hunger, or just in need of a refreshing iced drink, we’ve got something for every taste and occasion.</p>

        <p>At Berry Bliss, we use only the freshest ingredients, ensuring every bite is packed with flavor. Our berries are handpicked, and we take great pride in offering healthy, high-quality options for our customers. With a warm and inviting atmosphere, we aim to be your go-to spot for a light meal or a refreshing drink break.</p>
        
        <p>We believe in the power of good food to bring people together and create lasting memories. So come on in, relax, and indulge in your favorite berries, snacks, and cold beverages!</p>
    </section>

    <footer>
        <p>&copy; 2025 Berry Bliss. All rights reserved.</p>
    </footer>`
}
export {loadAbout}