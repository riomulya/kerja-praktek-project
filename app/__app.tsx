import type { AppProps } from 'next/app'
import AuthStateChangeProvider from './context/AuthContext'
import { UserProvider } from './context/UserContext'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <AuthStateChangeProvider>
                <Component {...pageProps} />
            </AuthStateChangeProvider>
        </UserProvider>
    )
}