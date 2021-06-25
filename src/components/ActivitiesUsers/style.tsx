import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    /* background-color: var(--backgroundInfoGroups); */

    @media(min-width: 600px) {
        /* height: 100vh; */
        width: 95%;
        display: flex;
        justify-content: space-evenly;
    }
`

export const UserList = styled.div ` 
    h2 {
        text-align: center;
        padding: 10px;
    }

    ul {
        list-style-type: none;
        padding-bottom: 20px;
    }

    li {
        text-align: center;
        margin: 10px 0 20px 0;
        font-weight: bold;
    }
  border: solid 2px #B2ACFA;
  border-radius: 20px;
  margin-bottom: 6px;
  width: 100%;
  @media (min-width: 600px){
    margin-right: 6px;
  }
  @media (min-width: 800px){
    margin-right: 12px;
  }
`

export const ActivityList = styled.div ` 
    h2 {
        text-align: center;
        padding: 10px;
    }

    ul {
        list-style-type: none;
    }

    li {
        text-align: center;
        margin: 10px 0;
        font-weight: bold;
    }
  border: solid 2px #B2ACFA;
  border-radius: 20px;
  margin-bottom: 6px;
  width: 100%;
`