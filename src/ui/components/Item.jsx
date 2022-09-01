function Item(props) {
    const {description, id} = props

    return (
        <div className="todo-item">
            <label className="todo-item__label">
                <p className=''>{description}</p>
            </label>
        </div>
    )
}

export default Item