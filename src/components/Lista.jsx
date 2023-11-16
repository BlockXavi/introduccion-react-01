export default function Lista(props) {
    return (props.productos.length === 0?
      <p>No hay elementos en la lista</p>  
      :
      <ul>{props.productos.map(producto => (<li>{producto}</li>))}</ul>
    )
}