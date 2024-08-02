import { ImageSegundoCard, PositionCard, ProjectCard2, TextCard2 } from "./styles";
import JsIcon from "../../assets/2024-07-30 (1).png";

function CardDois(){
    return(
        <PositionCard>
            <ProjectCard2 reverse={true}>
                <ImageSegundoCard alt="Projeto do Youtube" src={JsIcon} reverse={true}/>
                    <TextCard2>
                    Criei um projeto usando JavaScript puro que consome a API do Star Wars. 
                    O aplicativo exibe todos os personagens dos filmes e, ao clicar na foto de 
                    um personagem, apresenta detalhes exclusivos, como altura, cor dos olhos e 
                    planeta de origem. Uma maneira divertida de explorar o universo Star Wars! 
                    </TextCard2>
                </ProjectCard2>
            </PositionCard>
    )
}

export default CardDois;