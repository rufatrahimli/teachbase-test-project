import axios from "axios";

export const userLogin = (login, password) => {
  return axios.post(
    "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/login",
    {
      login,
      password,
    }
  );
};

export const userRegister = (login, password, email) => {
  return axios.post(
    "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/register",
    {
      login,
      password,
      email,
    }
  );
};
