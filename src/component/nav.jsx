/* eslint-disable react/prop-types */
const Nav = ({ tilte }) => {
  const title = tilte.name;
  // console.log(tilte);

  return (
    <>
      <nav>
        <h1 className="text-white font-sans font-bold text-[48px] mx-14 mt-16 ">
          {title}
        </h1>
      </nav>
    </>
  );
};

export default Nav;
