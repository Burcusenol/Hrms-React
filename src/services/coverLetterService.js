import axios from "axios";

export default class CoverLetterService{
    getCoverLetter(candidateId){
        return axios.get("/coverletter/getAllByCandidateId?candidateId="+candidateId)
    }
}