import React from "react";
import Courses from "./Courses";
import Reviewcourse from "./Reviewcourse"
import { Params } from "./type";
const routes = {
  "/": () => <Courses />, 
  "/review/:courseID": (params : any) => {
        const newparams = params as Params
        return <Reviewcourse {...newparams}/>
    }
};
export default routes;