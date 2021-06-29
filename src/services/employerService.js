import axios from "axios"

export default class EmployerService{

    getEmployers(){
        return axios.get("/employers/getall")
    }

    getById(employerId){
        return axios.get("/employers/getById?id="+employerId)
    }
}
