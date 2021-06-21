import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("/candidates/getall")
    }
}