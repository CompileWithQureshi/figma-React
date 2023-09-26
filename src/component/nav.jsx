/* eslint-disable react/prop-types */
const Nav = ({ tilte }) => {
  const title = tilte;
  // console.log(tilte);

  return (
    <>
      <nav>
        <h1 className="text-white font-sans font-bold text-[48px] mx-14 mt-16 ">
          {title.name}
        </h1>
      </nav>
    </>
  );
};

export default Nav;
