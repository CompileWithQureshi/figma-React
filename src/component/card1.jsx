const Cards = () => {
  const datas = [
    {
      id: 1,
      h1: "Toolbar",
      p: "It’s at the bottom of your screen, with stickies, stamps, and anything you need.",
      img1: "./1-frame-1.png",
      img2: "./1-frame-2.png",
    },
    {
      id: 2,
      h1: "Move and Zoom",
      p: "Holding Spacebar, use the hand tool to pan around. Zoom controls are in the top right corner..",
      img1: "./2-frame-1.png",
      img2: "./2-frame-2.png",
    },
    {
      id: 3,
      h1: "Move Work with your teamand Zoom",
      p: "FigJam’s better with others. Click the Share button above to invite your team..",
      img1: "./3-frame-1.png",
    },
  ];
  return (
    <>
      <section>
        {datas.map(({ id, h1, p, img1, img2 }) => (
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

export default Cards;
