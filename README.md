# Front End Capstone

## Overview

Front End Capstone is an e-commerce site built with React and Express, following a business requirements document and an API provided by the project stakeholders. Working as a team of four engineers, the first phase of our development was becoming acclimated to utilizing project management and ticket management tools, including the Git Feature Branch Workflow and Trello. For the consistency of the codebase, we implemented [Airbnb Style Guide](https://github.com/airbnb/javascript). We adapted an agile scrum methodology and held daily standup to keep track of each member's progress on the sub-components of the product. The main strengths of this storefront are a cohesive user experience, clear and easy-to-read usability as well as its sleek and modern design. Our team challenged ourselves by learning new technologies, including styled-components and React Hooks, within a day of the sprint planning session.

## Table of Contents

  - [Tech Stack](#tech-stack)
  - [Features](#features)
    - [Product Overview](#product-overview)
    - [Related Products and Wishlist Carousels](#related-products-and-wishlist-carousels)
    - [Questions and Answers](#questions-and-answers)
    - [Ratings and Reviews](#ratings-and-reviews)
  - [Development](#development)
    - [Pre-Installation Requirements](#pre-installation-requirements)
    - [Environment Variables Management](#environment-variables-management)
    - [Installation](#installation)
  - [Deployment](#deployment)
  - [Contributors](#contributors)

## Tech Stack
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)
![Webpack](https://img.shields.io/badge/-Webpack-8DD6F9?logo=webpack&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/-Babel-F9DC3E?logo=babel&logoColor=white&style=for-the-badge)
![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=for-the-badge)
![Testing Library](https://img.shields.io/badge/-Testing_Library-E33332?logo=testing-library&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)
![Moment](https://img.shields.io/badge/-Moment-5A6AB1?logo=moment&logoColor=white&style=for-the-badge)
![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?logo=styled-components&logoColor=white&style=for-the-badge)

## Features

### Dark and Light Mode

<img src='./client/demo/FEC_ThemeToggle.gif' align="center"/>


***

### Product Overview

> This is the first widget displayed on the page and it gives various information about the product, including a description, price, set of features, and images.

**Style selector**
<img src='./client/demo/FEC_product-overview_style-selector.gif' align="center"/>

<details>
<summary>Read more about this feature</summary>

- Similar styles of a product can be selected via thumbnail images. A checkmark is displayed in order to indicate the currently selected style.
- Selecting a style will update the list of sizes available for that style, as well as the quantity for each of those sizes currently in stock.
- The "Add to Cart" button does not currently add to a cart on the site, but it will report an error when clicked without the proper size or quantity selected.
- Social media buttons are also included, without actual functionality at this time, but they demonstrate the appropiate layout that would be required for implementing the feature.

</details>

&nbsp;

**Image gallery**
<img src='./client/demo/FEC_product-overview_image-gallery.gif' align="center"/>

<details>
<summary>Read more about this feature</summary>
- The selected style will also be reflected in the image gallery to the left. The image gallery will have thumbnails that can be scrolled through on the left hand side. There are also arrows in the bottom right corner to navigate these images.
- Upon clicking the large image, the image gallery will overtake the product overview component. Then the image can be clicked again to enter a image zoom mode. The enlarged image will pan in accordance with the movement of the user's mouse in order to fully explore the image at 2.5 times its previous size.

</details>

&nbsp;

***

### Related Products and Wishlist Carousels

> The Related Products carousel displays a list of products related to the main product while the Wishlist carousel is unique to each user, displaying only the products that have been wishlisted by the user. This widget includes the following features:

**Scroll functionality and comparison table**
<img src='./client/demo/FEC_carousels_scroll_modal.gif' align="center"/>

<details>
<summary>Read more about this feature</summary>

 **Conditionally renderd scroll buttons**
  - The buttons appear when the number of products overflow past the page.
  - They deactivate when there are no more cards to scroll through.

**Feature comparison table**
  - On clicking the compare button in the product description, a modal containing a dynamically rendered comparison table is displayed.

</details>

&nbsp;

**Wishlist an item**
<img src='./client/demo/FEC_carousel_action-buttons.gif' align="center"/>

<details>
<summary>Read more about this feature</summary>

**Wishlist button**
  - The functionality to add a product to the Wishlist carousel is shared by the following buttons: the heart icon in each product card found in the related product carousel; the heart icon in the product overview section; and the '+ Add Current Outfit' button in the Wishlist carousel.
  - Upon clicking a wishlist button, the product is added to Wishlist carousel. Once the product has been added, it cannot be re-added.
  - Using the browser's localStorage, the data of wishlisted items persist even after a page refreshed.

**Remove button**
  - Upon clicking the 'X' icon in the Wishlist carousel, the product is removed from teh list. The user can re-add the product after it has been removed.

</details>

&nbsp;

***

### Questions and Answers

> This module wil allow asking and answering of questions for the selected product. The functionality contained within this module can be divided into five unique subsections:


<img src='./client/demo/FEC_QA.gif' align="center"/>

<details>
<summary>Read more about this feature</summary>

1. Search for a question
2. View questions
3. View answers
4. Ask a question
5. Answer a question
  - All question and answer data is obtained through HTTP requests to the API. If a different product is selected, it will trigger a request to the API and the module will re-render. After the data is received, questions and answers are sorted by their helpfulness, or number of helpful upvotes. Users are able to report both questions and answers to the website, as well as vote on a question or answer helpfulness up to a total of one time.
  - The search bar will only begin to filter questions after three characters are typed. It will also continuously resort both answers and questions by their helpfulness.
  - Adding a new question or answer will trigger a modal view with a form to be filled out and submitted. Upon submission, each field is validated based on a set of requirements provided in the business documents. Upon a successful submission, an post request will be sent to the API to persist the data.

</details>

&nbsp;

***

### Ratings and Reviews
> The Ratings & Reviews module is the bottommost on the product detail page. This component will allow customer to veiw and submit reviews for the selected product.

<img src='./client/demo/FEC_Ratings&Reviews.gif' align="center"/>

<details>
<summary>Read more about this feature</summary>

**Ratings**
- This component displays ratings about selected product dynamically.
- Star ratings are displayed to represent the various review scores of the product. Upon being clicked, they will filter the reviews featured to only include ratings with the specified score.

**Reviews**
- This component dynamically renders reviews about selected products, and reviews can be sorted by the drop-down button.
- The Write Review button opens a submmission form with validation for the client to rate products.
- Reviews can be sorted in several ways, including a drop down bar for various metrics (date, helpfulness, and relevancy).

</details>

&nbsp;

## Development

### Pre-Installation Requirements

```
Node v16.13.1
NPM v8.1.2
```

### Environment Variables Management

This project uses [dotenv](https://github.com/motdotla/dotenv).

The environment variables necessary to run the application can be found in the `.sample-env` file. Modify the variable values in this file in a new `.env` file with a valid GitHub Token and PORT number.

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

4. To automatically compile changes into the bundle file:
```
npm run react-dev
```

## Contributors

* [Colin Fitzhenry](https://github.com/cgf5033) - Questions & Answers
* [Haley Jung](https://github.com/haleyjung) - Related Products and Wishlist Carousels & Header
* [Jordan Moore](https://github.com/jordo-mordo) - Product Information
* [Yilin Liu](https://github.com/yiiiiilin) - Ratings & Reviews
