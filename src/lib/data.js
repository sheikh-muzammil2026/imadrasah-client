
export const getAllCoursesPromise = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses`);
    const data = await res.json()
    return data;
}

export const deleteFromAllCourses = async (courseId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${courseId}`, {
    method: "DELETE",
    headers: {
      'content-type': 'application/json'
    }
   
  });
  const data = await res.json();
  return data;
}

export const getAvalilableCourses = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-courses`);
    const data = await res.json()
    return data;
}

export const getCourseDetailsPromise = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`);
    const data = await res.json()
    return data;
}

export const updateDetailsCourse = async(courseId, updateValues)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${courseId}`,{
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateValues)
        });
        if(!res.ok){
            console.log("fatching time error in client side");
        }
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error, "from update data fatching time error");
    }
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

export const updateMyEnrolledClass = async (updateClass, classId)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enrolled-courses/${classId}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClass)
        })
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error, "from update patching time");
    }

}

export const cancelEnrolledCourses = async(id)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/enrolled-courses/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

         if (!res.ok) {
            throw new Error('Failed to delete course');
        }

        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
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

export const deleteAdmittedStudentData = async(studentId)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admissions/${studentId}`,{
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        }

    });
    const data = await res.json();
    return data;
    } catch (error) {
        console.log(error, "from fetching deleted data ")
        
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

export const cancelMyAddedCourse = async(courseId) =>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-courses/${courseId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
        if(!res.ok){
            console.log("my added course deleting failed")
        }
        const data = res.json();
        return data;
        
    } catch (error) {
        console.log(error, "From cancelMyAddedCourse fetching");
    }

}

export const updateMyAddedCourse = async(updatedValues,courseId) =>{
    try {
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-courses/${courseId}`,{
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedValues)
        })
        if(!res.ok){
             throw new Error("Failed to update course");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error, "Updated velue patching time error");
    }
}