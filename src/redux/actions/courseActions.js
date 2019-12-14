export function createCourse(course){

    // The name is all CAPS because it's a constant
    // This functions must have a type
    return {type:"CREATE_COURSE", course: course}   // We might only also have course because the names match

}