
export const getAllCoursesPromise = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses`);
    const data = await res.json()
    return data;
}

export const getCourseDetailsPromise = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`);
    const data = await res.json()
    return data;
}

export const submitEnrolledCourse = async(enrolledData) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enrolled-courses`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enrolled-courses`);
    const data = await res.json()
    return data;
}


export const sumbitAdmitedDataPromise = async(admitedData) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admissions`, {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(admitedData)
    })
    const data = await res.json();
    return data;
}