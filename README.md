# Demo app for Golden Shoe
React front end with a Node server
Bootstrapped with `create-react-app`

## How to use
To install, download the files and run `npm install`
Then run `npm run dev` to start the server and front end
Navigate to http://localhost:3000/ to access the demo

* From the home page (product grid), click on a product to view the details page
* Choose a variant and add it to the cart

You can view the cart at any time from the top navigation bar

## What are we seeing here?
This demo has been created to show the responsive options that are quickly implementable making the site easy to view on any screen size. 
Try resizing the browser window to see the changes live. 
The products have been loaded from a demo Shopify account. 
This app connects to the Shopify Storefront API to retrieve product and store information such as the product prices, images and details.
If an account is live, the purchases can be made using the Shopify system which has stock control built in as well as many other extremely useful and powerful features. 

## Notes on creating this demo
Help was attained from the following sources: 
* This tutorial: https://medium.com/weekly-webtips/create-and-deploy-your-first-react-web-app-with-a-node-js-backend-ec622e0328d7
* This was really helpful: https://github.com/calvchum/wholefoods-shopify/blob/master/src/components/SingleProduct.js
* Style template by Bootstrapious from https://bootstrapious.com/ (Obaju E-commerce template)
* Shopify's extensive, excellent documentation: https://shopify.dev/docs/storefront-api/getting-started
* Shopify's example store fronts: https://github.com/Shopify/storefront-api-examples 

## Prep for sending the build
To save the build files to github, remove `/build` from `client/.gitignore`
`npm run dev` to run
`npm run client:build` to build 
