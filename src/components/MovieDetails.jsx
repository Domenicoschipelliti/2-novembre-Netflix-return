import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const parametro = useParams();
  //   const navigate = useNavigate;
  const [moveDetail, setMoveDetail] = useState(null);

  useEffect(() => {
    const parIndex = parseInt(parametro.movieId);
    const film = dettagli[parIndex];
    console.log("film da visualizzare", film);

    setMoveDetail(parIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dettagli = () => {
    fetch("http://www.omdbapi.com/?apikey=24ad60e9")
      .then((respo) => {
        if (respo.ok) {
          return respo.json();
        } else {
          console.log("errore");
        }
      })
      .catch((err) => {
        throw new Error("nuovo errore", err);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={moveDetail.Poster} />
            <Card.Body>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
