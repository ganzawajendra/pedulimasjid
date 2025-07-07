import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className=" grid grid-cols-2 mt-5">
        <div
          className="flex flex-col items-center justify-center gap-4  p-8 shadow-lg bg-neutral-200 transition-all
          lg:col-span-1 lg:rounded-bl-xl
          md:col-span-1 md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl
          sm:col-span-2 sm:rounded-tr-xl sm:rounded-bl-none sm:rounded-tl-xl
          max-sm:col-span-2 max-sm:rounded-tr-xl max-sm:rounded-bl-none max-sm:rounded-tl-xl"
        >
          <div className="w-full h-full flex items-center justify-center flex-col ">
            <i className="fa-solid fa-mosque text-manual-white text-2xl apearZoom"></i>
            <div className="overflow-hidden">
              <h1
                className="text-manual-white font-semibold apearUpDown
              lg:text-2xl
              md:text-xl
              sm:text-lg
              max-sm:text-md"
              >
                Peduli Masjid
              </h1>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="flex items-center justify-center my-5 ">
        <div
          className="bg-green-200 border-2 rounded-xl border-green-500 p-3
        lg:w-1/2
        md:w-3/4
        sm:w-full
        max-sm:w-full"
        >
          <h2 className="font-semibold text-green-800
          lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm max-sm:font-bold">Login</h2>
          <div className="max-w-max mx-auto p-2 rounded-lg">
            <h4 className="text-center
            lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">if you try to login as Admin</h4>
            <div className="bg-neutral-100 p-3 rounded-lg max-w-max">
              <p className="font-mono
              lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">
                email : <span>admin@gmail.com</span>
              </p>
              <p className="font-mono
              lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">
                password : <span>123</span>
              </p>
            </div>
          </div>
          <div className="max-w-max mx-auto p-2 rounded-lg">
            <h4 className=" text-center
            lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">if you try to login as Pengurus</h4>
            <div className="bg-neutral-100 p-3 rounded-lg max-w-max">
              <p className="font-mono
              lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">
                email : <span>pengurus1@gmail.com</span>
              </p>
              <p className="font-mono
              lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">
                password : <span>123</span>
              </p>
            </div>
          </div>
          <div className="max-w-max mx-auto p-2 rounded-lg">
            <h4 className="text-center
            lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">if you try to login as User (flexible)</h4>
            <div className="bg-neutral-100 p-3 rounded-lg max-w-max">
              <p className="font-mono
              lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs">
                email and password : <span>register</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
