import styled from '@emotion/styled'

const ContenedorResultado = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
    font-size: 18px;
    span {
    font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return (
        <ContenedorResultado>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto" 
            />
            <div>
                <Price>El precio es de: <span>{PRICE}</span></Price>
                <Text>El precio más alto del día: <span>{HIGHDAY}</span></Text>
                <Text>El precio más bajo del día: <span>{LOWDAY}</span></Text>
                <Text>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}%</span></Text>
                <Text>Ultima actualización: <span>{LASTUPDATE}</span></Text>
            </div>
        </ContenedorResultado>
    )
}

export default Resultado