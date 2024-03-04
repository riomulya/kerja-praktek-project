import AuthStateChangeProvider from "./context/AuthContext";

export default function Home() {

  return (
    <>
      <AuthStateChangeProvider children={""} />
    </>
  );
}
