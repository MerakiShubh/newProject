import React, { useEffect, useState } from "react";
import { createRoom } from "../api/services/room.service.js";

const MeetDashboard = () => {
  const [roomName, setRoomName] = useState("");
  const [loading, setLoading] = useState(false);
  const createInstantMeet = async () => {
    try {
      console.log("room creation called ---->");
      setLoading(true);
      const res = await createRoom();
      if (res) {
        console.log("room ------>", res);
      }
    } catch (error) {
      console.error("Error while creating room", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-blue-300 w-screen h-screen">
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-between  h-50 w-90">
            <button className="w-32 h-14 rounded-lg text-center bg-white font-semibold cursor-pointer hover:font-bold hover:p">
              Sechdule Meet
            </button>
            <button
              className="w-40 h-14 rounded-lg text-center bg-white font-semibold cursor-pointer hover:font-bold hover:p"
              onClick={createInstantMeet}
            >
              {loading ? "Creating Room..." : " Create Instant Meet"}
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
