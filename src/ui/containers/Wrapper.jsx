import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ErrorBoundary from "./ErrorBoundary";

//Core
import Selector from "../../engine/core/todo/selectors";
import {getItems} from "../../engine/core/todo/thunks";

// Components
import MainForm from "../components/Form/Form";
import Item from "../components/Item/Item";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search";
import {setSearch} from "../../engine/core/todo/slice";

//Style
import {TransitionGroup, CSSTransition} from "react-transition-group";

function Wrapper() {
    const dispatch = useDispatch()
    const memoItems = useSelector(Selector.memoItems)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value))
    }

    return (
        <ErrorBoundary>
            <div className="container">
                <MainForm />
                <Search onChange={handleChange} />
                <TransitionGroup component='ul' className="todos-wrapper">
                    {memoItems?.map(item => (
                        <CSSTransition
                            key={item.id}
                            classNames='todos'
                            timeout={1000}
                        >
                            <Item checked={item.checked}
                                  id={item.id}
                                  description={item.description}
                            />
                        </CSSTransition>
                        ))}
                </TransitionGroup>
                <Footer/>
            </div>
        </ErrorBoundary>
    )
}

export default Wrapper