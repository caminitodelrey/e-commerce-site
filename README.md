# Front End Capstone

## Overview

The goal of the capstone was to build a frontend ecommerce site based on a business requirements document over the course of three weeks. Teams are expected to design the project based on a low fidelity wireframe and pass data from an API provided by the project stakeholders.

The first phase of our development was becoming acclimated to utilizing project management and ticket management tools, including the Git Feature Branch Workflow, Trello, and Google Sheets. For the consistency of the codebase, we implemented [Airbnb Style Guide](https://github.com/airbnb/javascript). We adapted an agile scrum methodology and held daily standups to keep track of the team's progress on the sub-components of each widget. The main strengths of this storefront are clear and easy to read usability, a cohesive user experience, as well as its sleek and modern design. Our team challenged ourselves by learning new technologies, including styled-components and React Hooks, within a day of the sprint planning session.

## Table of Contents
  
  - [Tech Specs](#tech-specs)
  - [Features](#features)
    - [Product Overview](#product-overview)
    - [Related Products and Wishlist Carousels](#related-products-and-wishlist-carousels)   
    - [Questions and Answers](#questions-and-answers)   
    - [Ratings and Reviews](#ratings-and-reviews)
  - [Development](#development)
  - [Deployment](#deployment)
  - [Contributors](#contributors)

## Tech Specs
<p align="left"> 
  <a href="https://reactjs.org/" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>     </a>
  <a href="https://nodejs.org" target="_blank"> 
    <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="nodejs" width="40" height="40"/> 
  </a>
  <a href="https://expressjs.com" target="_blank"> 
    <img src="https://cdn.worldvectorlogo.com/logos/express-109.svg" alt="express" width="60" height="40"/> 
  </a>
  <a href="https://webpack.js.org" target="_blank"> 
    <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="webpack" width="40" height="40"/> 
  </a> 
  <a href="https://babeljs.io/" target="_blank"> 
    <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" alt="babel" width="60" height="40"/> 
  </a>
  <a href="https://jestjs.io/" target="_blank"> 
    <img src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png" alt="jest" width="40" height="40"/> 
  </a>
  <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank"> 
    <img src="https://testing-library.com/img/octopus-64x64.png" alt="react-testing-library" width="40" height="40"/> 
  </a>
  <a href="https://eslint.org/" target="_blank"> 
    <img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" alt="eslint" width="40" height="40"/> 
  </a>
  <a href="https://momentjs.com/" target="_blank"> 
    <img src="https://cdn.worldvectorlogo.com/logos/momentjs.svg" alt="moment" width="40" height="40"/> 
  </a>
  <a href="https://styled-components.com/" target="_blank"> 
    <img src="https://cdn.worldvectorlogo.com/logos/styled-components-1.svg" alt="styled-components" width="40" height="40"/> 
  </a> 
</p>

## Features
**Theme Toggle: Dark and Light Modes**

https://user-images.githubusercontent.com/73789849/163725147-ca1a76ee-61fc-4617-9ba5-4fc94bc08a9b.mov

As the application is meant to simulate the specified aspects of a professional ecommerce site according to the business requirement document, certain features such as adding a product to cart have been excluded on purpose. The experience is simulated to a degree to provide the user with plenty of detailed and complex interactions. We have developed the following features with some creative liberties to ensure a smooth and pleasant user experience.

### Product Overview

This is the first widget displayed on the page and it gives various information about the product, including a description, price, set of features, and images.


https://user-images.githubusercontent.com/73789849/163725830-33a55f6c-bcf6-432e-b7e7-2f548b79915c.mov


**Style selector**
- Similar styles of a product can be selected via thumbnail images. A checkmark is displayed in order to indicate the currently selected style.
- Selecting a style will update the list of sizes available for that style, as well as the quantity for each of those sizes currently in stock.
- The "Add to Cart" button does not currently add to a cart on the site, but it will report an error when clicked without the proper size or quantity selected.
- Social media buttons are also included, without actual functionality at this time, but they demonstrate the appropiate layout that would be required for implementing the feature.


https://user-images.githubusercontent.com/73789849/163726127-e77a17f0-3aea-46ba-9ed9-00fa2af91483.mov


**Image gallery**
- The selected style will also be reflected in the image gallery to the left. The image gallery will have thumbnails that can be scrolled through on the left hand side. There are also arrows in the bottom right corner to navigate these images.
- Upon clicking the large image, the image gallery will overtake the product overview component. Then the image can be clicked again to enter a image zoom mode. The enlarged image will pan in accordance with the movement of the user's mouse in order to fully explore the image at 2.5 times its previous size.

***

### Related Products and Wishlist Carousels

The Related Products carousel displays a list of products related to the main product while the Wishlist carousel is unique to each user, displaying only the products that have been wishlisted by the user. This widget includes the following features:


https://user-images.githubusercontent.com/73789849/163726432-ee468c63-ba13-466e-a153-b668616c6014.mov


**Conditionally renderd scroll buttons**
  - The buttons appear when the number of products overflow past the page.
  - They deactivate when there are no more cards to scroll through.

**Feature comparison table**
  - On clicking the compare button in the product description, a modal containing a dynamically rendered comparison table is displayed.


https://user-images.githubusercontent.com/73789849/163726962-ba5a0bd5-b5b0-4d92-afb1-08204935539a.mov


**Wishlist button**
  - The functionality to add a product to the Wishlist carousel is shared by the following buttons: the heart icon in each product card found in the related product carousel; the heart icon in the product overview section; and the '+ Add Current Outfit' button in the Wishlist carousel.
  - Upon clicking a wishlist button, the product is added to Wishlist carousel. Once the product has been added, it cannot be re-added.
  - Using the browser's localStorage, the data of wishlisted items persist even after a page refreshed.

**Remove button**
  - Upon clicking the 'X' icon in the Wishlist carousel, the product is removed from teh list. The user can re-add the product after it has been removed.

***

### Questions and Answers

This module wil allow asking and answering of questions for the selected product. The functionality contained within this module can be divided into five unique subsections:


https://user-images.githubusercontent.com/73789849/163727132-d875cd1e-7a64-41f6-a8ad-4e5ca0c8a966.mov


1. Search for a question
2. View questions
3. View answers
4. Ask a question
5. Answer a question
  - All question and answer data is obtained through HTTP requests to the API. If a different product is selected, it will trigger a request to the API and the module will re-render. After the data is received, questions and answers are sorted by their helpfulness, or number of helpful upvotes. Users are able to report both questions and answers to the website, as well as vote on a question or answer helpfulness up to a total of one time.
  - The search bar will only begin to filter questions after three characters are typed. It will also continuously resort both answers and questions by their helpfulness.
  - Adding a new question or answer will trigger a modal view with a form to be filled out and submitted. Upon submission, each field is validated based on a set of requirements provided in the business documents. Upon a successful submission, an post request will be sent to the API to persist the data.

***

### Ratings and Reviews

https://user-images.githubusercontent.com/73789849/163725061-6947bddd-e889-4f7e-b4d3-88e955319bcb.mov


The Ratings & Reviews module is the bottommost on the product detail page. This component will allow customer to veiw and submit reviews for the selected product.

**Ratings**
- This component displays ratings about selected product dynamically.
- Star ratings are displayed to represent the various review scores of the product. Upon being clicked, they will filter the reviews featured to only include ratings with the specified score.

**Reviews**
- This component dynamically renders reviews about selected products, and reviews can be sorted by the drop-down button.
- The Write Review button opens a submmission form with validation for the client to rate products.
- Reviews can be sorted in several ways, including a drop down bar for various metrics (date, helpfulness, and relevancy).

## Development

### Pre-Installation Requirements

```
Node v16.13.1
NPM v8.1.2
```

### Installation

From the root directory, run the following commands in your terminal.

1. Install packages:

```
npm install
```

2. To initialize Webpack & Bundle:
```
npm run build
```

3. To start the server:

```
npm run server-dev
```

4. If changes are made to the site, once can run this command to have changes automatically compiled into the bundle file:
```
npm run react-dev
```



## Deployment

The application was deployed with both Amazon EC2 and Heroku. The site is currently live with Heroku only, and can be found below:

<a href="https://caminito-ecommerce.herokuapp.com/"><img alt="Powered by Heroku" title="Powered by Heroku" src="https://img.shields.io/badge/-Powered%20by%20Heroku-6567a5?style=for-the-badge&logo=heroku&logoColor=white"/></a>

## Contributors
Hack Reactor RFE2202 | Team: Caminito del Rey

* [Colin Fitzhenry](https://github.com/cgf5033) - Questions & Answers
* [Haley Jung](https://github.com/haleyjung) - Related Products
* [Jordan Moore](https://github.com/jordo-mordo) - Product Information
* [Yilin Liu](https://github.com/yiiiiilin) - Ratings & Reviews
