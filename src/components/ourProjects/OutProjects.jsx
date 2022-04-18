
import styled from 'styled-components';

// Theming
import colors from '../../theming/colors';

const Container = styled.article`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 5rem;
`;

const Hexagon = styled.section`
    position: relative;
    width: 30%;
    height: 400px;
    max-height: max-content;
    margin: 50px 20px 70px;
    cursor: pointer;

    box-shadow: 8px 9px 24px -4px rgba(0,0,0,0.74);
    -webkit-box-shadow: 8px 9px 24px -4px rgba(0,0,0,0.74);
    -moz-box-shadow: 8px 9px 24px -4px rgba(0,0,0,0.74);

    & ::before {
        content: '';
        position: absolute;
        bottom: -70px;
        width: 100%;
        height: 60px;
        background: radial-gradient(rgba(0,0,0,.15), transparent, transparent);
        border-radius: 50%;
        transition: 0.5s;
        opacity: 0.8;
        transform: scale(0.8);
    }
`;

const Shape = styled.article`
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    /* clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%); */
    /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    transition: 0.5s;
    transform: translateY(-30px);
    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover .content {
        display: flex;
        overflow: hidden;
    }
`;

const Content = styled.section`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: center;
        background: linear-gradient(45deg, #03a9f4, rgba(3,169,244,.5));
        color: #fff;
        opacity: 0;
        transition: 0.5s;
        opacity: 1;
`

const OurProjects = ({ourProjects}) => {

    return (
        <Container style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${ourProjects.imageBg.url})`}}>
            {ourProjects.content.map( s => {
                return (
                    <Hexagon key={s.id}>
                        <Shape className='shape'>
                            <img src={s.images[0].url} alt="img" />
                            <Content className='content'>
                                <header>
                                    <h2>{s.title}</h2>
                                </header>
                                <p>
                                    {s.service}
                                </p>
                                <footer>
                                    {s.alliedCompany}
                                </footer>
                            </Content>
                        </Shape>
                    </Hexagon>
                )
            })}
        </Container>
    );
}

export default OurProjects;