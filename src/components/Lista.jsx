export default function Lista(props) {
    return (
        <ul>
          {props.productos.map(producto => (
            <li>{producto}</li>
          ))}
        </ul>
      )
}