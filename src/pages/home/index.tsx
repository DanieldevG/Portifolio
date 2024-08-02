import Header from "../../components/header";
import { Background, CaminhoPrimeiro, CaminhoSegundo, CaminhoTerceiro, Container, Img, Setas, Titulo } from "./style";
import fundoIcon from "../../assets/photo-1635830625698-3b9bd74671ca.jpg"

function Home(){
    return(
        <Container>
            <Background backgroundImage={fundoIcon}>
            <Header/>
            <Titulo>Procurando um desenvolvedor FullStack?</Titulo>
            </Background>
            <Setas>
            <Img width="60" height="72">
            <CaminhoPrimeiro d="M0 0 L30 32 L60 0"></CaminhoPrimeiro>
            <CaminhoSegundo d="M0 20 L30 52 L60 20"></CaminhoSegundo>
            <CaminhoTerceiro d="M0 40 L30 72 L60 40"></CaminhoTerceiro>
            </Img>
            </Setas>
        </Container>
    )
}

export default Home;