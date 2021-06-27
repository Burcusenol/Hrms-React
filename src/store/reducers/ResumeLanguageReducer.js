import { GET_RESUME_LANGUAGE } from "../actions/ResumeLanguageActions";
import { language } from "../initialValues/ResumeLanguage";

const initialState={
    language:language
}

export default function ResumeLanguageReducer(state=initialState,{type,payload}){
switch(type){
    case GET_RESUME_LANGUAGE:
        return payload
    default:
        return state;    

}
}