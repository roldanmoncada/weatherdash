# Weatherdash

## Description:
  This app is a weather dashboard that retrieves the current and five-day weather forecast for the given city input from the user. Further usage instructions can be found as part of the screenshots section below.

  Currently, the app does everything except two things: 
  
  1. buttons that act as quick-keys to return to recent searches that are saved to local storage. I had it set up, but figured submitting for a grade is a higher priority than perfecting things at this point. 
  2.  Limiting the 5-day display to only 5 days. Currently, far more are loading and being generated onto the page.
   
   The data is displayed almost identically to the mock-up screenshot provided as a basis for the quiz. Super fun overall but I did run into those FE snags where I kept losing track of my variable names and what data was generated where and where else it was required.

  The assignment's User Story and Acceptance Criteria can be found in their own sections below.
  
## User Story:
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

  ## Acceptance Criteria:
  ```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
  ## Screenshots: 
  The homepage has a title and input form for the user to type in their selected.
  ![image](https://user-images.githubusercontent.com/112277445/212789853-dca64dec-34b5-4ef7-ab7b-c2dbfddbacc1.png)
  Upon clicking the search button, the page then generates the current weather and five-day forecast for the input city. The temperature, wind speed, and humidity display as well as an icon that briefly describes the state of the weather. The user's previous searches are also available in in the list that appears when you click back in the input form.
  ![image](https://user-images.githubusercontent.com/112277445/212790269-53787e42-3db2-4c95-8607-8f4e6e1abc23.png)
  The app works for all cities tracked by OpenWeather!
  ![image](https://user-images.githubusercontent.com/112277445/212790693-1fbf303f-0c67-46dd-b6fb-57f10e5869ab.png)
  
  ## Deployment Links:
  Here is a link to my GitHub [repo!](https://github.com/roldanmoncada/weatherdash)

  Here is the live [app!](https://roldanmoncada.github.io/weatherdash)