
import FormPayment from "../fragments/FormPayment";

const PaymentLayout = () => {
  return (
    <div className="transition-all overflow-hidden pb-13 mt-5 
    lg:rounded-xl lg:border lg:border-gray-200 lg:shadow-lg
    md:rounded-xl md:border md:border-gray-200 md:shadow-lg
    sm:rounded-xl sm:border sm:border-gray-200 sm:shadow-lg
    max-sm:rounded-none">
      <div className="flex items-stretch mb-6 rounded-lg">
        <div className="relative w-full overflow-hidden
        lg:h-70
        md:h-60
        sm:h-50
        max-sm:h-50">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-transparent">
            <img
              src="/images/hero.png"
              alt="Masjid Al-Fatih"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full ">
            <div>
              <h3 className="font-semibold text-gray-800
              lg:text-xl
              md:text-lg
              sm:text-md
              max-sm:text-sm">
                MASJID AL-FATIH
              </h3>
              <div className="flex items-center mb-2 gap-2 row-start-2">
                <i class="fa-solid fa-location-dot text-gray-500
                lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs"></i>
                <p className="text-gray-500
                lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">Jl. Durian no. 45</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 uppercase
              lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">
                Deskripsi Kebutuhan
              </h4>
              <p className="text-gray-600 line-clamp-3 overflow-hidden w-1/2 text-ellipsis
              lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci ea ipsam molestiae quidem exercitationem placeat
                voluptatem eligendi dolorem veniam iusto reprehenderit nisi
                maxime unde facilis cupiditate perspiciatis perferendis dic
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 uppercase
              lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">
                Kekurangan
              </h4>
              <p className="text-gray-600 
              lg:text-sm
                md:text-sm
                sm:text-xs
                max-sm:text-xs">
                Rp <span>5000000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FormPayment />
    </div>
  );
};

export default PaymentLayout;
