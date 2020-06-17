import React, { useState, useCallback, useMemo } from "react";
import { useDrag, DragSourceMonitor, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import midi1 from "./assets/svg/midi-1.svg";
import midi2 from "./assets/svg/midi-2.svg";
import midi3 from "./assets/svg/midi-3.svg";
import empty from "./assets/svg/empty.svg";
import "./App.scss";
import styled from "styled-components";

export interface FileProps {
  name: string;
  step: number;
  onToggleForbidDrag?: () => void;
}

function FileImg({ name, step }: FileProps) {
  const [forbidDrag, setForbidDrag] = useState(false);

  function dragStart(event: any, url: string) {
    // var img = new Image();
    // img.src = midi1;

    // event.dataTransfer.setDragImage(img, 100, 200);
    event.dataTransfer.setData("DownloadURL", url);
    event.dataTransfer.effectAllowed = "copyLink";
  }

  const onToggleForbidDrag = useCallback(() => {
    setForbidDrag(!forbidDrag);
  }, [forbidDrag]);

  const [{ opacity, cursor }, drag, preview] = useDrag({
    item: { name, step, type: ItemTypes.File },
    // canDrag: !forbidDrag,
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      //   const dropResult = monitor.didDrop();
      const dropResult = monitor.getItem();
      //   alert(dropResult);
    },

    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      cursor: forbidDrag ? "grabbing" : "default",
    }),
  });

  if (step === 1) {
    return (
      <ButtonGroup>
        <DragPreviewImage connect={preview} src={midi1} />

        <ButtonArea>
          <Button onClick={onToggleForbidDrag}>반주 midi 파일 생성</Button>
          <Drag
            ref={drag}
            style={{ opacity, cursor }}
            draggable
            onDragStart={(event) => {
              if (forbidDrag) {
                dragStart(
                  event,
                  "text/plain:sample1.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
                );
              } else {
                event.preventDefault();
              }
            }}
          >
            <Img>
              {forbidDrag ? (
                <img width="100" height="200" alt="drag out" src={midi1} />
              ) : (
                <img width="100" height="200" alt="drag out" src={empty} />
              )}
            </Img>
            {name}
          </Drag>
        </ButtonArea>
      </ButtonGroup>
    );
  } else if (step === 2) {
    return (
      <ButtonGroup>
        <DragPreviewImage connect={preview} src={midi2} />

        <ButtonArea>
          <Button onClick={onToggleForbidDrag}>보이싱 midi 파일 생성</Button>
          <Drag
            ref={drag}
            style={{ opacity, cursor }}
            draggable
            onDragStart={(event) => {
              if (forbidDrag) {
                dragStart(
                  event,
                  "text/plain:sample2.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
                );
              } else {
                event.preventDefault();
              }
            }}
          >
            <Img>
              {forbidDrag ? (
                <img width="100" height="200" alt="drag out" src={midi2} />
              ) : (
                <img width="100" height="200" alt="drag out" src={empty} />
              )}
            </Img>
            {name}
          </Drag>
        </ButtonArea>
      </ButtonGroup>
    );
  } else {
    return (
      <ButtonGroup>
        <DragPreviewImage connect={preview} src={midi3} />

        <ButtonArea>
          <Button onClick={onToggleForbidDrag}>멜로디 midi 파일 생성</Button>
          <Drag
            ref={drag}
            style={{ opacity, cursor }}
            draggable
            onDragStart={(event) => {
              if (forbidDrag) {
                dragStart(
                  event,
                  "text/plain:sample3.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
                );
              } else {
                event.preventDefault();
              }
            }}
          >
            <Img>
              {forbidDrag ? (
                <img width="100" height="200" alt="drag out" src={midi3} />
              ) : (
                <img width="100" height="200" alt="drag out" src={empty} />
              )}
            </Img>
            {name}
          </Drag>
        </ButtonArea>
      </ButtonGroup>
    );
  }
}

export default FileImg;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  background-color: rgb(107, 182, 184);
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 15px;
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

const Drag = styled.div`
  border: 1px dashed gray;
  background-color: white;
  padding: 0.5rem 1rem;
  margin-right: 1.5rem;
  margin: 1.5rem;
  cursor: grabbing;
  float: left;
  width: 150px;
  text-align: right;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
