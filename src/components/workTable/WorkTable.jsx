import { preconnect } from "react-dom";
import Work from "../work/Work";

const WorkTable = (props) => {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <th>Data</th>
        <th>Klieantas</th>
        <th>Suteikta paslauga</th>
        <th>Aprasymas</th>
        <th>Nuo</th>
        <th>Iki</th>
        <th>Keisti</th>
        <th>Salinti</th>
      </thead>
      <tbody>
        {props.data?.map((work) => (
          <Work
            id={work.id}
            date={work.date}
            company={work.company}
            service={work.service}
            description={work.description}
            from={work.from}
            to={work.to}
          />
        ))}
      </tbody>
    </table>
  );
};

export default WorkTable;
