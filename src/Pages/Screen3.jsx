import React from "react";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { invoiceDetailsAdded } from "../reduxSetup/invoiceDetails";

export default function Screen3() {
  const shows = useSelector((state) => state.shows);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ticketQty, setTicketQty] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    const qty = shows.ticketQty;
    const price = shows.ticketPrice;
    const Movie = shows.selectedMovie;
    setTicketQty(qty);
    setTicketPrice(price);
    setSelectedMovie(Movie);
  }, []);
  function onSubmit(event) {
    event.preventDefault();
    const values = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      address: event.target.address.value,
      country: event.target.country.value,
      state: event.target.state.value,
      city: event.target.city.value,
      zipCode: event.target.code.value,
    };
    console.log(values);
    const tickets = [];
    const ticketDetails = {
      ticketQty,
      ticketType: shows.ticketType,
      unitPrice: ticketPrice,
      movie: selectedMovie,
      poster: shows.poster,
      total:
        Number(ticketPrice) * ticketQty +
        (Number(ticketPrice) * ticketQty * 13) / 100,
    };
    if (ticketQty > 1) {
      for (let i = 0; i < ticketQty; i++) {
        tickets.push({ ...ticketDetails, ticketQty: 1 });
      }
    }
    const data = {
      movie: { ...values, ...ticketDetails },
      tickets: ticketQty == 1 ? [ticketDetails] : tickets,
    };
    console.log(data);
    //dispatch to redux
    dispatch(invoiceDetailsAdded(data));

    localStorage.clear();
    navigate("/invoice");
  }
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
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="w-[90%] h-[500px] flex gap-[30px]">
            <div className="bg-background-secondary w-[65%] ">
              <div className="flex flex-col p-[21px] gap-[30px]">
                <p className="text-xl">Information</p>
                <div className="flex flex-col gap-2">
                  <p>Full Name</p>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="eg. Nischay Maharjan "
                    required
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
                      placeholder="eg. Nayabazar"
                      required
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4"
                    />
                  </div>
                </div>

                <div className="flex w-full gap-7">
                  <div className="flex flex-col gap-3">
                    <p>Country*</p>
                    <input
                      type="text"
                      name="country"
                      placeholder="eg. Nepal"
                      required
                      className="bg-[#1C1C24] text-white bg-inherit border rounded w-[368px] h-12 border-[#252D3C] p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      placeholder="eg. Bagmati"
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
                      placeholder="eg. Lalitpur"
                      className="bg-inherit border rounded w-[368px] h-11 border-[#252D3C] p-4"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>Zip/Post Code*</p>

                    <input
                      type="number"
                      name="code"
                      placeholder="eg. 2601"
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
