import React from "react";

const MeetDashboard = () => {
  return (
    <>
      <div className="bg-blue-300 w-screen h-screen flex justify-center items-center">
        <div className="flex items-center justify-between  h-50 w-90">
          <button className="w-32 h-14 rounded-lg text-center bg-white font-semibold cursor-pointer hover:font-bold hover:p">
            Sechdule Meet
          </button>
          <button className="w-40 h-14 rounded-lg text-center bg-white font-semibold cursor-pointer hover:font-bold hover:p">
            Create Instant Meet
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetDashboard;
