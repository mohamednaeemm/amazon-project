# Amazon Clone

Welcome to the **Amazon Clone** project! This is a fully responsive e-commerce website created to practice and demonstrate modern web development skills, including **HTML**, **CSS**, **API integration**, **async/await** for asynchronous operations, and **Object-Oriented Programming (OOP)** principles. This clone mimics key functionalities of an e-commerce platform like Amazon.

## Technologies Used

- **HTML**: Structuring the content and layout of the webpages.
- **CSS**: Styling the pages for a polished, responsive design.
- **API Integration**: Utilized external APIs to fetch product data and simulate a backend.
- **JavaScript**: Handled client-side logic, user interaction, and dynamic content loading.
  - **Async/Await**: For handling asynchronous API calls and processing data in a non-blocking way.
  - **OOP (Object-Oriented Programming)**: Applied OOP principles to structure code in a modular, scalable manner.
  
## Project Features

### 1. **Homepage**
- A fully responsive homepage displaying featured products.
- Dynamic navigation bar and search functionality.
  
### 2. **Product Listing**
- Fetches product data from an external API and displays it dynamically.
- Each product is rendered on the page using JavaScript and CSS.
- Pagination or infinite scrolling for loading more products.

### 3. **Shopping Cart**
- Add products to the cart and adjust quantities.
- Stores cart data in localStorage to persist between sessions.
- Calculates totals dynamically and displays the number of items in the cart.

### 4. **Checkout Process**
- Form validation for user inputs like shipping and payment information.
- Simulates a checkout process with JavaScript.

### 5. **Asynchronous API Calls**
- Used `async/await` to handle API requests, ensuring the site remains responsive and interactive.
- Error handling and loading states for a smooth user experience.

### 6. **Responsive Design**
- Fully responsive across all devices (mobile, tablet, and desktop).
- Utilized media queries and flexible layouts to create a seamless shopping experience.

## Key Concepts & Functionality

- **API Integration**: Integrated with a product database API to dynamically fetch and display products.
- **Async/Await**: Used to handle asynchronous data fetching from APIs, ensuring smooth UI performance.
- **OOP**: Implemented classes and objects to structure the project. For example, `Product`, `Cart`, and `User` classes handle the core functionalities.
- **LocalStorage**: Used to persist user cart data even after page refresh or browser closure.
- **CSS Grid/Flexbox**: For responsive and flexible layouts.
- **DOM Manipulation**: Dynamic updates to the DOM for rendering products, managing the shopping cart, and handling user interaction.

## How to Run the Project

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/mohamednaeemm/amazon-project.git
   ```

2. Open the `index.html` file in any modern web browser to view and interact with the site.

3. Make sure you have an active internet connection as the project fetches data from external APIs.
