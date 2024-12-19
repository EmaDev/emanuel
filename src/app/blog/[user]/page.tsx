import Header from "../../../../components/server/Header";
import { PostCard } from "../../../../components/server/PostCard";
import { getPostsByUser } from "../../../../services/firebase/post";
import { getUserByName } from "../../../../services/firebase/users";

export default async function Page({ params }: any) {

    const {user} = params;
    const userData: any = await getUserByName( user || "")
    const post: any = await getPostsByUser( user || "");   
     
    return (
        <section className="py-4 md:py-10 text-white">
            <Header user={userData.data} />
            <main>
                {
                    post.data.map( (post:any) => (
                        <PostCard
                        key={post.title}
                        post={post}
                        />
                    ))
                }
            </main>
        </section>
    )
}
