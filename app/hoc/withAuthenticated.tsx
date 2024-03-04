// withAuthenticated.tsx
'use client' // Mark this file as a client component
import { useRouter } from 'next/navigation';
import React from 'react';
import { useUserStore } from '../hooks/store/storeUser';

const withAuthenticated = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const { user } = useUserStore();
        const router = useRouter();

        if (!user.uid) {
            router.push("/",);
            return <></>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default withAuthenticated;