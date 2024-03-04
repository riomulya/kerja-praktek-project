"use client"
import React from 'react'
import withAuthenticated from '../hoc/withAuthenticated';
import { useUserStore } from '../hooks/store/storeUser';


function page() {
    const { user } = useUserStore();
    console.log({ user })
    return (
        <>
            <div>test {user.uid}</div>
            <div>p</div>
        </>
    )
}

export default withAuthenticated(page);
