import axios from "axios";

export default class JobAdvertisementService{
    getJobPost(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
}