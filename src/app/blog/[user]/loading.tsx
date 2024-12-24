import { Skeleton } from "@nextui-org/skeleton";
import { Divider } from "../../../../components/client/Divider";
import { PostCard } from "../../../../components/skeleton/PostCard";

export default async function loading() {

  return (
    <>
      <div className='flex justify-between items-center py-1'>
        <div className='w-full flex gap-4 items-center'>
          <Skeleton className='h-20 w-20 md:w-24 md:h-24 rounded-full' />
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-48 rounded-lg" />
            <Skeleton className="h-3 w-24 rounded-lg" />
          </div>
        </div>
      </div>
      <Divider className='my-4' />
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-12">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

    </>
  )
}