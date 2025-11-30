const products = [
    {
        id: 1,
        title: 'Book',
        price: 90,
        image: 'book.webp'
    },
    {
        id: 2,
        title: 'Shirt',
        price: 1999,
        image: 'shirt.webp'
    },
    {
        id: 3,
        title: 'SmartWatch',
        price: 999,
        image: 'watch.webp'
    },
    {
        id: 4,
        title: 'Lap',
        price: 999,
        image: 'lap.jpg'
    },
    {
        id: 5,
        title: 'iphone-16',
        price: 65999,
        image: 'iPhone-16.jpg'
    },
    {
        id: 6,
        title: 'Trimmer',
        price: 999,
        image: 'trimmer.webp'
    },
    {
        id: 7,
        title: 'Clean',
        price: 999,
        image: 'clean.jpg'
    },
    {
        id: 8,
        title: 'Shoe',
        price: 999,
        image: 'shoes.webp'
    },
    {
        id: 9,
        title: 'Kitchen-items',
        price: 999,
        image: 'Kitchen.jpg'
    },

]

const productContainer = document.querySelector(".products");

function renderProducts() {
  productContainer.innerHTML = ""; 

  products.forEach((item) => {
    const card = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
        <div class="card">
          <img src="assets/images/${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Price: ₹${item.price}</p>
            <button class="btn btn-dark w-100">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", card);
  });
}

renderProducts();
