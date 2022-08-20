# openweather-ip-api

## Project Description

The purpose of this project is to provide an API to get information about the location and weather of a certain place. You can use an optional parameter city, or get this information from the requester's IP.

It consumes the [OpenWeather](https://openweathermap.org/api) API, and [IP-Api](https://ip-api.com/docs)

## Instructions

To install all the dependencies, execute: \
`npm install`

To run the project execute: \
`npm start`

To run unit tests execute: \
`npm run test`

## Guide

You can make GET request to the following endpoints where all city params are optional:

`/v1/location?city={city}`

`/v1/current?city={city}`

`/v1/forecast?city={city}`

**Note**: If the city param is not provided, the server will resolve the sender's location using IP-Api \
**Note 2**: The city introduced in the query param city, should be in the 'citiesIPs.config.json' stored in /src/data among with a valid IP
