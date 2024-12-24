"use client"
import React from 'react'
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal';
import Image from 'next/image';

interface Props {
    alt: string;
    src: string;
}
export const ModalImage = ({ alt, src }: Props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Image
                src={src}
                alt={alt}
                height={500} width={500}
                className='w-full h-full object-cover rounded-xl'
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}
                placement='center'
                className='bg-transparent shadow-none'
                backdrop='blur'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className='flex justify-center items-center'>
                                <div className='w-[95%] h-auto overflow-hidden rounded-md'>
                                    <Image
                                        src={src}
                                        alt={`Image of ${alt}`}
                                        width={800} height={800}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
