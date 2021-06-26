import axios from "axios";

export default class SocialMediaService{

    getSocialMedias(candidateId){
        return axios.get("/links/getAllByCandidateId?candidateId="+candidateId)
    }
}