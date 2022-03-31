import styled from 'styled-components';

// Theming
import colors from '../../theming/colors';

const OurServicesContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
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
    width: 100%;
    height: auto;
    min-height: ${({length}) => `${(100 / length)}%`};
    /* background-color: ${colors.tertiaryCorlor}; */
    margin: 1rem 0;
`

const FigureWrapper = styled.div`
    position: relative;
    display: flex;
    width: 30%;
    height: inherit;
    background: linear-gradient(90deg, rgba(73,173,110,1) 50%, rgba(255,255,255,0) 50%);
`

const Figure = styled.figure`
    margin: auto;
    padding: 0;
    width: 30%;
    max-width: 300px;
    min-width: 300px;
    height: auto;
    min-height: 300px;
    max-height: 300px;
    border-radius: 50%;
    overflow: hidden;
    background-image: ${({backgroundImage}) => `url(${backgroundImage})` };
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    outline: 31px solid ${ colors.tertiaryCorlor };
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${colors.lightColor};
    width: 70%;
    padding: 2rem;
    background-color: ${colors.tertiaryCorlor};
`

const OurServices = ({ourServices}) => {

    const buildServices = () =>{
        return ourServices.services.map( s => {
            return <Service key={s.id} length={ourServices.services.length}>
                <Info>
                    <h2>{s.title}</h2>
                    <p>{s.shortDescription}</p>
                </Info>
                <FigureWrapper>
                    <Figure backgroundImage={s.images[0].url}>
                    </Figure>
                </FigureWrapper>
            </Service>
        }) 
    }

    return (
        <OurServicesContainer style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${ourServices.imageBg.url})`}}>
            { buildServices() }
        </OurServicesContainer>
        )
}

export default OurServices;