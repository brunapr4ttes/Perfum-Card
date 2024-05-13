import styled from 'styled-components'

export const Cores ={
  branco: '#fff',
  preto: '#000',
  amarelo: '#e1ce1b',
  rosa: '#f2d',
  verde: 'hsl(158, 36%, 37%)'
}

export const Imagem = styled.img`
  width: 375px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const Card = styled.div`
  background-color: ${Cores.branco};
  width: 700px;
  height: 562px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`
export const LadoDois = styled.div`
  background-color: ${Cores.branco};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const Categoria = styled.p`
  color: gray;
  font-family: Montserrat;
`
export const Titulo = styled.h1`
  color: ${Cores.preto};
  font-family: Fraunces;
`
export const Paragrafo = styled.p`
  color: gray;
  font-family: Montserrat;
  line-height: 28px;
  font-size: 17px;
`
export const PriceTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const PriceOne = styled.p`
    font-size: 30px;
    color: ${Cores.verde};
    font-family: Fraunces;
    font-weight: 700;
`
export const PriceTwo = styled.p`
    color: gray;
    font-family: Montserrat;
    text-decoration: line-through;
`

export const Button = styled.button`
  background-color: ${Cores.verde};
  width: 250px;
  height: 55px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: white;
  font-weight: 700;
  font-family: Montserrat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`