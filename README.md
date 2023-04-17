# Global News App

## Description

The Global News App is a web application that allows users to browse news from around the world. Users can filter news by categories and switch between light and dark modes. The app also includes a search feature, which enables users to search for specific news articles.

## Live Link

[https://jeff-daily-global-news-app.vercel.app/](https://jeff-daily-global-news-app.vercel.app/)

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Create a `.env` file in the root directory of the project and add the following environment variables:

````
MEDIASATCK_API_KEY=insert_your_api_key_here
STEPZEN_API_KEY=insert_your_api_key_here
````

Note: You can obtain your MediaStack and StepZen API keys by signing up for an account on their respective websites.

5. Run `npm run dev` to start the development server.
6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Features

### Filter News by Categories

<img width="700" alt="cityspacehome" src="./app/assets/demo1.gif">

### Switch Between Light and Dark Modes

<img width="700" alt="cityspacehome" src="./app/assets/demo2.gif">

### Search for News Articles

<img width="700" alt="cityspacehome" src="./app/assets/demo3.gif">

## Technologies Used

- React
- Next.js
- TailwindCSS
- TypeScript
- Stepzen(GraphQL)
- Mediastack API