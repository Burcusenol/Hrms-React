import axios from "axios";

export default class JobAdvertisementService{
    getJobPost(){
        return axios.get("/jobAdvertisements/getall")
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post("/jobAdvertisements/add",jobAdvertisement)
    }

    getActiveJobs(){
        return axios.get("/jobAdvertisements/getAllByIsActiveTrue")
    }
}