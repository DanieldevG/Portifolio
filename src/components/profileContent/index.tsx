import { Button, Card, CardImg, ContainerSegundo, Divisao, ImagensContainer, ImgIcon, Nome, ProfileContainer, Text, TextInfo } from "./styles";
import PerfilIcon from "../../assets/WhatsApp Image 2024-07-24 at 12.51.35.jpeg";
import JsIcon from "../../assets/js.png";
import NodeIcon from "../../assets/node.png";
import ReactIcon from "../../assets/react.png";
import FotoIcon from "../../assets/860.jpg";


function Content(){

   const handleClick = () => {
    window.open('https://www.linkedin.com/in/daniel-gonçalves-dev', '_blank');
    };

    return(
        <ContainerSegundo backgroundImg={FotoIcon}>
        <ProfileContainer>
            <Card>
                <CardImg alt="foto do card" src={PerfilIcon}/> 
                <Nome>Daniel Gonçalves</Nome>
                <Text>
                    Fazendo todos os dias aquilo ,
                    que as pessoas fazem só de vez enquando ,
                    excelência sempre!
                </Text>
                <Button onClick={handleClick}>Conhecer Linkedin</Button>
                <Divisao></Divisao>
                <ImagensContainer>
                   <ImgIcon alt="" src={JsIcon}/>
                   <ImgIcon alt="" src={ReactIcon}/>
                   <ImgIcon alt="" src={NodeIcon}/>
                </ImagensContainer>
            </Card>
        </ProfileContainer>
        <TextInfo>
            Atuo focado no ecossistema de Javascript com React e Node , 
            sempre focado nessas tecnologias , desenvolvi alguns projetos de 
            desenvolvimento web , fiz um clone da interface do YouTube idêntico ao verdadeiro 
            consumindo uma API do Youtube e com todas as funcionalidades dinâmicas e interativas 
            da plataforma. Também desenvolvi alguns projetos como desafio 
            do curso Profissão Programador , onde obtive ótimos resultados e certificados em cada
            uma dessas tecnologias com a aprovação de um time de programadores bem experientes e 
            consolidados no mercado me avaliando , com o objetivo de transformar-me em um profisional 
            completo , com as habilidades autonomia e confiança para atuar no mercado de tecnologia brasileiro. 
            Espero poder somar e agregar com meu melhor em novas oportunidades e desafios , para ser melhor a cada dia.
        </TextInfo>
        </ContainerSegundo>
    )
}

export default Content;

