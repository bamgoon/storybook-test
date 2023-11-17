import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<>App</>} />
        <Route path="/test" element={<>Test</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
