
export const getAllCoursesPromise = async()=>{
    const res = await fetch("http://localhost:5000/courses");
    const data = await res.json()
    return data;
}

export const getCourseDetailsPromise = async(id)=>{
    const res = await fetch(`http://localhost:5000/courses/${id}`);
    const data = await res.json()
    return data;
}