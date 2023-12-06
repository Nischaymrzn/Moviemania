import React from "react";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Screen3() {
  const navigate = useNavigate();

  const [ticketQty, setTicketQty] = useState(null);
  const [ticketPrice, setTicketPrice] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState("");

  const location = useLocation();
  if (location.length > 0) {
    useEffect(() => {
      const qty = location.state.ticketQty;
      const price = location.state.ticketPrice;
      const Movie = location.state.selectedMovie;
      setTicketQty(qty);
      setTicketPrice(price);
      setSelectedMovie(Movie);
    }, []);
  }

  //   setTicketQty(value);

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <img src={arrow} alt="" className="w-8 m-7 mb-0 mt-4" />
      </button>

      <div className="text-white flex flex-col justify-between m-[2rem] ml-[5rem] mt-[0px]">
        <div className="w-full">
          <p className="text-2xl font-semibold">Order Confirmation</p>
          <hr className="w-[90%] h-[1.5px] my-3 mb-4 bg-gray-600 border-0 rounded dark:bg-gray-900" />
        </div>
        <form action="">
          <div className="w-[90%] h-[500px] flex gap-[30px]">
            <div className="bg-background-secondary w-[65%] ">
              <div className="flex flex-col p-[21px] gap-[30px]">
                <p className="text-xl">Information</p>
                <div className="flex flex-col gap-2">
                  <p>Full Name</p>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="eg: Nischay Maharjan "
                    className="bg-inherit border rounded w-full h-11 border-[#252D3C] p-4"
                  />
                </div>
                <div className="flex w-full gap-7">
                  <div className="flex flex-col gap-3">
                    <p>Email*</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="eg. nischaymaharjann@xyz.com"
                      required
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4 hover:none"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>Address*</p>
                    <input
                      type="text"
                      name="address"
                      required
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-7">
                  <div className="flex flex-col gap-3">
                    <p>Country*</p>
                    <select
                      name="country"
                      id="country"
                      className="bg-[#1C1C24] text-white bg-inherit border rounded w-[368px] h-12 border-[#252D3C] p-2"
                    >
                      <option
                        value="Nepal"
                        className=" bg-[#1C1C24] rounded w-[368px] h-11  p-4"
                      >
                        Nepal
                      </option>
                      <option
                        value="India"
                        className="bg-[#1C1C24] rounded w-[368px] h-11  p-4"
                      >
                        India
                      </option>
                      <option
                        value="China"
                        className="bg-[#1C1C24] border rounded w-[368px] h-11  p-4"
                      >
                        China
                      </option>
                      <option
                        value="America"
                        className="bg-[#1C1C24] border rounded w-[368px] h-11  p-4"
                      >
                        America
                      </option>
                      <option
                        value="Australia"
                        className="bg-[#1C1C24] border rounded w-[368px] h-11  p-4"
                      >
                        Australia
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>State</p>
                    <input
                      type="number"
                      name="state"
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-7">
                  <div className="flex flex-col gap-3">
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>Zip/Post Code*</p>
                    <input
                      type="number"
                      name="code"
                      required
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-[90%] p-7 border rounded-md flex flex-col gap-4 bg-background-secondary border-dark-border">
              <p className="text-2xl font-semibold">Checkout Summary</p>

              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">{selectedMovie}</p>

                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <p>Movie</p>

                  <div className="w-2 h-2 rounded-full bg-text-secondary"></div>

                  <p>Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="uppercase text-text-secondary">ticketType</p>
                  <p>X{ticketQty}</p>
                  <p className="font-semibold">NRS. {ticketPrice}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-text-secondary">Sub Total</p>
                  <p className="font-semibold">
                    NRS. {Number(ticketPrice) * ticketQty}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-text-secondary">Tax (13%)</p>
                  <p className="font-semibold">
                    NRS. {(Number(ticketPrice) * ticketQty * 13) / 100}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-text-secondary">Discount (0%)</p>
                  <p className="font-semibold">NRS. 0</p>
                </div>
              </div>

              <div className="flex items-center justify-between my-2">
                <p className="text-lg text-text-secondary">Total</p>

                <div className="flex items-center gap-2">
                  <p className="text-text-secondary">NRS</p>

                  <p className="text-2xl font-semibold">
                    {Number(ticketPrice) * ticketQty +
                      (Number(ticketPrice) * ticketQty * 13) / 100}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full gap-6 mt-2">
                <button
                  type="submit"
                  className="w-full py-3 font-semibold rounded-md bg-brand-primary"
                >
                  Confirm & pay
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
