import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "../InitialPage/InitialPage";
import Mode from "../Mode/Mode";
import Game from "../Game/Game";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/modo' element={<Mode />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
