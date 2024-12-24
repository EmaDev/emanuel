"use client"

import { Button } from '@nextui-org/button';
import React from 'react'


interface Props {
  active: boolean;
  title: string;
  navigate: (album:string) => void;
}
export const AlbumButton = ({ active, title, navigate }: Props) => {

  return (
    <Button className={`${active ? "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" : ""}`}
      onPress={() => navigate(title)}
    >
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </Button>
  )
}
