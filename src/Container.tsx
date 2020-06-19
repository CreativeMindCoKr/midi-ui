import React, { useState, useEffect, useCallback, memo } from "react";
import FileImg from "./FileImg";
import "./App.scss";
import Column from "./Column";
import styled from "styled-components";

const Container = memo(function Container() {
  const [forbidDrag, setForbidDrag] = useState([
    {
      id: 0,
      empty: false,
    },
    {
      id: 1,
      empty: false,
    },
    {
      id: 2,
      empty: false,
    },
  ]);

  function onToggleForbidDrag(index: number) {
    setForbidDrag(
      forbidDrag.map((file) =>
        file.id === index ? { ...file, empty: !file.empty } : file
      )
    );
  }
  // const [forbidDrag, setForbidDrag] = useState(false);

  // const onToggleForbidDrag = useCallback(() => {
  //   setForbidDrag(!forbidDrag);
  // }, [forbidDrag]);

  // useEffect(() => {
  //   console.log("change state: ", forbidDrag);
  // }, [forbidDrag]);

  return (
    <Row>
      <Column xs={12} sm={3} md={3} lg={3}>
        <ButtonArea>
          <Button onClick={(e) => onToggleForbidDrag(0)}>
            반주 midi 파일 생성
          </Button>
          <Button onClick={(e) => onToggleForbidDrag(1)}>
            보이싱 midi 파일 생성
          </Button>
          <Button onClick={(e) => onToggleForbidDrag(2)}>
            멜로디 midi 파일 생성
          </Button>
        </ButtonArea>
      </Column>

      <Column xs={12} sm={12} md={3} lg={3}>
        <FileArea>
          <FileImg name="반주" step={1} forbidDrag={forbidDrag[0].empty} />
          <FileImg name="보이싱" step={2} forbidDrag={forbidDrag[1].empty} />
          <FileImg name="멜로디" step={3} forbidDrag={forbidDrag[2].empty} />
        </FileArea>
      </Column>

      {/* <Column xs={12} sm={3} md={3} lg={3}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <FileImg name="보이싱" step={2} />
        </div>
      </Column>

      <Column xs={12} sm={3} md={3} lg={3}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <FileImg name="멜로디" step={3} />
        </div>
      </Column> */}
    </Row>
  );
});

export default Container;

const Row = styled.div`
  margin: 20px;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-bottom: 15px;
  background-color: rgb(107, 182, 184);
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: 0 9px rgb(171, 169, 169);

  &:hover {
    background-color: rgb(43, 79, 81);
  }

  &:active {
    background-color: rgb(43, 79, 81);
    box-shadow: 0 5px rgb(36, 36, 36);
    transform: translateY(4px);
  }
`;

const FileArea = styled.div`
  border: 1px dashed gray;
  float: left;
  width: 450px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.1);
`;
