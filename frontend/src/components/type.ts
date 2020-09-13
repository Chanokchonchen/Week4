export interface Props {
    number : string,
    title : string
}
export interface course {
    number : string,
    title : string
}
export interface PropsCourseFrom {
    getFormCourse : (course : course) => void
}