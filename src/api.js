import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyAWNFXFpG-r_7NgK8gzTIrcQ4GBBidBUhU"
    }
})

export default request