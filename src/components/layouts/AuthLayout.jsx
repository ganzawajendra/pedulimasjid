import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className=" grid grid-cols-2 mt-5">
          <div className="flex flex-col items-center justify-center gap-4  p-8 shadow-lg bg-neutral-200 transition-all
          lg:col-span-1 lg:rounded-bl-xl
          md:col-span-1 md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl
          sm:col-span-2 sm:rounded-tr-xl sm:rounded-bl-none sm:rounded-tl-xl
          max-sm:col-span-2 max-sm:rounded-tr-xl max-sm:rounded-bl-none max-sm:rounded-tl-xl">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <i className="fa-solid fa-mosque text-manual-white text-2xl"></i>
              <h1 className="text-manual-white font-semibold
              lg:text-2xl
              md:text-xl
              sm:text-lg
              max-sm:text-md">
                Peduli Masjid
              </h1>
            </div>
          </div>
          {children}
        </div>
    </>
  );
};

export default AuthLayout;
