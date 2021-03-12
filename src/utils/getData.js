import axios from "axios";

export const getData = async (url, token) => {
  const res = await axios.get(`/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postData = async (url, post, token) => {
  const res = await axios.post(`/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const modifyData = async (url, post, token) => {
  const res = await axios.patch(`/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};
