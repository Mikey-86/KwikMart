# KwikMart
Andile solutions ecommerce project

-------------------------------------------------------
## About the app and what I learnt

I have used the MERN stack to develop my application becasue I wanted to challenge myself as I have the least expeience with JS and React and wanted to learn as much as I could about it while making this. 
While the app is not complete, I tried to focus more on completing what I could properly instead of adding too many half done items, as I ran out of time. 
Overall I enjoyed working on this as I went in blind into developing MERN a application and learnt a lot.

-------------------------------------------------------
## Running the app

Requirements:
- Create a mongodb local database. This guide can be used until "Connect your application": https://www.mongodb.com/docs/drivers/node/v4.1/quick-start/ 
The connection string will be needed.

#### Steps:
1. Clone both (frontend and backend) projects into same solution file.
2. Creat 2 terminals and cd into "frontend/kwikmart" for the frontend in one terminal and "API" for backend
3. "npm install" must be run for both terminals
4. create a file called ".env" in the root directory of the backend to add Mongodb connection string using: "DATABASE_URL = "mongodb+srv://<username>:<password>@cluster0.jllnnug.mongodb.net/"
5. run "npm start" for frontend and backend. Database will seed with 15 random entries for product.

-------------------------------------------------------
## Challenges with development and what I learnt

- React took the most time and is where I lost the most, as I had the least experience with it and had to read up on it before adding features. I did learn a fair bit about it but sill have a lot to learn!
- I struggled a little bit with Mongoose and adding endpoints the right way and then with the seeding of data also being a challenge.
