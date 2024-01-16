import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            onClick={() =>
              dispatch({
                type: "DELETE_JOB",
                payload: data.company_name,
              })
            }
          ></StarFill>
        ) : (
          <Star
            color="gold"
            size={16}
            onClick={() =>
              dispatch({
                type: "ADD_JOB",
                payload: data.company_name,
              })
            }
          ></Star>
        )}
      </Col>
    </Row>
  );
};

export default Job;
