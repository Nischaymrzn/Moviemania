const table = ({ movieDetails }) => {
  return (
    <table className="mt-6 bg-white border rounded-md w-full">
      <tbody className="">
        <tr className="border">
          <td className="border pl-4">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">#</p>
            <p>1</p>
          </td>
          <td className="border">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
              Event Detail
            </p>
            <p>{movieDetails.movie}</p>
          </td>
          <td className="border">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
              Event Type
            </p>
            <p>Movie</p>
          </td>
          <td className="border">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
              Ticket
            </p>
            <p>X{movieDetails.ticketQty}</p>
          </td>
          <td className="border">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
              Unit Price
            </p>
            <p>NRS. {movieDetails.unitPrice}</p>
          </td>
          <td className="border">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
              Discount
            </p>
            <p>0</p>
          </td>
          <td className="border">
            <p className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
              Total
            </p>
            <p>NRS. {movieDetails.total}</p>
          </td>
        </tr>
      </tbody>

      <tfoot className="w-full text-black bg-white">
        <tr>
          <td className="text-xl text-right px-4" colSpan={7}>
            Invoice Total: NRS. {movieDetails.total}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default table;
