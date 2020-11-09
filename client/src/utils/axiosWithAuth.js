import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios
            .create({
                baseURL: `http://localhost:5000/api`,
                headers: {Authorization: token}
            });
};

// axiosWithAuth allows the token to appear in the header of other axios requests so protected data can be accessed