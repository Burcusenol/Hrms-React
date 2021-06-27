import { combineReducers } from "redux";
import ResumeLanguageReducer from "./reducers/ResumeLanguageReducer";

const rootReducer=combineReducers({
    ResumeLanguage:ResumeLanguageReducer,
})

export default rootReducer;