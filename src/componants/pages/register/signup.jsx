import "./signup.css";
export default function SignUp() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#f4ead5]">
      <div
        className="relative w-[70%] h-[70%] rounded-xl flex 
            items-center justify-center border-[1px] border-[#00000000]
            hover:border-black bg-white"
      >
        <div className="relative w-[60%] h-[90%] ml-5">
        <h1 className="top-[40px] text-[#35636c] text-3xl font-bold text-center p-[15px]">
          Register
        </h1>
          <input
            type="text"
            placeholder="Email address"
            className="w-[80%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          <div className="flex">
          <input
            type="text"
            placeholder="First Name"
            className="w-[40%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-[40%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          </div>
          <input
            type="text"
            placeholder="Mobile"
            className="w-[80%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          <input
            type="text"
            placeholder="Whatsapp"
            className="w-[80%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          <input
            type="Password"
            placeholder="Password"
            className="w-[80%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          <input
            type="Password"
            placeholder="Retype Password"
            className="w-[80%] bg-[#00000000] border-[1px] text-black px-[5px] h-[50px] mb-[5px] hover:border-black"
          />
          
        </div>
        <div className="relative w-[60%] h-[70%] mr-5 ml-5 regbg"></div>
      </div>
    </div>
  );
}
