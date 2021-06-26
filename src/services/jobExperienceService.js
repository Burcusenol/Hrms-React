import axios from "axios";

export default class JobExperienceService{
    getJobExperiences(candidateId){
        return axios.get("/jobExperience/getAllByCandidateId?candidateId="+candidateId)
    }
}