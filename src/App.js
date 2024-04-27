import { Route, Routes } from 'react-router-dom';
import Manage from "./Components/manage/manage";
import Adduser from "./Components/adduser/adduser";
import Updateuser from "./Components/updateuser/updateuser";
import NoMatch from "./Components/nomatch/nomatch";
import Header from "./Components/header/header";
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Manage></Manage>}></Route>
      <Route path="/user" element={<Adduser></Adduser>}></Route>
      <Route path="/user/:id" element={<Updateuser></Updateuser>}></Route>
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
    </Routes>
    </>
  );
}

export default App;
