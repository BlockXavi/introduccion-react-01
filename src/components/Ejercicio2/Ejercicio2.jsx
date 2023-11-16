import { productos } from '../../constants/productos'
import Lista from '../Lista'
import TituloEjercicio from '../TituloEjercicio'

export default function Ejercicio2() {
    return (
        <section className="caja-ejercicio">
            <TituloEjercicio>Este es el ejercicio 2</TituloEjercicio>
            <Lista productos={productos} />
        </section>
            )
    
}