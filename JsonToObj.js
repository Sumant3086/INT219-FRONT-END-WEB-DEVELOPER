// Sample JSON string representing a date
var jsonString = '{"date": "2024-05-06T12:30:00Z"}';

// Parse the JSON string to JavaScript object
var jsonObject = JSON.parse(jsonString);

// Extract the date string from the object
var dateString = jsonObject.date;

// Create a Date object from the date string
var dateObject = new Date(dateString);

console.log(dateObject); // Output: 2024-05-06T12:30:00.000Z (or equivalent)
