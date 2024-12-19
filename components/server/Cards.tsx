"use client"

import React from 'react'
import styles from "./cards.module.css";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from '@nextui-org/link';
import { MapComponenet } from '../client/Map';
import Image from 'next/image';
import { MdCamera } from "react-icons/md";
import { MOCK_POSTS } from '../../services/mock/Posts';


export const CardsContainer = () => {
    const screenWidth = (window.innerWidth < 768) ? "mobile" : "desktop";

    return (
        <>
            <div className={styles.gallery}>
                {
                    MOCK_POSTS.map(card => (
                        <Card
                            className={`w-full py-1`}
                            key={card.title}>
                            <CardBody className="">
                                <div className={`${screenWidth === "mobile" ? "h-[420px]" : "h-[600px]"}`}>
                                    <Image
                                        src={card.image}
                                        alt=""
                                        height={500} width={500}
                                        className='w-full h-full object-cover rounded-xl'
                                    />
                                </div>
                            </CardBody>
                            <CardFooter className="flex-col items-start ">
                                <p className="text-sm">{card.date}</p>
                                <h4 className="font-bold text-large">{card.title}</h4>
                                <div className='flex gap-2 items-center'>
                                    <MdCamera />
                                    <span className='italic font-[300] text-xs'>{card.camera}</span>
                                </div>
                                <div className='flex items-center justify-between w-full mt-2'>
                                    <small className="text-default-500">{`${card.location.lng}, ${card.location.lat}`}</small>
                                    <Link isExternal showAnchorIcon 
                                    href={`https://www.google.com.ar/maps?q=${card.location.lat}, ${card.location.lng}`}>
                                        Abrir en mapa
                                    </Link>
                                </div>
                                {
                                    card.map &&
                                    <div className='w-full my-2 rounded-lg bg-gray-700 h-32 relative overflow-hidden'>
                                        <MapComponenet lng={card.location.lng} lat={card.location.lat} />
                                    </div>
                                }
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>


        </>
    )
}
