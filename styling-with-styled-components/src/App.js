import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

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
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    setDialog(false);
  };

  const onCancel = () => {
    setDialog(false);
  };

  return (
    <>
      <ThemeProvider
        theme={{
          palette,
        }}
      >
        <AppBlock>
          <div className="buttons">
            <Button color="blue" size="large" onClick={onClick} fullWidth>
              Button
            </Button>
          </div>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default App;
