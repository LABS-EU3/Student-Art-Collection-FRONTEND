import firebaseAxois from '../config/firebaseAxois'
import {firebase} from '../config/firebaseConfig';

const db = firebase.firestore()
export default async function pushNotification(user_id) {
    try {
        let token = null;
        const snapshot = await db.collection('tokens').where('user_id', "==",user_id ).get();
        snapshot.docs.forEach((docRef) => token = docRef.data().token);
        await firebaseAxois().post('/send', {"data": {
            "message": "here is a test message"
        },"to": token})
    } catch (error) {
        
    }
}