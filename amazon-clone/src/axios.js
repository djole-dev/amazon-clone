import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-clone-662bf.cloudfunctions.net/api'
    //'http://localhost:5001/clone-662bf/us-central1/api'
});

export default instance;