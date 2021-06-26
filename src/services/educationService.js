import axios from "axios";

export default class EducationService{

    getByCandidateId(candidateId){
        return axios.get("/schools/getAllByCandidateId?candidateId="+candidateId)
    }
}