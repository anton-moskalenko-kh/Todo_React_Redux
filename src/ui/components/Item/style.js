import {createUseStyles} from "react-jss";

export const useStyle = createUseStyles({
    label: {
        "display": "flex",
        "justifyContent": "flex-start",
        "borderBottom": "1px solid #cbc4c4",
        "padding": "10px",
        "margin": "0 0 10px 0"
    },
    updateBlock: {
        "width": "100%",
        "display": "flex",
        "margin": "0 0 0 10px"
    },
    desc: {
        "flex": "4",
        "alignSelf": "center",
        "margin": "0 0 0 10px"
    },
    descChecked: {
        "opacity": "0.3"
    }
})
