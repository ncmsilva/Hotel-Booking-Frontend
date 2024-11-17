import Header from "../../header/header";

export default function ContactUs(){
    return(
        <div>
            <div className='h-screen w-full bg-[#DAE2B6] relative flex-col'>
            <Header/>
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className="basis-1/2 flex-col items-center">
                <p className="">
                  Hotel Management System.                  
                </p>
                <br/>
                <p>
                  Address :
                </p>
                <p>
                  No 25,
                  3rd Cross,
                  1st Main,
                  1st Block,
                  Koramangala,
                  Bangalore-560034
                </p>
                <br/>
                <p>
                  Tel :
                </p>
                <p>
                  0725698745
                </p>
              </div>
              {/* <h1 className='text-[70px] text-[#FFFBE9]'>Page Under Maintenance.</h1> */}
            </div>
          </div>
        </div>
    )
}