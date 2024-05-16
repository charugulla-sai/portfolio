export default function Hero() {
  return (
    <>
      <main className="w-full">
        <div className="max-w-[900px] mx-auto  p-5 flex gap-4 justify-between items-center">
          <div className="text_box max-w-md flex flex-col gap-5">
            <h1 className="font-bold text-5xl">Front-end React Developer 👋🏻</h1>
            <p>
              Hi, I'm Charugulla Sai. A passionate Front-end React developer
              based in Hyderabad, Telangana. 📍
            </p>
          </div>
          <div className="image_box max-w-80 rounded-[50%] overflow-hidden">
            <img className="w-full" src="src\img\ai image.png" />
          </div>
        </div>
        <div className="max-w-[900px] mx-auto flex justify-start p-5 items-center">
          <p className="tech_text_box font-bold">Tech stack : </p>
          <div className="icons"></div>
        </div>
      </main>
    </>
  );
}
