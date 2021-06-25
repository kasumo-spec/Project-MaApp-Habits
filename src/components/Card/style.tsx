import styled from 'styled-components'


export const Container = styled.div ` 
    width: 245px;
    height: 110px;
    margin: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    background-color: #770df94a;
    border: none;
    box-shadow: 0px 2px 7px 0px;
    
    @media (min-width: 1000px) {
      margin: 5px;
    }
  
    h2 {
        font-size: 1.35em;
        padding-left: 10px;
        color: #000000cf;
    }

    p {
        padding: 5px;
    }

    h3 {
        color: #f0ffff99;
    }

    &:hover {
        box-shadow: 0px 0px 0px 0px;
    }
`

