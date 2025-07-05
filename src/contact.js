export default function loadContact() {
    const content = document.getElementById('content');
    
    // Create contact container
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    
    // Create and add headline
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    contactContainer.appendChild(headline);
    
    // Create contact info grid
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    
    // Contact data
    const contactData = [
        {
            title: 'Location',
            content: '123 Gourmet Street<br>Foodie District<br>New York, NY 10001'
        },
        {
            title: 'Phone & Email',
            content: 'Phone: (555) 123-4567<br>Email: info@bellavista.com<br>Reservations: reservations@bellavista.com'
        },
        {
            title: 'Hours',
            content: 'Monday - Thursday: 5:00 PM - 10:00 PM<br>Friday - Saturday: 5:00 PM - 11:00 PM<br>Sunday: 4:00 PM - 9:00 PM'
        }
    ];
    
    // Create contact cards
    contactData.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = contact.title;
        
        const cardContent = document.createElement('p');
        cardContent.innerHTML = contact.content;
        
        contactCard.appendChild(cardTitle);
        contactCard.appendChild(cardContent);
        contactInfo.appendChild(contactCard);
    });
    
    contactContainer.appendChild(contactInfo);
    content.appendChild(contactContainer);
}
