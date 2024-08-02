import ContactForm from "../../components/form";
import { ButtonScroll, ContainerContato, ContainerForm, ImageIcon } from "./styles";
import ImageICon from "../../assets/background.jpg";
import { animateScroll as scroll } from "react-scroll";
import ButtonIcon from "../../assets/angulo-da-seta-para-cima.png";

function Contato(){
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return(
    <ContainerContato backgroundForm={ImageICon}>
        <ContainerForm>
            <ContactForm />   
        </ContainerForm>
        <ButtonScroll onClick={scrollToTop}>
            <ImageIcon alt="voltar ao topo" src={ButtonIcon}/>
        </ButtonScroll>
    </ContainerContato>
    )
}

export default Contato;
