import { ButtonAddPost } from "../../../../components/client/atoms/ButtonAddPost";
import Header from "../../../../components/server/Header";
import { PostCard } from "../../../../components/server/PostCard";
import { getPostsByUser } from "../../../../services/firebase/post";
import { getUserByName } from "../../../../services/firebase/users";

export default async function Page({ params,  searchParams}: any) {

    const { user } = params;
    const {album} = searchParams;
    const userData: any = await getUserByName(user || "")
    const post: any = await getPostsByUser(user || "", album || "");

    return (
        <section className="py-4 md:py-10 text-white">
            <Header user={userData.data} />
            <main className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-12">
                {
                    post.data.map((post: any) => (
                        <PostCard
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </main>
        </section>
    )
}
