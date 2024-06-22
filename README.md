# DJS09: Couch Surfing 

This project is a simple web application for displaying property listings and reviews. The application leverages TypeScript for type safety and improved development experience.

# Project Structure
index.css: The main CSS file for styling the application.
utils.ts: Contains utility functions used throughout the application.
enums.ts: Defines enumerations for user permissions and loyalty statuses.
types.ts: Defines types for properties and countries.
interfaces.ts: Contains the interfaces for reviews.
index.ts: The main TypeScript file that integrates all parts of the application and manipulates the DOM.
Features
Display Properties:

# The application displays a list of properties with their images, titles, and prices.
Only available properties are displayed.
User Information:

 Displays user information and greets returning users.
Reviews:

Shows the total number of reviews and highlights the most recent review.
Allows users to view the top two reviews by clicking a button.
Main Property:

Highlights a main property with an image and title.
Current Location:

Displays the user's current location, time, and temperature in the footer.

# Installation

Clone the repository:
bash
Copy code
git clone <repository-url>
Install dependencies:
bash
Copy code
npm install
Usage
Start the development server:
bash
Copy code
Run the command npm run serve
Open the application in your browser at http://localhost:3000.

# Utility Functions
showReviewTotal: Displays the total number of reviews and highlights a specific review.
populateUser: Populates the user information and displays a greeting.
showDetails: Shows property details based on user permissions.
getTopTwoReviews: Retrieves the top two reviews from the list.
Enumerations
Permissions: Defines user permissions such as ADMIN.
LoyaltyUser: Defines loyalty statuses such as GOLD_USER, SILVER_USER, and BRONZE_USER.
Types
Price: Defines the price of properties.
Country: Defines the country type.
Interfaces
Review: Defines the structure of a review object.
Classes
MainProperty: Represents the main property displayed in the application.
