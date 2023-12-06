import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import calender from "../assets/Calender.png";
import location from "../assets/location.png";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const { id } = useParams();
  const show = useLoaderData();
  console.log(show);
  const navigate = useNavigate();

  const [ticketQty, setTicketQty] = useState(1);
  const [ticketPrice, setTicketPrice] = useState(show.ticketPriceNormal);

  const ticketsChange = (event) => {
    const ticketType = event.target.value;
    if (ticketType == "Vip") {
      setTicketPrice(show.ticketPriceVip);
    } else {
      setTicketPrice(show.ticketPriceNormal);
    }
  };

  return (
    <div>
      <Link to="/">
        <img src={arrow} alt="" className="w-9 m-7" />
      </Link>

      <div className="text-white flex justify-between m-[5rem] mt-1">
        <div key={show.id} className="flex flex-col gap-6">
          <div className="relative">
            <img
              src={show.poster}
              alt="error"
              className="w-[20rem] object-cover rounded-lg cursor-pointer border-dark-border aspect-[16/19]"
            />

            <p className="absolute top-0 right-0 px-4 py-2 m-2 font-semibold capitalize rounded-md transparent">
              {show.type}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">{show.title}</p>

            <div className="flex items-center gap-3 text-sm">
              <p>{show.released}</p>

              <div className="w-2 h-2 rounded-full bg-text-secondary"></div>

              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-[400px]  border-dark-border p-6 flex flex-col bg-background-secondary border rounded-md"
        >
          <p className="text-xl font-semibold">Event Details</p>
          <hr className="w-90 h-[1.5px] my-4 mb-5 bg-gray-600 border-0 rounded dark:bg-gray-900" />

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-3 rounded-full bg-background-tertiary">
              <img src={calender} alt="error" className="w-4" />
            </div>

            <div className="flex flex-col ">
              <p className="text-sm font-medium text-text-secondary">
                Date and Time
              </p>
              <p className="font-medium">Wed, Dec 6, 2023 11:30 AM</p>
            </div>
          </div>
          <hr className="w-90 h-[1.5px] mt-4 bg-gray-600 border-0 rounded dark:bg-gray-900" />

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-3 rounded-full bg-background-tertiary">
              <img src={location} alt="error" className="w-4" />
            </div>

            <div className="flex flex-col">
              <div className="pt-[30px] mb-3">
                <p className="text-sm font-medium text-text-secondary">
                  Location
                </p>
                <p>Kathmandu, Nepal</p>
              </div>
              <p className="text-red-400 hover:cursor-pointer hover:underline">
                View on map
              </p>
            </div>
          </div>
          <hr className="w-90 h-[1.5px] my-4 bg-gray-600 border-0 rounded dark:bg-gray-900" />

          <div>
            <div className="flex gap-2">
              <p className="text-2xl font-semibold ">Select Tickets:</p>
              <select
                name="ticket"
                id="select"
                className="bg-[#1C1C24] border-[#252D3C] border text-xl px-2 rounded-xl"
                onChange={ticketsChange}
              >
                <option value="normal" className="bg-[#1C1C24]">
                  Normal
                </option>
                <option value="Vip" className="bg-[#1C1C24]">
                  Vip
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 mt-2">
              <div className="flex flex-col gap-2">
                <p className="text-text-secondary">1x Ticket(s)</p>

                <p className="text-2xl font-semibold">NRS.{ticketPrice}</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  disabled={ticketQty == 1}
                  type="button"
                  onClick={() =>
                    ticketQty > 1 && setTicketQty((prev) => prev - 1)
                  }
                  className="mr-2 flex items-center justify-center w-8 h-8 p-2 text-3xl text-white border rounded-md disabled:cursor-not-allowed border-dark-border bg-background-tertiary"
                >
                  -
                </button>
                <input
                  type="text"
                  disabled
                  className="w-8 text-xl font-semibold bg-background-secondary"
                  value={ticketQty}
                />

                <button
                  disabled={ticketQty == 10}
                  type="button"
                  onClick={() =>
                    ticketQty <= 9 && setTicketQty((prev) => prev + 1)
                  }
                  className=" flex items-center justify-center w-8 h-8 p-2 text-2xl text-white border rounded-md disabled:cursor-not-allowed border-dark-border bg-brand-primary"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            className="w-full py-3 font-semibold rounded-sm bg-brand-primary"
            type="submit"
            onClick={() =>
              navigate("/screen3", {
                state: {
                  ticketQty: ticketQty,
                  ticketPrice: ticketPrice,
                  selectedMovie: show.title,
                },
              })
            }
          >
            Checkout for NRS.{ticketQty * ticketPrice}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Screen2;

//Loader Function

export const showsDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    "https://ticket-server-31jc.onrender.com/api/movies/" + id
  );
  const data = await response.json();
  return data;
};
