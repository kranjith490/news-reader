import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./Redux/store";
import Home from "./Pages/Home/Home";
import Publisher from "./Pages/Publisher/Publisher";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Publisher" element={<Publisher />}>
          <Route path=":PublisherName" element={<Publisher />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
