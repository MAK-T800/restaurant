export default function loadHome() {
    const content = document.getElementById('content');
    
    // Create home container
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';
    
    // Create and add headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Bella Vista Restaurant';
    
    // Create and add restaurant image
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    image.alt = 'Beautiful restaurant interior';
    
    // Create and add description
    const description = document.createElement('p');
    description.textContent = 'Experience culinary excellence in the heart of the city. Our restaurant combines traditional recipes with modern techniques to create unforgettable dining experiences. From our carefully curated menu to our warm, welcoming atmosphere, every detail is designed to make your visit special.';
    
    // Append all elements to container
    homeContainer.appendChild(headline);
    homeContainer.appendChild(image);
    homeContainer.appendChild(description);
    
    // Add container to content
    content.appendChild(homeContainer);
}
