import { productos } from '../../constants/productos'
import { productosCondicional } from '../../constants/productos'
import Lista from '../Lista'
import TituloEjercicio from '../TituloEjercicio'

export default function Ejercicio3() {
    return (
        <section className="caja-ejercicio">
            <TituloEjercicio>Este es el ejercicio 3</TituloEjercicio>
            <Lista productos={productos} />
            <Lista productos={productosCondicional} />
        </section>
    )
    
}