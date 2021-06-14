import axios from "axios";

export default class JobAdverTisementService{
    getJobPost(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
}