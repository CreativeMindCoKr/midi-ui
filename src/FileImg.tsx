import React, { useMemo } from "react";
import { useDrag, DragSourceMonitor, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import midi1 from "./assets/svg/midi-1.svg";
import midi2 from "./assets/svg/midi-2.svg";
import midi3 from "./assets/svg/midi-3.svg";
import empty from "./assets/svg/empty.svg";
import styled from "styled-components";
import Column from "./Column";

export interface FileProps {
  name: string;
  step: number;
}

interface FileCellType {
  isMove: boolean;
  isActive: boolean;
}

function FileImg({ name, step }: FileProps) {
  function dragStart(event: any, url: string) {
    // var img = new Image();
    // img.src = midi1;

    // event.dataTransfer.setDragImage(img, 100, 200);
    event.dataTransfer.setData("DownloadURL", url);
    event.dataTransfer.effectAllowed = "copyLink";
  }

  // const onToggleForbidDrag = useCallback(() => {
  //   setForbidDrag(!forbidDrag);
  // }, [forbidDrag]);

  const [{ isDragging }, drag, preview] = useDrag({
    item: { name, step, type: ItemTypes.File },
    // canDrag: !forbidDrag,
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      //   const dropResult = monitor.didDrop();
      const dropResult = monitor.getItem();
      //   alert(dropResult);
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container>
      {/* <Column xs={12} sm={12} md={12} lg={12}>
        <FileArea>
          <DragPreviewImage connect={preview} src={midi1} />
          <Drag
            ref={drag}
            draggable
            onDragStart={(event) => {
              if (forbidDrag[0].empty) {
                dragStart(
                  event,
                  "text/plain:sample1.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
                );
              } else {
                event.preventDefault();
              }
            }}
            onTouchStart={(event) => {
              if (forbidDrag[0].empty) {
                setTimeout(() => {
                  const response = {
                    file:
                      "https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid",
                  };
                  window.location.href = response.file;
                }, 100);
              }
            }}
          >
            <FileCell isActive={forbidDrag[0].empty} isMove={isDragging}>
              <Img>
                {forbidDrag[0].empty ? (
                  <img width="32" height="32" alt="drag out" src={midi1} />
                ) : (
                  <img width="32" height="32" alt="drag out" src={empty} />
                )}
              </Img>
              반주
            </FileCell>
          </Drag>

          <DragPreviewImage connect={preview} src={midi2} />
          <Drag
            ref={drag}
            draggable
            onDragStart={(event) => {
              if (forbidDrag[1].empty) {
                dragStart(
                  event,
                  "text/plain:sample2.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
                );
              } else {
                event.preventDefault();
              }
            }}
            onTouchStart={(event) => {
              if (forbidDrag[1].empty) {
                setTimeout(() => {
                  const response = {
                    file:
                      "https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid",
                  };
                  window.location.href = response.file;
                }, 100);
              }
            }}
          >
            <FileCell isActive={forbidDrag[0].empty} isMove={isDragging}>
              <Img>
                {forbidDrag[1].empty ? (
                  <img width="32" height="32" alt="drag out" src={midi2} />
                ) : (
                  <img width="32" height="32" alt="drag out" src={empty} />
                )}
              </Img>
              보이싱
            </FileCell>
          </Drag>
        </FileArea>
      </Column> */}
    </Container>
  );

  //   if (step === 1) {
  //     return (
  //       <ButtonGroup>
  //         <DragPreviewImage connect={preview} src={midi1} />

  //         <ButtonArea>
  //           <Button onClick={onToggleForbidDrag}>반주 midi 파일 생성</Button>
  //           <Drag
  //             ref={drag}
  //             style={{ opacity, cursor }}
  //             draggable
  //             onDragStart={(event) => {
  //               if (forbidDrag) {
  //                 dragStart(
  //                   event,
  //                   "text/plain:sample1.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
  //                 );
  //               } else {
  //                 event.preventDefault();
  //               }
  //             }}
  //             onTouchStart={(event) => {
  //               if (forbidDrag) {
  //                 setTimeout(() => {
  //                   const response = {
  //                     file:
  //                       "https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid",
  //                   };
  //                   window.location.href = response.file;
  //                 }, 100);
  //               }
  //             }}
  //           >
  //             <Img>
  //               {forbidDrag ? (
  //                 <img width="100" height="200" alt="drag out" src={midi1} />
  //               ) : (
  //                 <img width="100" height="200" alt="drag out" src={empty} />
  //               )}
  //             </Img>
  //             {name}
  //           </Drag>
  //         </ButtonArea>
  //       </ButtonGroup>
  //     );
  //   } else if (step === 2) {
  //     return (
  //       <ButtonGroup>
  //         <DragPreviewImage connect={preview} src={midi2} />

  //         <ButtonArea>
  //           <Button onClick={onToggleForbidDrag}>보이싱 midi 파일 생성</Button>
  //           <Drag
  //             ref={drag}
  //             style={{ opacity, cursor }}
  //             draggable
  //             onDragStart={(event) => {
  //               if (forbidDrag) {
  //                 dragStart(
  //                   event,
  //                   "text/plain:sample2.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
  //                 );
  //               } else {
  //                 event.preventDefault();
  //               }
  //             }}
  //           >
  //             <Img>
  //               {forbidDrag ? (
  //                 <img width="100" height="200" alt="drag out" src={midi2} />
  //               ) : (
  //                 <img width="100" height="200" alt="drag out" src={empty} />
  //               )}
  //             </Img>
  //             {name}
  //           </Drag>
  //         </ButtonArea>
  //       </ButtonGroup>
  //     );
  //   } else {
  //     return (
  //       <ButtonGroup>
  //         <DragPreviewImage connect={preview} src={midi3} />

  //         <ButtonArea>
  //           <Button onClick={onToggleForbidDrag}>멜로디 midi 파일 생성</Button>
  //           <Drag
  //             ref={drag}
  //             style={{ opacity, cursor }}
  //             draggable
  //             onDragStart={(event) => {
  //               if (forbidDrag) {
  //                 dragStart(
  //                   event,
  //                   "text/plain:sample3.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
  //                 );
  //               } else {
  //                 event.preventDefault();
  //               }
  //             }}
  //           >
  //             <Img>
  //               {forbidDrag ? (
  //                 <img width="100" height="200" alt="drag out" src={midi3} />
  //               ) : (
  //                 <img width="100" height="200" alt="drag out" src={empty} />
  //               )}
  //             </Img>
  //             {name}
  //           </Drag>
  //         </ButtonArea>
  //       </ButtonGroup>
  //     );
  //   }
}

export default FileImg;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  width: 700px;
`;

const FileCell = styled.div<FileCellType>`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${(props) => (props.isMove ? 0.4 : 1)};
  cursor: ${(props) => (props.isActive ? "grabbing" : "default")};

  &:hover {
    background-color: rgb(107, 182, 184);
  }
`;

const Drag = styled.div`
  cursor: grabbing;
  float: left;
  width: 100%;
  padding: 1rem 1rem;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
