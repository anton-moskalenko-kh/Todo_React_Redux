import {Provider} from "react-redux";

import {store} from "../../engine/init/store";

import Wrapper from "./Wrapper";

function App() {
    return (
        <Provider store={store}>
            <Wrapper />
        </Provider>
    )
}

export default App