document.addEventListener('DOMContentLoaded', () => {
  const foodData = [
    {
      name: 'Lasagna',
      price: { full: 35, half: 20 },
      quantity: 1,
      text: 'Lasagna is a classic Italian dish made with layers of pasta, rich tomato sauce, ground meat, creamy béchamel sauce, and melted cheese. Baked to perfection, it delivers a deliciously satisfying and comforting experience in every bite.',
      image: '/images/lasagna.png',
      type: 'snacks',
    },
    {
      name: 'TACOS',
      price: { full: 22, half: 15 },
      quantity: 1,
      text: 'These authentic Mexican tacos are filled with perfectly seasoned beef, fresh lettuce, juicy tomatoes, shredded cheese, and a tangy homemade sauce, all wrapped in a warm, soft tortilla. A perfect choice for a flavorful and satisfying meal.',
      image: '/images/tacos.png',
      type: 'snacks',
    },
    {
      name: 'Spaghetti',
      price: { full: 25, half: 18 },
      quantity: 1,
      text: 'Spaghetti is a beloved Italian dish made with perfectly cooked pasta tossed in a rich and savory tomato sauce. Served with a generous sprinkle of parmesan cheese and fresh basil, it offers a mouthwatering combination of flavors and textures.',
      image: '/images/spaghetti.png',
      type: 'snacks',
    },
    {
      name: 'Fries',
      price: { full: 10, half: 6 },
      quantity: 1,
      text: 'Golden and crispy French fries, lightly salted and served with a delicious dipping sauce. These perfectly fried potatoes are crunchy on the outside and soft on the inside, making them the ultimate side dish or snack.',
      image: '/images/fries.png',
      type: 'snacks',
    },

    {
      name: 'CHOCOLATE',
      price: { full: 10, half: 6 },
      quantity: 1,
      text: 'Indulge in the richness of smooth dark chocolate, made from the finest cocoa beans. This sweet treat melts in your mouth, delivering a deep and satisfying chocolate flavor that is perfect for any chocolate lover.',
      image: '/images/chocolate.avif',
      type: 'sweets',
    },
    {
      name: 'ICE CREAM',
      price: { full: 8, half: 5 },
      quantity: 1,
      text: 'Enjoy a scoop of creamy vanilla ice cream, drizzled with rich chocolate syrup and topped with crunchy nuts. This frozen dessert is a perfect way to cool down and satisfy your sweet tooth.',
      image: '/images/icecream.png',
      type: 'sweets',
    },
    {
      name: 'CAKE',
      price: { full: 18, half: 12 },
      quantity: 1,
      text: 'A deliciously moist and fluffy cake, layered with smooth and creamy frosting. This freshly baked treat is perfect for celebrations or simply indulging in a sweet moment of happiness.',
      image: '/images/cake.png',
      type: 'sweets',
    },
    {
      name: 'DONUT',
      price: { full: 12, half: 8 },
      quantity: 1,
      text: 'A soft and fluffy glazed donut, freshly baked and topped with colorful sprinkles. Each bite delivers a perfect balance of sweetness and light, airy texture, making it a delightful treat for any time of the day.',
      image: '/images/donut.png',
      type: 'sweets',
    },

    {
      name: 'COFFEE',
      price: { full: 8, half: 5 },
      quantity: 1,
      text: 'A freshly brewed cup of rich and aromatic coffee, made from premium coffee beans. Its bold and deep flavor provides the perfect energy boost to start your day or keep you going.',
      image: '/images/coffee.png',
      type: 'drinks',
    },
    {
      name: 'MILKSHAKE',
      price: { full: 15, half: 10 },
      quantity: 1,
      text: 'A thick and creamy chocolate milkshake, blended to perfection and topped with whipped cream. This refreshing drink is a sweet and satisfying delight with every sip.',
      image: '/images/milkshake.png',
      type: 'drinks',
    },
    {
      name: 'TEA',
      price: { full: 5, half: 3 },
      quantity: 1,
      text: 'A soothing and aromatic cup of green tea, infused with natural antioxidants. Its refreshing taste and calming effect make it a perfect choice for relaxation.',
      image: '/images/tea.png',
      type: 'drinks',
    },
    {
      name: 'SODA',
      price: { full: 8, half: 5 },
      quantity: 1,
      text: 'A chilled and refreshing soda, served with ice for a crisp and fizzy drink experience. A great thirst-quencher on a hot day!',
      image: '/images/soda.png',
      type: 'drinks',
    },
    {
      name: 'Biryani',
      price: { full: 20, half: 14 },
      quantity: 1,
      text: 'A flavorful and aromatic dish made with fragrant basmati rice, tender marinated meat, and a blend of traditional spices. This rich and hearty meal is a must-try for lovers of authentic Indian cuisine.',
      image: '/images/biryani.png',
      type: 'food',
    },
    {
      name: 'RAITA',
      price: { full: 10, half: 6 },
      quantity: 1,
      text: 'A cool and refreshing yogurt-based side dish, mixed with cucumber, mint, and traditional spices. It perfectly complements spicy meals and adds a creamy, tangy touch.',
      image: '/images/raita.png',
      type: 'food',
    },
    {
      name: 'TOMATO SOUP',
      price: { full: 15, half: 10 },
      quantity: 1,
      text: 'A warm and comforting bowl of tomato soup, made from ripe, juicy tomatoes and seasoned with fresh herbs. Served hot, it’s a perfect starter or light meal.',
      image: '/images/tamatosoup.png',
      type: 'food',
    },
    {
      name: 'Paneer',
      price: { full: 18, half: 12 },
      quantity: 1,
      text: 'A rich and creamy paneer dish, cooked in a blend of Indian spices and served with a side of warm, fluffy naan. A perfect meal for those who love Indian cuisine.',
      image: '/images/paneer.png',
      type: 'food',
    },
  ]

  const menuSection = document.querySelector('.menu-section .row')
  const searchInput = document.querySelector('#search-input')
  const searchButton = document.querySelector('#search-button')
  const categoryButtons = document.querySelectorAll('.category')

  let currentCategory = 'snacks' // Default category

  function displayItems(searchQuery = '', category = currentCategory) {
    menuSection.innerHTML = ''

    let filteredItems

    if (searchQuery) {
      // If searching, show only matching items from all categories
      filteredItems = foodData.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    } else {
      // If not searching, show only selected category items
      filteredItems = foodData.filter((item) => item.type === category)
    }

    if (filteredItems.length === 0) {
      menuSection.innerHTML = '<p class="text-center">No items found.</p>'
      return
    }

    filteredItems.forEach((item) => {
      const card = document.createElement('div')
      card.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-12', 'mb-3')
      card.innerHTML = `
            <div class="card items-center" style="width:17rem">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${item.name}</h5>
                    <div class="d-flex justify-content-between">
                        <button class="btn price-btn">$${item.price.full}</button>
                        <a href="details.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(
        item.image
      )}&text=${encodeURIComponent(item.text)}&priceFull=${item.price.full}&priceHalf=${
        item.price.half
      }" class="btn btn-details">Details</a>
                    </div>
                </div>
            </div>
        `
      menuSection.appendChild(card)
    })
  }

  // Handle search button click
  searchButton.addEventListener('click', () => {
    let query = searchInput.value.trim()
    displayItems(query) // Show searched item
  })

  // Handle search clear event
  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
      displayItems('', currentCategory) // If empty, show selected category
    }
  })

  // Handle category button click
  categoryButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      currentCategory = event.target.dataset.category // Get category from button
      displayItems('', currentCategory) // Show filtered items
    })
  })
  // Show snacks by default on page load
  displayItems('', 'snacks')
})

//
document.addEventListener('DOMContentLoaded', () => {
  function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    const cartBadge = document.getElementById('cart-badge')

    // Check if checkout was completed
    if (localStorage.getItem('checkoutComplete') === 'true') {
      localStorage.removeItem('checkoutComplete') // Remove flag
      localStorage.removeItem('cart') // Clear cart
      cart = [] // Reset cart array
    }

    // Update cart badge visibility
    if (cart.length === 0) {
      cartBadge.style.display = 'none' // Hide badge if cart is empty
    } else {
      cartBadge.style.display = 'inline-block' // Show badge if cart has items
      cartBadge.textContent = cart.length
    }
  }

  // Call function to update cart badge on load
  updateCartBadge()
})

// checkout after bedge not show
