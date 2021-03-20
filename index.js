/*
  index.js
  Created by Aman Latkar at 17/03/2021 10:02:56
  Copyright © 2021 Aman Latkar
*/
const TIMEZONES = {
	"-01:00": "+01:00",
	"-02:00": "+02:00",
	"-03:00": "+03:00",
	"-03:30": "+03:30",
	"-04:00": "+04:00",
	"-05:00": "+05:00",
	"-06:00": "+06:00",
	"-07:00": "+07:00",
	"-08:00": "+08:00",
	"-09:00": "+09:00",
	"-09:30": "+09:30",
	"-10:00": "+10:00",
	"-11:00": "+11:00",
	"-12:00": "+12:00",
	"+00:00": "-00:00",
	"+01:00": "-01:00",
	"+02:00": "-02:00",
	"+03:00": "-03:00",
	"+03:30": "-03:30",
	"+04:00": "-04:00",
	"+04:30": "-04:30",
	"+05:00": "-05:00",
	"+05:30": "-05:30",
	"+06:00": "-06:00",
	"+06:30": "-06:30",
	"+07:00": "-07:00",
	"+08:00": "-08:00",
	"+09:00": "-09:00",
	"+10:00": "-10:00",
	"+10:30": "-10:30",
	"+11:00": "-11:00",
	"+12:00": "-12:00",
};

/**
 * Get current datetime of specific timezone
 * @param  {string} tz The timezone
 * @return {string}    The DateTime string of given timezone
 */
const CurrentDateTime = (tz = "+00:00") => {
	try {
		var tz_copy = tz;
		if (tz in TIMEZONES) tz = TIMEZONES[tz];
		else throw "Invalid timezone";
	} catch (error) {
		return error;
	}

	let [date, rawtime] = new Date().toISOString().split("T");
	let time = rawtime.split(".")[0];
	return returnResponse(new Date(date + " " + time + " " + tz), tz_copy);
};

/**
 * Convert datetime from one timezone to another
 * @param  {string} dt      datetime which will be converted
 * @param  {string} from_tz The timezone
 * @param  {string} to_tz   The timezone
 * @return {string}         The converted datetime string
 */
const Convert_TZ = (dt, from_tz, to_tz) => {
	try {
		if (!dt || !from_tz || !to_tz) throw "Invalid parameters";
		var to_tz_copy = to_tz;

		if (typeof dt !== "string") throw "Invalid dt format";
		if (!(from_tz in TIMEZONES)) throw "Invalid from_tz";
		if (to_tz in TIMEZONES) to_tz = TIMEZONES[to_tz];
		else throw "Invalid to_tz";
	} catch (error) {
		return error;
	}

	let seprator = dt.includes("T") ? "" : " ";
	try {
		var [date, rawtime] = new Date(dt + seprator + from_tz)
			.toISOString()
			.split("T");
	} catch (error) {
		return error;
	}
	let time = rawtime.split(".")[0];

	return returnResponse(
		new Date(date + " " + time + " " + to_tz),
		to_tz_copy
	);
};

/**
 * Convert date object into string
 * @param  {string} dateObj  datetime which will be converted
 * @param  {string} timezone The timezone
 * @return {string}          The converted datetime string
 */
const returnResponse = (dateObj, timezone) => {
	if (typeof dateObj !== "object") return "Invalid date object";
	return (
		dateObj.toISOString().split(".")[0].replace("T", " ") + ` ${timezone}`
	);
};

module.exports = {
	CurrentDateTime,
	Convert_TZ,
};
