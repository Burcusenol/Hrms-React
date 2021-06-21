import axios from "axios";

export default class CityService {
  getCities() {
    return axios.get("/cities/getall");
  }
}
