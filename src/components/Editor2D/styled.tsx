import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  background-color: #f0f0f0;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`

export const StageBox = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: #ffffff;
`
