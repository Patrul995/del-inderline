
const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

const productsList = document.getElementById('products-list');

function renderProducts() {
  products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.textContent = product;
    productItem.classList.add('product-item');
    
    if (index === 0) {
      productItem.addEventListener('click', () => {

        this.classList.toggle('crossed');
        productItem.removeEventListener('click', arguments.callee);
      });
    }
    productsList.appendChild(productItem);
  });
}

renderProducts();
