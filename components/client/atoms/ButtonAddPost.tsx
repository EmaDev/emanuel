"use client"

import React from 'react';
import { addPostByUser } from '../../../services/firebase/post';
import { MOCK_POSTS } from '../../../services/mock/Posts';
import { Button } from '@nextui-org/button';

export const ButtonAddPost = () => {

    const addPost = async () => {
        const resp = await addPostByUser(MOCK_POSTS[1], "emanuel");
    }

    return (
        <Button
        onPress={addPost}
        >Add Post</Button>
    )
}
