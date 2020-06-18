import React from "react";
import styled from "styled-components";

interface colProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  children: React.ReactNode;
}

const calcWidthPercent = (span: number) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const Col = styled.div`
  float: left;
  width: ${({ xs }: any) => (xs ? `${calcWidthPercent(xs)}%` : `100%`)};
  /* min-width: 300px;
  max-width: 500px; */
  padding: 1rem;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }: any) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }: any) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }: any) => lg && `${calcWidthPercent(lg)}%`};
  }
`;

const Column = (props: colProps) => {
  return <Col {...props}>{props.children}</Col>;
};

export default Column;
