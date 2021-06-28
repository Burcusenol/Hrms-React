import axios from "axios";

export default class CoverLetterService{
    getCoverLetter(candidateId){
        return axios.get("/coverletter/getAllByCandidateId?candidateId="+candidateId)
    }

    update(coverLetter){
        return axios.put("/coverletter/update",coverLetter)
    }
}