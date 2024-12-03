import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;
export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
 };
 
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
 };
 
export const fetchAllCourses = async () => {
    console.log('frontend function call')
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
  };
  export const updateCourse = async (course: any) => {
    console.log("CLIENT UPDATE", course)
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
  };
  
  export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };
  export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };

  //ASSIGNMENTS
  export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
      .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  };
  export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
};

//QUIZ
export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};
export const createQuizForCourse = async (courseId: string, quiz: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return response.data;
};


//ENROLLMENTS
export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${ENROLLMENT_API}/${userId}`);
  return response.data;
}

  
  
  