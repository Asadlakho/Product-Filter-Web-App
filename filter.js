    const products = [
      { name: "iPhone", price: 250000, category: "electronics" },
      { name: "HP Laptop", price: 180000, category: "electronics" },
      { name: "Headphones", price: 7000, category: "electronics" },
      { name: "T-Shirt", price: 1500, category: "clothes" },
      { name: "Jeans", price: 2800, category: "clothes" },
      { name: "Jacket", price: 4500, category: "clothes" },
      { name: "JavaScript Book", price: 1200, category: "books" },
      { name: "Asad Book", price: 1500, category: "books" },
    ];

    function getIcon(category) {
      switch(category) {
        case "electronics": return '<i class="fas fa-tv text-orange-500 text-6xl mb-4"></i>';
        case "clothes": return '<i class="fas fa-tshirt text-green-500 text-6xl mb-4"></i>';
        case "books": return '<i class="fas fa-book text-blue-500 text-6xl mb-4"></i>';
        default: return '<i class="fas fa-box text-gray-500 text-6xl mb-4"></i>';
      }
    }

    function getCategoryBadge(category) {
      switch(category) {
        case "electronics": return '<span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Electronics</span>';
        case "clothes": return '<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Clothes</span>';
        case "books": return '<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Books</span>';
        default: return '<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">Other</span>';
      }
    }

    function showItems(items) {
      const out = items.map(p => `
        <div class="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition duration-300">
          ${getIcon(p.category)}
          <p class="font-bold text-xl mb-2">${p.name}</p>
          <p class="text-gray-700 font-medium mb-2">Rs. ${p.price}</p>
          <div class="mb-2">${getCategoryBadge(p.category)}</div>
        </div>
      `).join('');
      document.getElementById("output").innerHTML = out;
    }

    function filterItems() {
      const search = document.getElementById("search").value.toLowerCase();
      const category = document.getElementById("category").value;
      const sort = document.getElementById("sort").value;

      let filtered = products.filter(p =>
        p.name.toLowerCase().includes(search) &&
        (category === "" || p.category === category)
      );

      if(sort === "low") filtered.sort((a,b) => a.price - b.price);
      else if(sort === "high") filtered.sort((a,b) => b.price - a.price);

      showItems(filtered);
    }

    document.getElementById("search").addEventListener("input", filterItems);
    document.getElementById("category").addEventListener("change", filterItems);
    document.getElementById("sort").addEventListener("change", filterItems);

    showItems(products);