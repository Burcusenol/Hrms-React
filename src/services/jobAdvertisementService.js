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

    getConfirmStatusFalse(){
        return axios.get("/jobAdvertisements/getByConfirmStatusFalse")
    }

    updateConfirmStatus(jobAdvertisementId){
        return axios.post("/jobAdvertisements/updateconfirmStatus?jobAdvertisementId="+jobAdvertisementId)
    }

    getisActiveAndConfirmed(){
        return axios.get("/jobAdvertisements/getByisActiveTrueAndConfirmStatusTrue")
    }

    deleteJobAdvertisement(jobAdvertisementId){
        return axios.post("/jobAdvertisements/delete?jobAdvertisementId="+jobAdvertisementId)
    }
}