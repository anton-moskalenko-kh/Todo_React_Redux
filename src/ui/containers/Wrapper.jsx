import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ErrorBoundary from "./ErrorBoundary";

//Core
import {selectors} from "../../engine/core/todo/selectors";
import {getItems} from "../../engine/core/todo/thunks";

// Components
import MainForm from "../components/Form";
import Item from "../components/Item";
import Footer from "../components/Footer";
import {setItem} from "../../engine/core/todo/slice";

function Wrapper() {
    const dispatch = useDispatch()
    const items = useSelector(selectors.items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    return (
        <ErrorBoundary>
            <div className="container">
                <MainForm />
                <h2>Your Tasks:</h2>
                <div className="todos-wrapper">
                    {items.map(item => <Item key={item.id}
                                             checked={item.checked}
                                             id={item.id}
                                             description={item.description}
                        />
                    )}
                </div>
                <Footer/>
            </div>
        </ErrorBoundary>
    )
}

export default Wrapper