import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;

  .buttons + .buttons {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#497057",
  pink: "#f06595",
};

function App() {
  return (
    <ThemeProvider
      theme={{
        palette,
      }}
    >
      <AppBlock>
        <div className="buttons">
          <Button color="blue" size="large">
            Button
          </Button>
          <Button color="blue" size="medium">
            Button
          </Button>
          <Button color="blue" size="small">
            Button
          </Button>
        </div>
        <div className="buttons">
          <Button color="gray" size="large">
            Button
          </Button>
          <Button color="gray" size="medium">
            Button
          </Button>
          <Button color="gray" size="small">
            Button
          </Button>
        </div>

        <div className="buttons">
          <Button color="pink" size="large">
            Button
          </Button>
          <Button color="pink" size="medium">
            Button
          </Button>
          <Button color="pink" size="small">
            Button
          </Button>
        </div>

        <div className="buttons">
          <Button color="pink" size="large" outline>
            Button
          </Button>
          <Button color="pink" size="medium" outline>
            Button
          </Button>
          <Button color="pink" size="small" outline>
            Button
          </Button>
        </div>

        <div className="buttons">
          <Button color="blue" size="large" fullWidth>
            Button
          </Button>
          <Button color="blue" size="large" fullWidth>
            Button
          </Button>
          <Button color="blue" size="large" fullWidth>
            Button
          </Button>
        </div>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
