# My Awesome Project
This project is using an API where users can select a beer and learn more about the brewing of the beer.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript (JQuery), API

This project was built with a select tag, a button tag, and a section that holds a heading tag, two paragraph tags, and a unorder list tag to display my append lis.

This project starts with the user using the select tag to choose a beer he/she would like to know more about. Once the user clicks on the button, our event listener, this activates our api and pulls the value from our select tag based on the corresponding option the user selected. This value is used as a parameter and passes it into the API to select the correct endpoint. Then the API displays in our DOM the beer name, date of the beer first brew, description of the beer, and displays a list of common foods to pair with the beer.

## Lessons Learned:

I learned when using an API, a select tag is useful for the API to correspond faster than an input tag. This will minimize beers that do not exist in the API and user's spelling error.
