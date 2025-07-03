import React, { useEffect, useState } from "react";
import FormInput from "../elements/FormInput";
import FormSelectInput from "../elements/FormSelectInput";
import FormSubmit from "../elements/FormSubmit";
import { payment, paymentToLocalStorage } from "../../services/payment.service";
import { useNavigate } from "react-router-dom";
import { handleInput } from "../../services/input.service";
import axios from "axios";

const FormPayment = ({ id }) => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("user"));
  const optionValue = ["Transfer Bank", "E-Wallet", "Qris"];

  const [error, setError] = useState("");
  const [dataMasjid, setDataMasjid] = useState(null);
  const [datapayment, setDataPayment] = useState(null); // belum diisi sampai masjid ready

  useEffect(() => {
    const fetchMasjidById = async () => {
      try {
        const response = await axios.get("/mock-db.json");
        const result = response.data.masjid.find((item) => item.id === id);
        setDataMasjid(result);
      } catch (err) {
        console.error("Terjadi kesalahan saat mengambil data masjid:", err);
        setError("Gagal memuat data masjid.");
      }
    };

    fetchMasjidById();
  }, [id]);

  useEffect(() => {
    if (dataMasjid) {
      setDataPayment({
        donatur_id: data.id,
        donatur_name: data.name,
        masjid_id: dataMasjid.id,
        masjid_name: dataMasjid.name,
        masjid_address: dataMasjid.address,
        masjid_demand: dataMasjid.demand,
        masjid_url: dataMasjid.url,
        amount: "",
        metode: "",
        created_at: new Date().toISOString().slice(0, 10),
      });
    }
  }, [dataMasjid]);

  const onInput = (e) => {
    handleInput(e, datapayment, setDataPayment);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!datapayment.amount || !datapayment.metode)
      return setError("Semua field harus diisi");
    
    try {
      paymentToLocalStorage(datapayment);
      navigate("/receipt");
    } catch (error) {
      console.error("Terjadi kesalahan saat pembayaran:", error);
      setError("Pembayaran gagal.");
    }finally{
      setDataPayment((prev) => ({
        ...prev,
        amount: "",
        metode: "",
      }));
    }
  };

  return (
    <div className="p-5 w-full flex items-center flex-col ">
      <h3
        className="font-semibold text-gray-800 text-center mb-2
        lg:text-2xl 
        md:text-lg
        sm:text-md
        max-sm:text-sm"
      >
        Donasi Sekarang
      </h3>
      <form
        onSubmit={handlePayment}
        className="flex flex-col gap-3
      lg:w-1/2
      md:w-3/4
      sm:w-full
      max-sm:w-full"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <FormInput
          type="number"
          name="amount"
          placeholder="Masukkan Nominal"
          onChange={onInput}
        >
          Nominal Donasi
        </FormInput>
        <FormSelectInput name="metode" option={optionValue} onChange={onInput}>
          Pilih Metode Pembayaran
        </FormSelectInput>
        <div className="w-full flex items-center justify-end">
          <FormSubmit value="Bayar" name="bayar" style=" max-w-max px-7" />
        </div>
      </form>
    </div>
  );
};

export default FormPayment;
