import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./config";
import { Post } from "../../types/Post";
const db = getFirestore(app);


export const getPostsByUser = async(userName:string) => {
    try {
        const q = query(collection(db, "viajes-app", userName, "post"),
            where("album", "==", ""));
        const querySnapshot = await getDocs(q);
        const posts:Post[] = [];

        querySnapshot.forEach(( doc ) => {
            posts.push(doc.data() as any)
        });

        //console.log(posts);
        return {
            ok: true,
            data: posts
        }

    } catch (error) {
        return {
            ok:false,
        }
    }
} 