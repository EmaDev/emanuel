"use client"

import React from 'react'
import { AlbumButton } from '../atoms/AlbumButton';
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
    albums: string[];
}

export const AlbumsList = ({ albums }: Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const activeAlbum = searchParams.get('album');

    const handleNavigate = (album: string) => {
        if(album === "Favoritos"){
            return router.push(`/blog/emanuel`)
        }
        return router.push(`/blog/emanuel?album=${album}`)
    }
    return (
        <div className='mb-4 w-full flex overflow-auto gap-4'>
            <AlbumButton
                title={"Favoritos"}
                active={!activeAlbum}
                navigate={handleNavigate}
            />
            {
                albums.map((album, i) => (
                    <AlbumButton
                        key={album}
                        title={album}
                        active={activeAlbum === album}
                        navigate={handleNavigate}
                    />
                ))
            }
        </div>
    )
}
