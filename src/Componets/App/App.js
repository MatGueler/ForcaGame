import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "../InitialPage/InitialPage";
import Mode from "../Mode/Mode";
import Game from "../Game/Game";
import WordContext from '../Contexts/WordContext'
import { useState } from "react";


function App() {

  const [word, setWord] = useState('')

  return (
    <BrowserRouter>
      <WordContext.Provider value={{ word, setWord }}>
        <Routes>

          <Route path='/' element={<InitialPage />} />
          <Route path='/modo' element={<Mode />} />
          <Route path='/game' element={<Game />} />

        </Routes>
      </WordContext.Provider>
    </BrowserRouter>
  );
}

export default App;
