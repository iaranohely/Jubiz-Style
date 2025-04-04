document.addEventListener('DOMContentLoaded', () => {
    const favorites = [];
    const cart = [];

    document.querySelectorAll('.favorite').forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.parentElement.getAttribute('data-name');
            if (!favorites.includes(productName)) {
                favorites.push(productName);
                alert(`${productName} ad