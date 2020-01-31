import axios from 'axios';

export default function firebaseAxois() {
    const token=process.env.REACT_APP_FIREBASE_API_FCM
    return axios.create({
        baseURL: 'https://fcm.googleapis.com/fcm/',
        headers: {Authorization:`key=${token}`,"Content-Type": "application/json"}
    })
};
firebaseAxois().post('/send', {data: {msg: 'here we go'}, to: "e_XdFhCxboFYrKDrrjjvpM:APA91bEZFWP5nyTGSu-roqq-sc6NnVYQxoxqtxvEyKkMLcwDSrBhCmZ9AcbGICK_gLQJlIGTl-xivf_nSMWkMWnAMIvXnbwXNCYkgA2sBUtOIhO3zl2KzD9q67BGl3TqsGKVa4r3x1vw"})
        .then((res) => console.log(res))
        .catch((err) => console.error(err.response))