"use client"
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal';
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    src: string;
    alt: string;
}

export const AvatarHeader = ({ alt, src }: Props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
   
    return (
        <div>
            <div onClick={onOpen}
                className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-400 overflow-hidden transition-all duration-200 hover:scale-105'
            >
                <Image
                    src={src}
                    alt={`Avatar of ${alt}`}
                    width={400} height={400}
                    className='w-full h-full object-cover'
                    onLoad={(e) => console.log(e.target)}
                />
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}
                placement='center'
                className='mx-6 bg-transparent shadow-none'
                backdrop='blur'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className='flex justify-center items-center'>
                                <div className='w-64 h-64 rounded-full overflow-hidden'>
                                    <Image
                                        src={src}
                                        alt={`Avatar of ${alt}`}
                                        width={600} height={600}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
