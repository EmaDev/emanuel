import React from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from '@nextui-org/link';
import { MapComponenet } from '../client/Map';
import Image from 'next/image';
import { MdCamera } from "react-icons/md";
import { Post } from '../../types/Post';
import { convertTimestampToDate } from '../../services/helpers';


interface Props {
    post: Post
}

export const PostCard = ({post}:Props) => {

    //const screenWidth = (window.innerWidth < 768) ? "mobile" : "desktop";
    const screenWidth = "mobile";

    return (
        <Card
            className={`w-full py-1`}
            key={post.title}>
            <CardBody className="">
                <div className={`${screenWidth === "mobile" ? "h-[420px]" : "h-[600px]"}`}>
                    <Image
                        src={post.image}
                        alt=""
                        height={500} width={500}
                        className='w-full h-full object-cover rounded-xl'
                    />
                </div>
            </CardBody>
            <CardFooter className="flex-col items-start ">
                <p className="text-sm">{convertTimestampToDate(post.date)}</p>
                <h4 className="font-bold text-large">{post.title}</h4>
                <div className='flex gap-2 items-center'>
                    <MdCamera />
                    <span className='italic font-[300] text-xs'>{post.camera}</span>
                </div>
                <div className='flex items-center justify-between w-full mt-2'>
                    <small className="text-default-500">{`${post.location.lng}, ${post.location.lat}`}</small>
                    <Link isExternal showAnchorIcon
                        href={`https://www.google.com.ar/maps?q=${post.location.lat}, ${post.location.lng}`}>
                        Abrir en mapa
                    </Link>
                </div>
                {
                    post.map &&
                    <div className='w-full my-2 rounded-lg bg-gray-700 h-32 relative overflow-hidden'>
                        <MapComponenet lng={post.location.lng} lat={post.location.lat} />
                    </div>
                }
            </CardFooter>
        </Card>
    )
}
