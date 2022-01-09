const displayedImg = document.querySelector('.displayed-image');
const product1 = document.querySelector('.product-1');
const product2 = document.querySelector('.product-2');
const product3 = document.querySelector('.product-3');
const product4 = document.querySelector('.product-4');
const cartBtn = document.querySelector('.cart-image');
const cardBox = document.querySelector('.non-active-cart');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const itemQuantity = document.querySelector('.item-quantity');
const addBtn = document.querySelector('.add-to-cart');

product1.addEventListener('click', () => {
    displayedImg.src = 'images/image-product-1.jpg';
});

product2.addEventListener('click', () => {
    displayedImg.src = 'images/image-product-2.jpg';
});

product3.addEventListener('click', () => {
    displayedImg.src = 'images/image-product-3.jpg';
});

product4.addEventListener('click', () => {
    displayedImg.src = 'images/image-product-4.jpg';
});

cartBtn.addEventListener('click', () => {
    if (cardBox.style.display === 'none') {
        cardBox.style.display = 'flex';
    } else {
        cardBox.style.display = 'none';
    }
});

let count = 0;

plusBtn.addEventListener('click', () => {
    count += 1;
    itemQuantity.textContent = count;
});

minusBtn.addEventListener('click', () => {
    if (count < 1) {
        return false;
    };
    count = count - 1;
    itemQuantity.textContent = count;
});

addBtn.addEventListener('click', () => {
    if (itemQuantity.innerText == 0) return false;
    let htmlString = `<div class="img-section">
                <img src="images/image-product-1-thumbnail.jpg" alt="">
                <h4>Fall Limited Edition Sneakers</h4>
                </div>
                <div class="price-section">
                <p class="price"><b>Price:</b> $${125 * Number(itemQuantity.innerText)}.00</p>
                <p class="quantity"><b>Quantity:</b> ${Number(itemQuantity.innerText)}</p>
                </div>
                <button class='checkout' onclick="checkout()">Checkout</button>`;
    cardBox.innerHTML = htmlString;
});