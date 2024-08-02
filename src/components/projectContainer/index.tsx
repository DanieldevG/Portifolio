import { ContainerProject, ImageCard, PositionContainer, ProjectCard, ProjectContent, TextProject } from "./styles";
import YoutubeIcon from "../../assets/2024-07-22.png";
import FundoIcon from "../../assets/pngtree-neon-laptop-with-black-background-picture-image_2760719.jpg";
import CardDois from "../cardSegundo";
import CardTerceiro from "../cardTerceiro";


function Project(){
    return(
        <ContainerProject backgroundFundo={FundoIcon}>
            <ProjectContent>
                <PositionContainer>
                    <ProjectCard reverse={false}>
                        <ImageCard alt="Projeto do Youtube" src={YoutubeIcon} reverse={false}/>
                        <TextProject>
                        Desenvolvi um clone do YouTube como parte do meu portfólio de programação. Utilizei 
                        a tecnologia React para construir toda a interface. 
                        O projeto consome a API do YouTube, permitindo que os usuários pesquisem vídeos, 
                        visualizem detalhes e reproduzam conteúdo. Além disso, adicionei uma lista de 
                        reprodução automática, que sugere vídeos relacionados com base no conteúdo atualmente 
                        reproduzido.
                        </TextProject>
                    </ProjectCard>
                </PositionContainer>
                <CardDois />
                <CardTerceiro />
            </ProjectContent>
        </ContainerProject>
    )
}

export default Project;