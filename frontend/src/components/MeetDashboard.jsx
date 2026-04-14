import React from "react";

const MeetDashboard = () => {
  const createInstantMeet = () => {};
  return (
    <>
      <div className="bg-blue-300 w-screen h-screen">
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-between  h-50 w-90">
            <button
              className="w-32 h-14 rounded-lg text-center bg-white font-semibold cursor-pointer hover:font-bold hover:p"
              onClick={createInstantMeet}
            >
              Sechdule Meet
            </button>
            <button className="w-40 h-14 rounded-lg text-center bg-white font-semibold cursor-pointer hover:font-bold hover:p">
              Create Instant Meet
            </button>
          </div>
        </div>
        <div className="ml-[32rem] flex gap-2">
          <input
            type="text"
            placeholder="Enter room name"
            className="bg-white p-6 rounded-lg font-bold text-lg"
          />
          <button className="w-32 h-18 rounded-lg bg-white cursor-pointer">
            Join Room
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetDashboard;
