## 06 Server API Weather Challenge

* [Github Repository](https://github.com/KrispyKhang/API-Weather-App)
* [Deployed Github](https://krispykhang.github.io/API-Weather-App/)



## Task
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. The challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Summary
* HTML, CSS, & Javascript were used to create the Server weather app.
* This module 6 assignment uses a server API created on the internet that is accessible for builders.
* Generated an API key to use for the Open Weather API
* Used 4 api urls to obtain data to build. ie: city, longitude, latitude/
* Made conversions for API that uses MPS (Meters per second) instead of MPH and conversion from celsius to farenheight.
* See screenshots below for the finished product.

![](./Assets/Walkthrough.gif)

## Features
 * When types in a city with our OPEN Weather API. They are presented with the temperature(F), the wind speed (MPH), and the humidity %
 * User can also search the city based on their current location.
 * As User searches the city, it is saved on the localStorage. 
 * The search history is presented below the current location button where user can view all the past search histories. 
 * User can also see the clear history button below the past searched histories.
 * If the user types in an incorrect city, there is an alert pop up that says "no coordinates found for (city input)"
* User also has the ability to press enter on their keyboard and it would enter the value without them having to click on the button. 
 

