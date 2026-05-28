
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

export const getMyEnrolledCoursesPromise = async(userId) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enrolled-courses/${userId}`);
    const data = await res.json()
    return data;
}


export const submitAdmittedDataPromise = async(admittedData) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admissions`, {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(admittedData)
    })
    const data = await res.json();
    return data;
}

export const getAdmittedStudentListPromise = async()=>{
    try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admissions`);
            const studentsList = res.json()
            return studentsList;
        
    } catch (error) {
        console.log(error, "from admitted students data fetchin");
    }
}


export const submitMyaddedCourse = async(myAddedCourseWithId)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-courses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myAddedCourseWithId)

        })
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error, "during post my added course data to server")
        
    }
}


export const getMyAddedCoursesPromise = async(userId) =>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-courses/${userId}`);
        const data = await res.json()
        return data;
        
    } catch (error) {

        console.log(error);
        
    }
}