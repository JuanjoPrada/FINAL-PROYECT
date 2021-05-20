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

  searchById = (id) =>
    this.api.get(`events?apikey=${TMAPI_Key}&id=${id}&locale=*`);
}

export default TmasterApp;
