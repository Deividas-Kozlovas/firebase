import { Link, useNavigate, useParams } from "react-router-dom";

const Work = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteHandler = () => {
    service.deleteHandler(props.id);
    navigator("/");
  };

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.component}</td>
      <td>{props.service}</td>
      <td>{props.description}</td>
      <td>{props.from}</td>
      <td>{props.to}</td>
      <td>
        <Link className="btn btn-primary" to={`/update-work/${props.id}`}>
          Keisti
        </Link>
      </td>
      <td onClick={deleteHandler}>Salinti</td>
    </tr>
  );
};

export default Work;
