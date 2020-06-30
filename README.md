# covid19_api

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Description](#Description)

## General info
An API that retrieves from a Postgres database and return JSON results accordingly to parameters options

## Technologies
This project is created with:
* JavaScript ES6
* Node JS
* Express version 4.17.1

## Description
* Backend:
    > Using NodeJs and Express to write an API to return JSON results.
    >> https://covid19manitobaapi.herokuapp.com/ with no parameter that shows all the updated cases which are being retrieved from a database under a JSON format.
    >> https://covid19manitobaapi.herokuapp.com/dates with [dates] parameter that shows all the dates under JSON format.
    >> https://covid19manitobaapi.herokuapp.com/cases with [cases] parameter that shows all the cases under JSON format.
    >> https://covid19manitobaapi.herokuapp.com/id with [id] parameter that shows all the id (number of days of these reported cases) under JSON format.
* Frontend:
    > Simple responsive bootstrap and CSS to display data in the table.
* Heroku:
    > Deployed on Heroku server. 
