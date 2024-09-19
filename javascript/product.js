document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  const cartContainer = document.querySelector('#cart-container');
  const cart = document.querySelector('.cart');
  const logo = document.querySelector('.logo');
  const btnAbove = document.querySelector('#above35');
  const btnBelow = document.querySelector('#below35');
  const cartItems = document.querySelector('#cart-items');
  const cartList = document.querySelector('#cart-list'); // Assuming a container for the cart list
  
  // Cart array to hold the items added to cart
  let cartArray = [];
  
  // Fetch events from server
  fetch('http://localhost:3000/events')
    .then(res => res.json())
    .then(data => {
      // Function to render items in the container
      function renderItems(items) {
        // Clear previous items
        container.innerHTML = '';

        items.map(item => {
          const productHTML = `
          <div class='products'>
            <img id='image' src=${item.imageUrl} />
            <p>${item.title}</p>
            <p>${item.location}</p>
            <p>${item.company}</p>
            <p>$${item.price}</p>
            <button class="btnBuy" data-id="${item.id}">Buy now</button>
          </div>
          `;
          container.innerHTML += productHTML;
        });

        // Add event listeners for all the buy buttons
        const buyButtons = document.querySelectorAll('.btnBuy');
        buyButtons.forEach(button => {
          button.addEventListener('click', (event) => {
            const itemId = event.target.getAttribute('data-id');
            // Find the clicked item based on the ID
            const selectedItem = data.find(item => item.id == itemId);

            // Add the item to the cart array
            cartArray.push(selectedItem);

            // Update cart items count
            cartItems.innerHTML = cartArray.length;

            // Render the cart contents
            renderCartItems();
          });
        });
      }

      function renderCartItems() {
        // Clear previous cart items
        cartList.innerHTML = '';
        cartArray.map(item => {
          const cartItemHTML = `
            <div class='cart-item'>
             <img id='image' src=${item.imageUrl} />
             <p>${item.title}</p>
            <p>${item.location}</p>
            <p>${item.company}</p>
            <p>$${item.price}</p>
            </div>
          `;
         
          

          cartList.innerHTML += cartItemHTML;
        });
      }

      // Initially load all items
      renderItems(data);

      // Filter functions
      function filterItemsAbove() {
        const filteredItems = data.filter(item => item.price >= 50);
        renderItems(filteredItems);
      }

      function filterItemsBelow() {
        const filteredItems = data.filter(item => item.price < 50);
        renderItems(filteredItems);
      }

      // Button event listeners for filtering
      btnAbove.addEventListener('click', () => {
        filterItemsAbove();
      });

      btnBelow.addEventListener('click', () => {
        filterItemsBelow();
      });

      // Toggle between cartContainer and container views
      logo.addEventListener('click', () => {
        cartContainer.style.display = 'none';  // Hides the cart
        container.style.display = 'block';     // Shows the container (use 'block' or 'flex' depending on your layout)
      });

      cart.addEventListener('click', () => {
        cartContainer.style.display = 'block';  // Shows the cart
        container.style.display = 'none';       // Hides the container
      });
    });
});
