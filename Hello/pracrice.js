document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const pickleType = document.getElementById('pickleType').value;
    const quantity = document.getElementById('quantity').value;
    const cartDiv = document.getElementById('cart');

    if (pickleType && quantity) {
        const cartItem = document.createElement('p');
        cartItem.textContent = ${quantity} x ${pickleType};
        cartDiv.appendChild(cartItem);
    }
});

document.getElementById('checkout').addEventListener('click', function() {
    alert('