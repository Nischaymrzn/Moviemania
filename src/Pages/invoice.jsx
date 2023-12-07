import { v4 as uuidv4 } from "uuid";

import { format } from "date-fns";
import { usePDF } from "react-to-pdf";
import InvoiceTable from "../components/table";
import { useSelector } from "react-redux";

const Invoice = () => {
  const { toPDF, targetRef } = usePDF({ filename: "Ticket.pdf" });
  const ticketDetails = useSelector((state) => state.invoiceDetails);
  console.log(ticketDetails);

  return (
    <div className="flex flex-col items-center w-full">
      {ticketDetails ? (
        <div className="pb-6 bg-secondary w-full sm:w-[850px] flex flex-col justify-center items-center">
          <div
            className=" min-h-[29.7cm] w-full sm:w-[850px] overflow-hidden"
            ref={targetRef}
          >
            <div className="z-10 w-full px-6 py-6 text-xl font-semibold text-white bg-brand-primary">
              Moviemania
            </div>

            <div className="flex flex-col items-start p-6">
              <p className="text-lg font-semibold text-black">Invoice</p>

              <div className="flex items-start justify-between w-full mt-4 text-text-primary">
                <div className="flex flex-col gap-2">
                  <p>Invoice to {ticketDetails?.movie?.fullName}</p>

                  <p>
                    {ticketDetails?.movie?.address}
                    {", "}
                    {ticketDetails?.movie?.city}
                  </p>

                  <p>
                    {ticketDetails?.movie?.state}
                    {", "}
                    {ticketDetails?.movie?.country}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>ID: {uuidv4().slice(0, 8)}</p>

                  <p>Date: {format(new Date(), "dd MMMM yyyy")}</p>
                </div>
              </div>

              <InvoiceTable movieDetails={ticketDetails.movie} />

              <div className="mt-[4rem] w-full">
                {ticketDetails &&
                  ticketDetails.tickets &&
                  ticketDetails.tickets.map((ticket) => (
                    <div
                      key={ticket.total}
                      className="flex flex-col items-center justify-center gap-0 mt-0 w-full p-4"
                    >
                      <div className="flex items-center w-full gap-4 p-6 mb-8 -mt-12 bg-white border rounded-sm border-border">
                        <img
                          width={800}
                          height={800}
                          src={ticket.poster}
                          alt="error"
                          className="rounded-md w-28"
                        />

                        <div className="flex flex-col gap-2">
                          <p className="text-lg font-semibold text-black">
                            {ticket.movie}
                          </p>

                          <p className="text-text-primary">
                            {format(new Date(), "dd MMMM yyyy")}
                          </p>

                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-text-primary">
                              x1
                            </p>
                          </div>

                          <p className="text-text-primary">
                            Total:{" "}
                            <span className="font-semibold text-black">
                              {ticket.unitPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <button
            className="sm:w-[800px] w-1/2 p-3 font-semibold text-white rounded-sm bg-brand-primary"
            onClick={() => toPDF()}
          >
            Download
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Invoice;
