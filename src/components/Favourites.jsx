import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.favourite.list);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            <h2 className="display-2">Favourites</h2>
            <Button onClick={() => navigate("/")} className="mb-5">
              Home
            </Button>
          </Col>
          <ListGroup>
            {favourites.map((job, index) => (
              <Col key={index} xs={10} className="mx-auto">
                <ListGroupItem className="d-flex justify-content-between">
                  <Link to={"/" + job}>{job}</Link>
                  <StarFill
                    color="gold"
                    size={16}
                    onClick={() =>
                      dispatch({
                        type: "DELETE_JOB",
                        payload: job,
                      })
                    }
                  />
                </ListGroupItem>
              </Col>
            ))}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};
export default Favourites;
