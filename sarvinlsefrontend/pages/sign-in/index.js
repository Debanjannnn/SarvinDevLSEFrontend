import SignIn from "../../src/app/components/SignIn";
import "../../src/app/globals.css";

export default function signin() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      {" "}
      <SignIn />
    </main>
  );
}
