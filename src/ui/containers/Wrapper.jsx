import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ErrorBoundary from "./ErrorBoundary";

//Core
import {setItem} from "../../engine/core/todo/slice";
import {selectors} from "../../engine/core/todo/selectors";

// Components
import MainForm from "../components/Form";
import Item from "../components/Item";
import Footer from "../components/Footer";

function Wrapper() {
    const dispatch = useDispatch()
    const items = useSelector(selectors.items)
    console.log(items)

    useEffect(() => {
        dispatch(setItem(JSON.parse(localStorage.getItem('items')) || []));
    }, [dispatch])

    const addItem = ({id, description}) => {
        const newItems = [...items, {id, description}];
        dispatch(setItem(newItems))
        localStorage.setItem('items', JSON.stringify(newItems))
    }

    return (
        <ErrorBoundary>
            <div className="container">
                <MainForm onAdd={addItem}/>
                <h2>Your Tasks:</h2>
                <div className="todos-wrapper">
                    {items.map(item => <Item key={item.id}
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