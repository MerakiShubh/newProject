import { useEffect } from "react";
import { SocketProvider } from "./context/SocketContext";
import MeetDashboard from "./components/MeetDashboard";
function App() {
  useEffect(() => {
    console.log("hello i m react");
  }, []);
  return (
    <>
      <SocketProvider>
        <MeetDashboard />
      </SocketProvider>
    </>
  );
}

export default App;
