import React from "react";
import { useDrag, DragSourceMonitor, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import midi1 from "./assets/svg/midi-1.svg";
import midi2 from "./assets/svg/midi-2.svg";
import midi3 from "./assets/svg/midi-3.svg";
import empty from "./assets/svg/empty.svg";
import "./App.scss";

const style: React.CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  margin: "1.5rem",
  cursor: "grabbing",
  float: "left",
  width: "150px",
  textAlign: "right",
};

interface FileProps {
  name: string;
  step: number;
}

export const FileImg: React.FC<FileProps> = ({ name, step }) => {
  let activeOne = true;
  let activeSecond = false;
  let activeThird = false;

  function dragStart(event: any, url: string) {
    // var img = new Image();
    // img.src = midi1;

    // event.dataTransfer.setDragImage(img, 100, 200);
    event.dataTransfer.setData("DownloadURL", url);
    event.dataTransfer.effectAllowed = "copyLink";
  }

  const [{ opacity }, drag, preview] = useDrag({
    item: { name, step, type: ItemTypes.File },
    canDrag: (monitor) => {
      return activeOne;
    },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      //   const dropResult = monitor.didDrop();
      const dropResult = monitor.getItem();
      //   alert(dropResult);
    },

    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  if (step === 1) {
    return (
      <div>
        <DragPreviewImage connect={preview} src={midi1} />
        <div
          ref={drag}
          style={{ ...style, opacity }}
          draggable
          onDragStart={(event) => {
            if (activeOne) {
              dragStart(
                event,
                "text/plain:sample1.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
              );
            } else {
              event.preventDefault();
            }
          }}
        >
          <div className="fileImg">
            {activeOne ? (
              <img width="100" height="200" alt="drag out" src={midi1} />
            ) : (
              <img width="100" height="200" alt="drag out" src={empty} />
            )}
          </div>
          {name}
        </div>
      </div>
    );
  } else if (step === 2) {
    return (
      <div>
        <DragPreviewImage connect={preview} src={midi2} />
        <div
          ref={drag}
          style={{ ...style, opacity }}
          draggable
          onDragStart={(event) => {
            if (activeOne) {
              dragStart(
                event,
                "text/plain:sample2.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
              );
            } else {
              event.preventDefault();
            }
          }}
        >
          <div className="fileImg">
            {activeSecond ? (
              <img width="100" height="200" alt="drag out" src={midi2} />
            ) : (
              <img width="100" height="200" alt="drag out" src={empty} />
            )}
          </div>
          {name}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <DragPreviewImage connect={preview} src={midi3} />
        <div
          ref={drag}
          style={{ ...style, opacity }}
          draggable
          onDragStart={(event) => {
            if (activeOne) {
              dragStart(
                event,
                "text/plain:sample3.mid:https://midi.s3.ap-northeast-2.amazonaws.com/sample.mid"
              );
            } else {
              event.preventDefault();
            }
          }}
        >
          <div className="fileImg">
            {activeThird ? (
              <img width="100" height="200" alt="drag out" src={midi3} />
            ) : (
              <img width="100" height="200" alt="drag out" src={empty} />
            )}
          </div>
          {name}
        </div>
      </div>
    );
  }
};
