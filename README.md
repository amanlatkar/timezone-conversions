# timezone-conversions

© Aman latkar <amanlatkar1630@gmail.com>

Functionality

1. Convert datetime from one timezone to another

2. Get Current datetime of any timezone

## Installation

`npm install timezone-conversions`

## Usage

```javascript
const { Convert_TZ, CurrentDateTime } = require("timezone-conversions");

// Convert datetime from one time timezone to another
Convert_TZ("YYYY-MM-DD HH:mm:ss", from_timezone, to_timezone); 
// Convert_TZ("2021-03-19 10:15:00", "+05:30", "+07:00");  => 2021-03-19 12:45:00 +07:30

// Get Current datetime of any timezone
CurrentDateTime(timezone); 
// CurrentDateTime("+05:30"); => 2021-03-20 02:12:00 +05:30
```


## Reference

Check supported timezones https://en.wikipedia.org/wiki/List_of_time_zones_by_country

Supported DateTime formats for timezone conversions
| Format  | Example |
| ------------- | ------------- |
| YYYY-MM-DDTHH:mm:ss  | 2021-03-19T10:15:00  |
| YYYY-MM-DD HH:mm:ss  | 2021-03-19 10:15:00  |
| YYYY-MM-DD HH:mm:ss A  | 2021-03-19 10:15:00 AM  |
| YYYY-MM-DD HH:mm:ss:SSS  | 2021-03-19 10:15:00:000  |
| YYYY-MM-DD HH:mm  | 2021-03-19 10:15  |
