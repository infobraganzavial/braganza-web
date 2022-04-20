import styled from 'styled-components';

// Theming
import colors from '../../theming/colors';

const AboutUsContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem;
`

const Service = styled.article`
    display: flex;
    position: relative;
    width: 35%;
    min-width: 340px;
    height: auto;
    min-height: 360px;
    margin: 1rem 0;
    flex-direction: column;
    background-color: #fff;

    & section:first-of-type h2 {
        font-size: 3rem;
    }
`



const Info = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${colors.darkColor};
    width: 100%;
    padding: 2rem;
    
    & h2, p {
        text-transform: uppercase;
        text-align: center;
    }

    & h2 {
        color: ${colors.primaryColor};
    }

   
`

const AboutUs = ({aboutUs}) => {

    const buildServices = () =>{
        return (
            <Service >
                {
                    aboutUs.content.map( s => {
                        return (
                            <Info 
                                  key={s.id} 
                                  length={aboutUs.content.length}>
                                <h2>{s.title}</h2>
                                <p>{s.description}</p>
                            </Info>
                        )
                    
                    })
                }
            </Service>
             
        )
    }

    return (
        <AboutUsContainer   id='proyectos'
                            className='about-us__containner'
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${aboutUs.imageBg.url})`}}>
            { buildServices() }
        </AboutUsContainer>
        )
}

export default AboutUs;