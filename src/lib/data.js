
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

export const submitEnrolledCourse = async(enrolledData) =>{
    const res = await fetch("http://localhost:5000/enrolled-courses", {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(enrolledData)
    })
    const data = await res.json();
    return data;

}

export const getMyEnrolledCoursesPromise = async() =>{
    const res = await fetch("http://localhost:5000/enrolled-courses");
    const data = await res.json()
    return data;
}


export const sumbitAdmitedDataPromise = async(admitedData) =>{
    const res = await fetch("http://localhost:5000/admissions", {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(admitedData)
    })
    const data = await res.json();
    return data;
}