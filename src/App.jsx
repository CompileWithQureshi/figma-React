import Cards from "./component/card1";
import Card2 from "./component/card2";
import Nav from "./component/nav";

export default function App() {
  // const first='Quick tips'
  // const secound='Wireframe tools'

  return (
    <>
      <div
        className="grid  bg-[#907CFF]  mx-auto h-full h mt-5 text-start
    rounded-md  leading-6   gap-9  md:bg-black  max-w-[306px]  md:max-w-4xl md:space-x-7"
      >
        <Nav tilte={{ name: "Quick tips" }} />

        <Cards />
        <Nav tilte={{ name: "Wireframe tools" }} />

        <Card2 />
      </div>
    </>
  );
}
