"use client"
import React from 'react'
import TheCard from '../components/TheCard';
import withAuthenticated from '../hoc/withAuthenticated';
import { useUserStore } from '../hooks/store/storeUser';


function page() {
    const { user } = useUserStore();
    console.log({ user })
    return (
        <>
            <div>test {user.uid}</div>
            <div>p</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                <TheCard />
                <TheCard />
                <TheCard />
                <TheCard />
                <TheCard />
                <TheCard />
                <TheCard />
            </div>
        </>
    )
}

export default withAuthenticated(page);
