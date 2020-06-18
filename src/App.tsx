import React from "react";
import Container from "./Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import styled from "styled-components";

function App() {
  const options = { enableTouchEvents: true, enableMouseEvents: true };
  return (
    <AppContainer>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;
