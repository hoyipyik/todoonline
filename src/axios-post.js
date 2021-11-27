import axios from "axios";

const instance = axios.create({
    // baseURL: "https://todo-online-hyy-default-rtdb.europe-west1.firebasedatabase.app/private"
    baseURL: "https://mediarssdemo-default-rtdb.europe-west1.firebasedatabase.app/"
})

export default instance