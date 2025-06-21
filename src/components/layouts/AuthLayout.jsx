import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4  p-8 rounded-tl-lg rounded-bl-lg  shadow-lg bg-neutral-200">
            <div className="w-full text-left">
              <Link
                to="/"
                className="text-manual-white font-semibold text-sm "
              >
                <i className="fa-solid fa-arrow-left"></i> {" "}
                Kembali
              </Link>
            </div>
            <div className="w-full h-full  flex items-center justify-center flex-col">
              <i className="fa-solid fa-mosque text-manual-white text-2xl"></i>
              <h1 className="text-manual-white text-2xl font-semibold">
                Peduli Masjid
              </h1>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
