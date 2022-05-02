import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import MainScreen from '../components/MainScreen/MainScreen';
import axios from 'axios';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get('http://localhost:5000/api/notes');
    // console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back Avadhesh Chauhan...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: 'flex' }}>
              <span
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  flex: 1,
                  alignSelf: 'center',
                  fontSize: 18,
                }}
              >
                <Accordion.Header>{note.title}</Accordion.Header>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge bg="success" style={{ color: 'white' }}>
                    Category - {note.category}
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Create On - Date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
