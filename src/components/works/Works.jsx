import WorkTable from "../workTable/WorkTable";

const Works = () => {
    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="" className="nav-item btn btn-primary">Prideti atlikta darba</a>
                </li>
            </ul>
            <h2>Works</h2>
            <WorkTable />
        </div>
    )
}

export default Works;