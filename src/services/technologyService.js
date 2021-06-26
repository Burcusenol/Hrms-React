import axios from "axios";

export default class TechnologyService{
    getTechnologies(candidateId){
        return axios.get("/technology/getAllByCandidateId?candidateId="+candidateId)
    }
}