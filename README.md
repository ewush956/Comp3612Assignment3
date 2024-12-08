# F1 Web API

## Description
The F1 Web API is a Node.js-based RESTful API that provides data about Formula 1 circuits, constructors, drivers, races, and results. It is hosted on [Glitch](https://f1-web-api.glitch.me) and supports a variety of endpoints for retrieving specific details. This project was developed as part of an assignment to demonstrate API development skills using Node.js.

## Hosting and Base URL
The API is hosted at: `https://f1-web-api.glitch.me`  
All API endpoints should be prefixed with this base URL.

## API Endpoints

| Category      | Endpoint                                | Description                                                  |
|---------------|-----------------------------------------|--------------------------------------------------------------|
| Circuits      | **/api/circuits**                      | Returns all circuits.                                        |
|               | **/api/circuits/:id**                  | Returns a single circuit by `circuitId`.                    |
| Constructors  | **/api/constructors**                  | Returns all constructors.                                    |
|               | **/api/constructors/:ref**             | Returns a single constructor by `constructorRef`.            |
|               | **/api/constructorResults/:ref/:year** | Returns race results for a constructor in a specific season. |
| Drivers       | **/api/drivers**                       | Returns all drivers.                                         |
|               | **/api/drivers/:ref**                  | Returns a single driver by `driverRef`.                     |
|               | **/api/driverResults/:ref/:year**      | Returns race results for a driver in a specific year.        |
| Races         | **/api/races/season/:year**            | Returns all races for a specific season.                    |
|               | **/api/races/id/:id**                  | Returns a single race by `raceId`.                          |
| Results       | **/api/results/race/:id**              | Returns results for a specific race by `raceId`.            |
|               | **/api/results/season/:year**          | Returns all results for a specific season.                  |


## Error Handling
The API handles invalid or non-existent requests. If no data is found for a query, a JSON response with an appropriate error message is returned. Example:  
```json
{ "error": "No results found for the specified season." }

```

## Test Links


| API Endpoint                                         | Expected Result  |
|------------------------------------------------------|------------------|
| [https://f1-web-api.glitch.me/api/circuits](https://f1-web-api.glitch.me/api/circuits) | Valid     |
| [https://f1-web-api.glitch.me/api/circuits/1](https://f1-web-api.glitch.me/api/circuits/1) | Valid     |
| [https://f1-web-api.glitch.me/api/constructors](https://f1-web-api.glitch.me/api/constructors) | Valid     |
| [https://f1-web-api.glitch.me/api/constructors/mclaren](https://f1-web-api.glitch.me/api/constructors/mclaren) | Valid   |
| [https://f1-web-api.glitch.me/api/coNSTruCTors/mclaren](https://f1-web-api.glitch.me/api/coNSTruCTors/mclaren) | Valid   |
| [https://f1-web-api.glitch.me/api/constructors/javascript](https://f1-web-api.glitch.me/api/constructors/javascript) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/constructorResults/mclaren/2023](https://f1-web-api.glitch.me/api/constructorResults/mclaren/2023) | Valid     |
| [https://f1-web-api.glitch.me/api/constructorResults/MERCEDES/2020](https://f1-web-api.glitch.me/api/constructorResults/MERCEDES/2020) | Valid     |
| [https://f1-web-api.glitch.me/api/constructorResults/mclaren/2040](https://f1-web-api.glitch.me/api/constructorResults/mclaren/2040) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/constructorResults/comp3612/2023](https://f1-web-api.glitch.me/api/constructorResults/comp3612/2023) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/drivers](https://f1-web-api.glitch.me/api/drivers) | Valid     |
| [https://f1-web-api.glitch.me/api/drivers/hamilton](https://f1-web-api.glitch.me/api/drivers/hamilton) | Valid     |
| [https://f1-web-api.glitch.me/api/drivers/HAMilton](https://f1-web-api.glitch.me/api/drivers/HAMilton) | Valid     |
| [https://f1-web-api.glitch.me/api/drivers/randy](https://f1-web-api.glitch.me/api/drivers/randy) | Very Invalid Request    |
| [https://f1-web-api.glitch.me/api/driverResults/piastre/2023](https://f1-web-api.glitch.me/api/driverResults/piastre/2023) | Valid    |
| [https://f1-web-api.glitch.me/api/driverResults/piastre/2002](https://f1-web-api.glitch.me/api/driverResults/piastre/2002) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/races/season/2023](https://f1-web-api.glitch.me/api/races/season/2023) | Valid     |
| [https://f1-web-api.glitch.me/api/races/seasoning/2023](https://f1-web-api.glitch.me/api/races/seasoning/2023) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/races/season/2032](https://f1-web-api.glitch.me/api/races/season/2032) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/results/race/1100](https://f1-web-api.glitch.me/api/results/race/1100) | Valid     |
| [https://f1-web-api.glitch.me/api/results/race/1756348576](https://f1-web-api.glitch.me/api/results/race/1756348576) | Invalid Request    |
| [https://f1-web-api.glitch.me/api/results/season/2023](https://f1-web-api.glitch.me/api/results/season/2023) | Valid     |
| [https://f1-web-api.glitch.me/api/results/season/2034](https://f1-web-api.glitch.me/api/results/season/2034) | Invalid Request    |

