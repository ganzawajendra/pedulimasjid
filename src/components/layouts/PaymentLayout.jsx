
import FormPayment from "../fragments/FormPayment";

const PaymentLayout = () => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-xl overflow-hidden pb-13 mt-10">
      <div className="flex items-stretch mb-6 rounded-lg">
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-transparent">
            <img
              src="/images/hero.png"
              alt="Masjid Al-Fatih"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full ">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                MASJID AL-FATIH
              </h3>
              <div className="flex items-center mb-2 gap-2 row-start-2">
                <i class="fa-solid fa-location-dot text-gray-500 text-sm"></i>
                <p className="text-sm text-gray-500">Jl. Durian no. 45</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-800 uppercase">
                Deskripsi Kebutuhan
              </h4>
              <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden w-1/2 text-ellipsis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci ea ipsam molestiae quidem exercitationem placeat
                voluptatem eligendi dolorem veniam iusto reprehenderit nisi
                maxime unde facilis cupiditate perspiciatis perferendis dic
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-800 uppercase">
                Kekurangan
              </h4>
              <p className="text-sm text-gray-600 ">
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
