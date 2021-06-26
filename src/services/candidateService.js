import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("/candidates/getall")
    }
    getResume(candidateId){
        return axios.get("/candidates/getCandidateResumeByCandidateId?candidateId="+candidateId)
    }

    getById(candidateId){
        return axios.get("/candidates/getById?id="+candidateId)
    }
  
}