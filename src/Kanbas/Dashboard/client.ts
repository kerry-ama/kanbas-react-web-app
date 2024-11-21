import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const enrollUserInCourse = async (userId: any, courseId: any) => {
    const response = await axios.put(`${ENROLLMENTS_API}/enroll/${userId}/${courseId}`, userId, courseId);
    console.log("ENROLL CLIENT", response)
    return response.data;
  };
  
export const unenrollUserFromCourse = async (userId: any, courseId: any) => {
 const response = await axios.delete(`${ENROLLMENTS_API}/unenroll/${userId}/${courseId}`);
 console.log("UNENROLL", response)
 
 return response.data;
};
export const fetchEnrollments = async (userId: any) => {
  const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  return response.data; // Assuming the response contains the user's enrollments
};