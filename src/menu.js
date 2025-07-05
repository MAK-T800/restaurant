export default function loadMenu() {
    const content = document.getElementById('content');
    
    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    
    // Create and add headline
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    menuContainer.appendChild(headline);
    
    // Create menu grid
    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';
    
    // Menu data
    const menuData = {
        'Appetizers': [
            { name: 'Bruschetta Trio', price: '$12' },
            { name: 'Calamari Fritti', price: '$14' },
            { name: 'Antipasto Platter', price: '$18' },
            { name: 'Stuffed Mushrooms', price: '$11' }
        ],
        'Main Courses': [
            { name: 'Grilled Salmon', price: '$26' },
            { name: 'Ribeye Steak', price: '$32' },
            { name: 'Chicken Parmigiana', price: '$22' },
            { name: 'Vegetarian Pasta', price: '$18' },
            { name: 'Seafood Risotto', price: '$24' }
        ],
        'Desserts': [
            { name: 'Tiramisu', price: '$8' },
            { name: 'Chocolate Lava Cake', price: '$9' },
            { name: 'Panna Cotta', price: '$7' },
            { name: 'Gelato Selection', price: '$6' }
        ]
    };
    
    // Create menu categories
    Object.entries(menuData).forEach(([category, items]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            const itemName = document.createElement('span');
            itemName.className = 'menu-item-name';
            itemName.textContent = item.name;
            
            const itemPrice = document.createElement('span');
            itemPrice.className = 'menu-item-price';
            itemPrice.textContent = item.price;
            
            menuItem.appendChild(itemName);
            menuItem.appendChild(itemPrice);
            categoryDiv.appendChild(menuItem);
        });
        
        menuGrid.appendChild(categoryDiv);
    });
    
    menuContainer.appendChild(menuGrid);
    content.appendChild(menuContainer);
}
