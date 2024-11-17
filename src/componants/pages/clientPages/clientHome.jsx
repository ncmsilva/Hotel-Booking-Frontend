import Header from "../../header/header";

export default function UserHome() {
  return (
    <div className="w-full max-h-[100vh] overflow-hidden overflow-y-hidden flex flex-col">
      <Header />
      <div className="h-screen w-full bg-[#DAE2B6] relative flex-col">
        {/* <div className='absolute inset-0'> */}
        <div className="inset-0">
          <img
            className="w-full h-full object-cover" // Ensures the image covers the whole screen without distortion
            src="https://www.templetreeresortandspa.com/img/home/07.jpg"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}
