import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import "../scss/updateSheet.scss";
import CRUD from "../services/fundooNotesServices";

const UpdateSheet = (props) => {
  const initialState = {
    title: props.title,
    description: props.description,
    noteId: props.noteId,
  };

  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(initialState);

  const updateNote = async () => {
    await setEdit(false);
    await CRUD.updateNote(data);
    await props.dispUpdateSheet(false);
  };

  const cancelChanges = async () => {
    if (edit) {
      await setEdit(false);
      await setData(initialState);
    } else {
      await props.dispUpdateSheet(false);
    }
  };

  return (
    <div className="updateSheet">
      <Card className="updateNoteCard">
        <Card.Body className="cardBody">
          {edit ? (
            <div className="editable">
              <input
                className="updateTitle mb-0 mr-1"
                type="text"
                name="title"
                value={data.title}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
                autoComplete="off"
              />
              <textarea
                className="updateContent mb-0 mr-1"
                type="text"
                name="description"
                value={data.description}
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
                autoComplete="off"
              />
            </div>
          ) : (
            <div className="non-editable">
              <div className="Group">
                <Card.Title>{data.title}</Card.Title>
                <FaPencilAlt
                  onClick={() => {
                    setEdit(true);
                  }}
                />
              </div>
              <Card.Text
              // onChange={(e) => {
              //   setData(e.target.value);
              // }}
              >
                {data.description}
                <br />
                {data.noteId}
              </Card.Text>
            </div>
          )}
          <Button
            variant="Light"
            onClick={() => {
              cancelChanges();
              // setEdit(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="Light"
            onClick={() => {
              updateNote();
            }}
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateSheet;
