import {ItenLista, Lista, Navegar, Start } from "./styles";
import { Link } from "react-scroll";
 
function Header(){
    return(
      <Start>
            <Navegar>
                <Lista>
                    <Link to="section1">
                    <ItenLista>Home</ItenLista>
                    </Link>
                    <Link to="section2">
                    <ItenLista>Projetos</ItenLista>
                    </Link>
                    <Link to="section3">
                    <ItenLista>Tecnologias</ItenLista>
                    </Link>
                    <Link to="section4">
                    <ItenLista>Contato</ItenLista>
                    </Link>
                </Lista>
            </Navegar>
      </Start>
    )
}

export default Header;