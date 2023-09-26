const Card2 = () => {
  const datas = [
    {
      id: 1,
      h1: "Stickies",
      p: "Press “S” to quickly add a sticky to the canvas.",
      img1: "./4-frame-1.png",
      bttn: "S",
    },
    {
      id: 3,
      h1: "Rectangles",
      p: "Press “R” to quickly place a rectangle onto the canvas. Other shapes can be selected from the toolbar or swapped from the shape menu.",
      img1: "./5-frame.png",
      bttn: "R",
    },
    {
      id: 4,
      h1: "Copy and paste",
      p: "Copy and paste from FigJam to figma and vice-versa.Bring your diagram into your design file",
      img1: "./6-frame.png",
      bttn: "C",
    },
  ];
  return (
    <>
      <section>
        {datas.map(({ id, h1, p, img1, img2, bttn }) => (
          <div key={id}>
            <div className="cards border bg-white max-w-full h-auto flex flex-shrink-0 mx-14 rounded-xl shadow-xl gap-5 items-start">
              <div className="flex-col p-0 gap-3 text-start">
                <h1
                  className=" font-sans font-semibold  text-4xl leading-7
                tracking-tighter p-5"
                >
                  {h1}
                </h1>
                <p
                  className=" font-sans
                 font-medium
                  text-base leading-normal p-5"
                >
                  {p}{" "}
                </p>
                <button className=" mx-8 mt-10 border-2 border-black w-6 my-2 rounded-md font-medium text-center">
                  {bttn}
                </button>
              </div>
              <div className=" flex-col p-0 text-start">
                {<img src="" alt="" /> ? (
                  <img
                    src={img1}
                    className="max-w-4xlh-xl mix-blend-multiply my-3"
                  />
                ) : (
                  ""
                )}

                <br />
                {<img src="" alt="" /> ? (
                  <img
                    src={img2}
                    className="max-w-4xl h-2xl mix-blend-multiply my-3"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <br />
          </div>
        ))}
      </section>
    </>
  );
};

export default Card2;
