import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
  note: NoteModel;
  className?: string;
}

const Note = ({ note, className }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedAtText: string;
  if (updatedAt > createdAt) {
    createdUpdatedAtText = "Updated: " + formatDate(updatedAt);
  } else {
    createdUpdatedAtText = "Created: " + formatDate(createdAt);
  }

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedAtText}</Card.Footer>
    </Card>
  );
};

export default Note;
