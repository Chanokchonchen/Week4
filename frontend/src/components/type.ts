import { ObjectID } from "mongodb"
export interface Props {
    id? : ObjectID,
    number : string,
    title : string
}
export interface course {
    id? : ObjectID,
    number : string,
    title : string
}
export interface PropsCourseFrom {
    getCourse : () => void
}
export interface Params {
    courseID : ObjectID
}
export interface PropsReviewCourse {
    courseID : ObjectID
}