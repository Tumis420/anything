document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.age-tab');
    const products = document.querySelectorAll('.product');
  
    function filterProducts(age) {
      products.forEach(product => {
        product.style.display = product.getAttribute('data-age') === age ? 'block' : 'none';
      });
    }
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelector('.age-tab.active')?.classList.remove('active');
        tab.classList.add('active');
        const age = tab.getAttribute('data-age');
        filterProducts(age);
      });
    });
  
    // Hiển thị mặc định
    filterProducts('0-2');
  });
  