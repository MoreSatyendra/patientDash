import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Navbar from "./scenes/global/Navbar";
// import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Appointment from "./scenes/appoint";
import Contacts from "./scenes/patients";
import MeetingInfo from "./scenes/infomeeting";
import ProfileUpdate from "./scenes/updateprofile";
import Line from "./scenes/line";
import Calendar from "./scenes/calendar";
import DoctorList from "./scenes/DoctorList";
import MedicalRecord from "./scenes/MedicaRecords";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          {/* <Sidebar /> */}
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/appoint" element={<Appointment />} />
              <Route path="/patientlist" element={<Contacts />} />
              <Route path="/infomet" element={<MeetingInfo />} />
              <Route path="/profileupdate" element={<ProfileUpdate />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/doclist" element={<DoctorList />} />
              <Route path="/medical_records" element={<MedicalRecord />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
