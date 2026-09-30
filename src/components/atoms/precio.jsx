function precio(props) {
    const newPrecio = props.precio + (props.precio * 0.15)
    return <p>${newPrecio}</p>
}