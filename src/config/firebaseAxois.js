import axios from 'axios';

export default function firebaseAxois() {
    const token=process.env.REACT_APP_FIREBASE_API_FCM
    return axios.create({
        baseURL: 'https://fcm.googleapis.com/fcm/',
        headers: {Authorization:`key=${token}`,"Content-Type": "application/json"}
    })
};