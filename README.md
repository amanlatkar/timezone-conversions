# timezone-conversions

© Aman latkar <amanlatkar1630@gmail.com>

Functionality

1. Convert Date Time From One time timezone to another

2. Get Current Date Time of any timezone 

## Installation

`npm install timezone-conversions`

## Usage

Get Current Date Time of any timezone
----
```javascript
const { Convert_TZ } = require("timezone-conversions");
let convertedDatetime = Convert_TZ("yyyy-MM-dd hh:mm:ss", from_timezone, to_timezone); //example Convert_TZ("2021-03-19 10:00:00", "+11:00", "-04:00");
console.log(convertedDatetime);
```

Get Current Date Time of any timezone
----
```javascript
const { CurrentDateTime } = require("timezone-conversions");
let Datetime = CurrentDateTime(timezone); //example CurrentDateTime("+05:30")
console.log(Datetime);
```



