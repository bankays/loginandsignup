import { useNavigate } from "react-router-dom";

const validatetoken = (token) => {
  try {
    const tokenextime = JSON.parse(window.atob(token.split(".")[1])).exp * 1000;

    const now = new Date().getTime();
    if (tokenextime < now) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);

    return false;
  }
};
export default validatetoken;
