export const GET_RESUME_LANGUAGE="GET_RESUME_LANGUAGE"

export default function getResumeLanguage(language){
    return{
        type:GET_RESUME_LANGUAGE,
        payload:language
    }
}