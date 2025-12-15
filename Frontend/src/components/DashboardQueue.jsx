import { IoClose } from "react-icons/io5";

const DashboardQueue = ({ queueData, setQueueData }) => {
  const handleStatus = (currentStatus, id) => {
    if (currentStatus === "waiting") {
      setQueueData(
        queueData.map((ele, idx) =>
          idx === id ? { ...ele, status: "serving" } : ele
        )
      );
    }
    if (currentStatus === "serving") {
      setQueueData(
        queueData.map((ele, idx) =>
          idx === id ? { ...ele, status: "completed" } : ele
        )
      );
    }
  };

  const deleteTask = (id) => {
    setQueueData(queueData.filter((ele, idx) => idx !== id));
  };

  return (
    <div className="w-4/5 bg-zinc-700 rounded-md flex flex-col gap-5 items-baseline p-8">
      <h4 className="text-xl text-white font-bold">Dashboard Queue</h4>
      {queueData.length ? (
        <div
          id="scrollable-queue-list"
          className="w-full px-5 py-1 flex flex-col gap-5 min-h-40 max-h-96 custom-scrollbar overflow-y-auto"
        >
          {queueData.map((ele, idx) => (
            <div
              key={idx}
              id={idx}
              className="w-full flex justify-between bg-zinc-900 p-3 rounded-md"
            >
              <div>
                <h5 className="text-xl font-semibold">{ele.title}</h5>
                <p className={`text-sm text-zinc-400 py-1`}>
                  Service: {ele.service}
                </p>
                <small
                  className={`${ele.status === "waiting" && "text-orange-400"} 
                    ${ele.status === "serving" && "text-blue-500"}
                      ${ele.status === "completed" && "text-green-600"}
                      tracking-wide
                      `}
                >
                  {ele.status}
                </small>
              </div>
              <div className="flex items-center gap-3">
                {ele.status === "waiting" ? (
                  <button
                    onClick={() => handleStatus(ele.status, idx)}
                    className="px-4 py-2 rounded-md bg-green-600 font-semibold cursor-pointer active:scale-95 ease-in duration-150"
                  >
                    Serve
                  </button>
                ) : ele.status === "serving" ? (
                  <button
                    onClick={() => handleStatus(ele.status, idx)}
                    className="px-4 py-2 rounded-md bg-blue-500 font-semibold cursor-pointer active:scale-95 ease-in duration-150"
                  >
                    Complete
                  </button>
                ) : (
                  ""
                )}
                <button
                  onClick={() => deleteTask(idx)}
                  className="px-2 py-2 bg-red-500 rounded-md cursor-pointer active:scale-95 ease-in duration-150"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-40 flex items-center justify-center">
          <p>No Data</p>
        </div>
      )}
    </div>
  );
};

export default DashboardQueue;
