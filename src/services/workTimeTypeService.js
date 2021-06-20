import axios from "axios";

export default class WorkTimeTypeService{
    getWorkTimes(){
        return axios.get("http://localhost:8080/api/worktimetype/getall")
    }
}