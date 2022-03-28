import Header from "./components/Header";
import './index.css'
import ListOfCats from "./components/ListOfCats";
import ListOfGoods from "./components/ListOfGoods";
import {Route, Routes} from "react-router-dom";
import AdminPage from "./components/AdminPage";

function App() {
    return (
        <div className="App">
            <Header/>

            <ListOfCats/>


            <Routes>
                <Route path='/cat/:id' element={<ListOfGoods/>}/>

                <Route path='/admin' element={<AdminPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
