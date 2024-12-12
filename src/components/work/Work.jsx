const Work = (props) => {
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.component}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td>Keisti</td>
            <td>Salinti</td>
        </tr>
    )
}

export default Work;