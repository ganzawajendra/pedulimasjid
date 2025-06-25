import ButtonLink from "../elements/Button";

const CardDetailLayout = () => {
  return (
    <div className="w-full bg-white mt-10 pb-13 rounded-xl shadow-lg border border-gray-300 overflow-hidden">
      <div className="relative h-64">
        <img
          src="/images/hero.png"
          alt="tes"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-5 px-10 grid grid-cols-2">
        <h3 className="text-xl font-semibold text-gray-800">MASJID AL-FATIH</h3>
        <div className="flex items-center mb-2 gap-2 row-start-2">
          <i class="fa-solid fa-location-dot text-gray-500 text-sm"></i>
          <p className="text-sm text-gray-500">Jl. Durian no. 45</p>
        </div>
        <div class="row-start-3">
          <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
            Terverifikasi
          </span>
        </div>
        <div className="col-start-2 row-span-4 border border-gray-300 rounded-lg p-3 row-start-1">
          <h4 className="text-sm font-medium text-gray-800">
            INFORMASI MASJID
          </h4>
          <div className="grid grid-cols-2 mt-3">
            <p className="text-xs text-gray-500">Donasi Terkumpul</p>
            <h3 className="text-md  text-gray-800 row-start-2">
              Rp. <span>1.000.000</span>
            </h3>
            <p className="text-xs text-gray-500 text-end">Target</p>
            <h3 className="text-md  text-gray-800 text-end row-start-2">
              Rp. <span>4.000.000</span>
            </h3>
            <div className="col-span-2 bg-gray-300 h-2 mt-3 rounded-full relative">
              <div className="absolute bg-blue-500 h-2 top-0 w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
        <h4 className="mt-4 text-sm font-medium text-gray-800 row-start-5">
          DESKRIPSI KEBUTUHAN
        </h4>
        <p className="px-4 w-full text-sm  col-span-2 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          impedit nesciunt, eos blanditiis consequatur veritatis nisi similique
          tempora neque, magnam ipsam laborum cumque unde qui, quasi pariatur
          quae! Velit eveniet dignissimos, tempore itaque eos facere pariatur
          maiores animi mollitia architecto voluptatum fuga voluptatem ratione
          nam dolore ipsa eaque doloremque perferendis debitis explicabo illo?
          Perspiciatis tempora nisi non veniam itaque nulla quibusdam, mollitia
          vitae facilis deleniti, delectus accusamus ratione ex nam! Voluptatum
          nisi omnis alias dicta eligendi? Odio, culpa reprehenderit dolor
          laudantium magni, ad incidunt sint amet et assumenda porro quos quia a
          saepe maxime alias quae quaerat quis veritatis natus.
        </p>
        <div className="flex row-start-7 col-start-2 justify-end">
          <ButtonLink router="/payment" variant="Black" style=" max-w-max py-2">
            Donasi Sekarang
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default CardDetailLayout;
