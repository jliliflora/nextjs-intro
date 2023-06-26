import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
// children이란, react.js가 제공하는 prop인데 하나의 component를 또 다른 component안에 넣을때 쓸수있음
