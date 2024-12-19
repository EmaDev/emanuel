import { Card, CardBody } from '@nextui-org/card'
import { Skeleton } from '@nextui-org/skeleton'
import React from 'react'

export const PostCard = () => {
  return (
    <Card
      className={`w-full py-1`}
    >
      <CardBody className="">
        <Skeleton className="rounded-lg">
          <div className="h-[420px] rounded-lg bg-default-300" />
        </Skeleton>
      </CardBody>
      <div className="space-y-3 px-4 py-4">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  )
}
