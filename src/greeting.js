// menu

let loadMenu = function(){
    const content = document.querySelector('#content')
    content.innerHTML = ''
    content.style.backgroundColor = "rgba(128, 128, 128, 0.8)"
    content.innerHTML = `
    <div>
        <h1>Berry Bliss Menu</h1>
        <p>Fresh Berries, Light Snacks, and Cold Drinks</p>
    <div>

    <div class="menu-section">
        <h2>Berry Bowls $5.00</h2>
        <div class="menu-item">
            <span>Berry Bliss Bowl:</span> A mix of strawberries, blueberries, raspberries, and blackberries, topped with granola, honey, and chia seeds.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Tropical Berry Bowl:</span> Pineapple, mango, and coconut paired with strawberries and blueberries. Topped with toasted coconut flakes and a drizzle of agave.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Acai Power Bowl:</span> Acai base topped with fresh strawberries, bananas, blueberries, and almond butter.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Mixed Berry Bowl:</span> A medley of strawberries, raspberries, and blackberries with Greek yogurt and a sprinkle of granola.
        </div>
    </div>

    <div class="menu-section">
        <h2>Light Snacks $3.00</h2>
        <div class="menu-item">
            <span>Avocado Toast:</span> Fresh avocado spread on toasted sourdough, seasoned with sea salt and pepper, topped with chili flakes.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Berry Granola Parfait:</span> Layers of creamy yogurt, granola, and fresh mixed berries, drizzled with honey.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Crispy Sweet Potato Fries:</span> Lightly salted, served with kechup.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Hummus & Veggie Platter:</span> Creamy hummus served with cucumber, carrots, and celery sticks for a light, healthy snack.
        </div>
    </div>

    <div class="menu-section">
        <h2>Cold Drinks $3.00 (water $1.50)</h2>
        <div class="menu-item">
            <span>Berry Lemonade:</span> A tangy and sweet lemonade made with fresh mixed berries and a hint of mint.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Tropical Smoothie:</span> Mango, pineapple, and banana blended into a refreshing, creamy smoothie.
        </div>
        <p></p>
        <div class="menu-item">
            <span>Fresh Fruit Infused Water:</span> A light, refreshing water infused with your choice of berries, cucumber, or citrus.
        </div>
    </div>

    <div class="menu-section">
        <h2>Extras $1.75</h2>
        <div class="extras">
            <ul>
                <li>Almond Butter Drizzle</li>
                <li>Honey Drizzle</li>
                <li>Chia Seeds</li>
                <li>Coconut Flakes</li>
                <li>Granola</li>
                <li>Extra Fresh Berries</li>
            </ul>
        </div>
    </div>

    <footer>
        <p>© 2025 Berry Bliss. All rights reserved.</p>
    </footer>`
}
export {loadMenu}



