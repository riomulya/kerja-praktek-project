import SignIn from "./auth/SigIn";
import AuthStateChangeProvider from "./context/AuthContext";



export default function Home() {

  return (
    <>
      <SignIn />
      <AuthStateChangeProvider children={""} />
    </>
  );
}
