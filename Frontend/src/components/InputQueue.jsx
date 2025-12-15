import { useState } from "react";

const InputQueue = ({ queueData, setQueueData }) => {
  const [selectServices, setSelectServices] = useState("");
  const [customerName, setCustomerName] = useState("");

  const services = [
    { value: "payment", label: "Payment Service" },
    { value: "consultation", label: "Consultation Service" },
    { value: "support", label: "Support Service" },
  ];

  const handleSelectService = (e) => {
    setSelectServices(e.target.value);
  };

  const handleFormSubmit = () => {
    if (!customerName.trim()) return;
    if (!selectServices) return;
    setCustomerName("");
    setSelectServices("");
    const obj = new Object();
    obj.title = customerName.trim();
    obj.service = selectServices;
    obj.status = "waiting";

    setQueueData([...queueData, obj]);
  };

  return (
    <div className="w-1/4 h-72 relative bg-zinc-700 rounded-md flex flex-col gap-5 items-baseline px-10 py-8">
      <h4 className="text-2xl text-blue-500 font-bold">Add to Queue</h4>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        className="w-full bg-zinc-900 text-white px-4 py-3 text-sm font-semibold outline-none tracking-wide rounded-md"
      />
      <select
        id="services-select"
        value={selectServices}
        onChange={handleSelectService}
        // 2. The Select Styling
        className="
          w-full 
          appearance-none               /* Removes default browser arrow */
          bg-zinc-800                   /* Background matches your request */
          text-zinc-100                 /* Light text for readability */
          border-zinc-600        /* Subtle  definition */
          rounded-lg                    /* Softer corners */
          py-3 px-4 pr-10               /* Padding (Right padding for the arrow) */
          leading-tight                 /* Better text alignment */
          cursor-pointer
          shadow-md
        "
      >
        <option value="" disabled hidden>
          -- Select Service --
        </option>

        {services.map((ele, idx) => (
          <option
            key={idx}
            value={ele.value}
            // 3. Option Styling (Note: Browser support is limited here)
            className="bg-zinc-800 text-zinc-100 py-2"
          >
            {ele.label}
          </option>
        ))}
      </select>

      {/* 4. Custom Arrow Icon (Absolute Positioned) */}
      <div className="pointer-events-none absolute inset-y-0 top-13 right-10 flex items-center px-3 text-zinc-400">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      <button
        onClick={handleFormSubmit}
        className="w-full bg-blue-700 text-white py-2 rounded-md font-semibold tracking-wide cursor-pointer active:scale-95 ease-in duration-150"
      >
        Add Customer
      </button>
    </div>
  );
};

export default InputQueue;
