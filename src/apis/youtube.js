import axios from 'axios';

const KEY = 'AIzaSyBpk0jZ3vLNkRmEEQmwkQlVtSThhv_L3zU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
