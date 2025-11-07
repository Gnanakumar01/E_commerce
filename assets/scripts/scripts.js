const products = [
    {
        id: 1,
        title: 'Book',
        price: 90,
        img_src: 'book.webp'
    },
    {
        id: 2,
        title: 'Shirt',
        price: 1999,
        img_src: 'shirt.webp'
    },
    {
        id: 3,
        title: 'SmartWatch',
        price: 999,
        img_src: 'watch.webp'
    },
       {
        id: 4,
        title: 'Lap',
        price: 999,
        img_src: 'lap.jpg'
    },
       {
        id: 5,
        title: 'iphone-16',
        price: 65999,
        img_src: 'iPhone-16.jpg'
    },
       {
        id: 6,
        title: 'Trimmer',
        price: 999,
        img_src: 'trimmer.webp'
    },
       {
        id: 7,
        title: 'Clean',
        price: 999,
        img_src: 'clean.jpg'
    },
       {
        id: 8,
        title: 'Shoe',
        price: 999,
        img_src: 'shoes.webp'
    },
       {
        id: 9,
        title: 'Kitchen-items',
        price: 999,
        img_src: 'Kitchen.jpg'
    },

]

const products_container = document.querySelector('.products');

function renderCard(product) {

    let card_design = `
    <div class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-evenly " id="product-${product.id}">
        <img src="assets/images/${product.img_src}" class="card-img-top w-100" alt="...">
            <div class="card-body ">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">Rs.${product.price}</p>
                <button class="btn btn-primary" id="add-to-cart-${product.id}">Add to Cart</button>
            </div>
    </div>`;
return card_design;
}

function renderProducts(products){
    let result =""
    for (product of products){
        result += renderCard(product);
    }
    products_container.innerHTML = result;
}

renderProducts(products);