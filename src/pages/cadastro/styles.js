import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`;

/*export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`*/

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 500px;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 300px; /* Ajuste a largura máxima conforme necessário */
    margin: 0 auto;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    width: 300px;
    padding: 20px 0 0 0;
    margin-bottom: 20px;

    color: #FFFFFF;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    a {
        color: #23DD7A;
        font-weight: bold;
        text-decoration: none;
    }
`;
