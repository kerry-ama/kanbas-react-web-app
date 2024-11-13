import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
    console.log('frontend function call')
  const { data } = await axios.get(COURSES_API);
  return data;
};
