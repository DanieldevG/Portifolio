import { ImageSegundoCardTres, PositionCardTres, ProjectCard3, TextCard3 } from "./styles";
import BatmanIcon from "../../assets/2024-07-30.png";

function CardTerceiro(){
    return(
        <PositionCardTres>
            <ProjectCard3 reverse={false}>
                <ImageSegundoCardTres alt="Projeto do Youtube" src={BatmanIcon} reverse={false}/>
                    <TextCard3>
                    Desenvolvi um site de vendas de ingressos para o filme do Batman usando React. 
                    Nele, os usuários podem comprar ingressos, assistir ao trailer e explorar informações 
                    detalhadas sobre cada personagem e os atores que os interpretam. Uma experiência completa 
                    para os fãs do Cavaleiro das Trevas! 
                    </TextCard3>
                </ProjectCard3>
            </PositionCardTres>
    )
}

export default CardTerceiro;