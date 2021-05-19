const axios = require("axios");

const TMAPI_Key = process.env.REACT_APP_TMAPI_KEY;

class TmasterApp {
  constructor() {
    this.api = axios.create({
      baseURL: "https://app.ticketmaster.com/discovery/v2/",
    });
  }

  searchAll = (city) =>
    this.api.get(
      `events?apikey=${TMAPI_Key}&locale=*&size=60&sort=date,asc&city=${city}`
    );

  // searchClassMusic = (city) =>
  //   this.api.get(
  //     `events?apikey=${TMAPI_Key}&locale=*&city=${city}&classificationName=music`);

  // searchClassComedy = (city) =>
  //   this.api.get(`events?apikey=${TMAPI_Key}&locale=*&city=${city}&classificationName=comedy`);

  // searchClassSport = (city) =>
  //   this.api.get(`events?apikey=${TMAPI_Key}&locale=*&city=${city}&classificationName=sport`);

  // searchClassFestival = (city) =>
  //   this.api.get(`events?apikey=${TMAPI_Key}&locale=*&city=${city}&classificationName=festival`);

  //Get the date in array with the written format
  searchByDate = (city, date) =>
    this.api.get(
      `events?apikey=${TMAPI_Key}&locale=*&size=60&sort=date,asc&startDateTime=2021-05-20T08:00:00Z&endDateTime=2021-05-22T00:00:00Z&city=${city}`
    );
}

export default TmasterApp;
