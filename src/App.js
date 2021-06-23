import React from "react";
import './App.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./reducers";
import User from "./components/user"

const store = createStore(allReducers);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <User />
        </Provider>
    );
  }
}

export default App;