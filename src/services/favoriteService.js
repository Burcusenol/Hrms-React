import axios from "axios";

export default class FavoriteService{
    add(favorite){
        return axios.post("/favorite/add",favorite)
    }

    getByCandidateId(id){
        return axios.get("/favorite/getByCandidate_Id?id="+id)
    }

    deleteFavorites(id){
        return axios.delete("/favorite/deleteById?id="+id)
    }
}