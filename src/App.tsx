import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthComponent from "./auth/AuthComponent";

function App() {
  return (
    <div className="relative flex w-screen h-screen flex flex-col bg-bg-primary text-text-primary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthComponent />} />
          <Route path="/home" element={<div>hi</div>} />
          <Route path="/editor" element={<div>editor</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
