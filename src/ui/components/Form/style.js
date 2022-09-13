import {createUseStyles} from "react-jss";

export const useStyle = createUseStyles({
    form: {
        "width": "100%",
        "display": "flex",
        "flexWrap": "wrap",
        "margin": "20px 0 20px 0",
        "boxSizing": "border-box"
    },
    input: {
        "width": "80%",
        "margin": "0 10px 0 0",
        "flex": "2 1 80%"
    }
})

export const buttonStyle = {
    padding: '10px'
}

export const errorStyle = {
    order: 1,
    width: "100%",
    margin: "5px 0 0 0",
}

