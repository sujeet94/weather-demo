# Demo Link

 Project Deployed on Firebase.
 Demo Link [weather](https://weather-demo-190f0.web.app) .

## Api Used
For City List static List with around 50-60 indian cities.
For City Forecast https://api.openweathermap.org/data/2.5/forecast

## Current Implementation Details
* Displayed a list of static city data taken from openweatermap.org.
* Added a button to see the forecast of selected city.
* Added a search bar to find your City.

* Added Mat-table to display the forecast of selected City.
* added a search filter to search in table.
* Displayed data which I felt is Important to User.

## Improvements That could be done
* Should not hardcode the City list on UI, In Ideal scenerio the First page should be a searchable dropdown with top 10 most selected City populated and on User entering the City name It should do an Api call to get the city details from our server.
* Second page where we are showing the forecaste should be paginated.
* It should be API base pagination, filtering and sorting.
* Since the data might be very large we should have a pagination Parameter along with sort direction, no of days, and many more.
* The Filter should have an advance search, where user could select the filter type tp get the Details.
* Each row could have an action button which can be used to display more data or Graphs or trends.

# WeatherDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
