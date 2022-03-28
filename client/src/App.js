import Header from "./components/Header";
import './index.css'
import ListOfCats from "./components/ListOfCats";
import ListOfGoods from "./components/ListOfGoods";
import {Route, Routes} from "react-router-dom";
import AdminPage from "./components/AdminPage";
import NewOrder from "./components/newOrder";

function App() {
    return (
        <div className="App">
            <Header/>

            <ListOfCats/>


            <Routes>
                <Route path='/cat/:id' element={<ListOfGoods/>}/>
                <Route path='/order/new/:id' element={<NewOrder/>}/>

                <Route path='/admin' element={<AdminPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
