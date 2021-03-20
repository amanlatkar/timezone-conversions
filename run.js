const { Convert_TZ, CurrentDateTime } = require("./index");

let datetime = CurrentDateTime("+05:30");
console.log("Current datetime  : " + datetime);

let convertedTimezone = Convert_TZ("2021-03-20T09:50:00", "+05:30", "+06:30");
console.log("Converted timezone: " + convertedTimezone);
