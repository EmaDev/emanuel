import { title } from "../../../components/primitives";
import Header from "../../../components/server/Header";
import { PostCard } from "../../../components/server/PostCard";
import { UseLocation } from "../../../hooks/useLocation";
import { getPostsByUser } from "../../../services/firebase/post";
import { getUserByName } from "../../../services/firebase/users";

export default async function BlogPage({ searchParams }: any) {
  
  const { album } = searchParams;
  const userData: any = await getUserByName("emanuel")
  const post: any = await getPostsByUser("emanuel", album || "");

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