import Cards from "./component/card1";
import Card2 from "./component/card2";
import Nav from "./component/nav";

export default function App() {
  // const first='Quick tips'
  // const secound='Wireframe tools'

  return (
    <>
      <div
        className="grid ju bg-[#907CFF] max-w-2xl mx-auto h-screen items-stretch mt-5
    rounded-md  leading-6 overflow-auto gap-9"
      >
        <Nav tilte={{ name: "Quick tips" }} />

        <Cards />
        <Nav tilte={{ name: "Wireframe tools" }} />

        <Card2 />
      </div>
    </>
  );
}
