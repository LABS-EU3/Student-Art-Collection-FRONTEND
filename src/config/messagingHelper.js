import { messaging, firebase } from './firebaseConfig';
export default async function messagingHelper(props) {
    const db = firebase.firestore();
    try {
         await messaging.requestPermission().then(async () => {
             const token = await messaging.getToken()
             const snapshot =  await db.collection('tokens')
                 .where('user_id', '==', props.loggedInUser._id) .get();
             if(!snapshot.empty) {
                 snapshot.docs.forEach((docRef)=> {
                     db.collection('tokens').doc(docRef.id).update({token})
                 } )
             }else {
                 await db.collection('tokens')
             .add({user_id:props.loggedInUser._id, token})
             }
         });
    } catch (error) {
    }
}

