import axios from "axios";

export default class LanguageService{
    getLanguages(candidateId){
        return axios.get("/languages/getAllByCandidateId?candidateId="+candidateId)
    }
}