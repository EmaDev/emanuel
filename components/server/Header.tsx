import React from 'react'
import { Divider } from '../client/Divider'
import { AvatarHeader } from '../client/AvatarHeader';
import { User } from '../../types/User';
import { ThemeSwitch } from '../theme-switch';
import { AlbumsList } from '../client/molecules/AlbumsList';

interface Props {
    user: User
}

export default async function Header({ user }: Props) {

    return (
        <>
            <div className='flex justify-between items-center py-1'>
                <div className='w-full flex gap-4 items-center'>
                    <AvatarHeader
                        src={user.avatar}
                        alt={user.name}
                    />
                    <div className='text-gray-900 dark:text-white'>
                        <h2 className='text-md'>{user.name}</h2>
                        <p className='text-xs ml-2'>
                            {
                                user.tags.map((tag, i) => (
                                    <span key={tag}>{`${tag} ${(user.tags.length - 1) === i ? "" : "| "}`}</span>
                                ))
                            }
                        </p>
                    </div>
                </div>
                <ThemeSwitch />
            </div>
            <Divider className='my-4' />
            <AlbumsList
                albums={user.albums}
            />
        </>
    )
}
