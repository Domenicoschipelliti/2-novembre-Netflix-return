import { Container, Row, Col, Card } from "react-bootstrap";

const TvShows = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.lennonalbum.it/wp-content/uploads/2021/07/album-imagine-john-lennon.jpg"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TvShows;
