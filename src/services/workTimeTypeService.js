import axios from "axios";

export default class WorkTimeTypeService{
    getWorkTimes(){
        return axios.get("/worktimetype/getall")
    }
}