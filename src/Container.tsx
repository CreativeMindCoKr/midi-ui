import React, { memo } from "react";
import FileImg from "./FileImg";
import "./App.scss";
import Column from "./Column";
import styled from "styled-components";

const Container = memo(function Container() {
  return (
    <Row>
      <Column xs={12} sm={3} md={3} lg={3}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <FileImg name="반주" step={1} />
        </div>
      </Column>

      <Column xs={12} sm={3} md={3} lg={3}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <FileImg name="보이싱" step={2} />
        </div>
      </Column>

      <Column xs={12} sm={3} md={3} lg={3}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <FileImg name="멜로디" step={3} />
        </div>
      </Column>
    </Row>
  );
});

export default Container;

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: flex;
  }
`;
