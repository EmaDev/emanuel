import {getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./config";
import { error } from "console";
import { User } from "../../types/User";
const db = getFirestore(app);


export const getUserByName = async (userName: string) => {
    try {
        const docRef = doc(db, "viajes-app", userName);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            const userData: User = docSnap.data() as any;
            return {
                ok: true,
                data: userData
            }
        }else{
            throw error("El usuario no existe")
        }
    } catch (error) {
        return {
            ok: false,
        }
    }
}