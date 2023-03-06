/*import router en routes*/
import { Route, Routes } from 'react-router';

/*import pages*/
import Homepage from "../client/Pages/Homepage/Homepage";
import StageBlog1page from "../client/Pages/Stageblog1page/Stageblog1page"
import StageBlog2page from '../client/Pages/StageBlog2page/Stageblog2';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/stageblog1" element={<StageBlog1page/>}></Route>
      <Route path="/stageblog2" element={<StageBlog2page/>}></Route>
    </Routes>
    </>
  );
}

export default App;
