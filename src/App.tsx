import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./features/redux";
import Router from "./router/Router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
