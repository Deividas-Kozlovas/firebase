import { useState } from "react";
import * as service from "../../services/worksCrudServices";
import { useNavigate } from "react-router-dom";

const AddWork = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        data:'',
        company:'',
        service:'',
        description:'',
        from:'',
        to:''
    })
    
    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        service.addWork(formData)
        navigate('/');
    }

    return(
        <div className="card">
            <div className="card-header">
                <h2>Prideti atlikta darba</h2>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite data</label>
                        <input type="date" name="data" className="form-control" onChange={handleChange} value={formData.data}/>
                    </div>
                    <div className="mb-3">
                       <select name="service" className="form-control" onChange={handleChange} value={formData.service}>
                            <option value="dev">Development</option>
                            <option value="ux">Ux research</option>
                       </select>
                   </div>
                    <div className="mb-3">
                       <textarea name="description" className="form-control" onChange={handleChange} value={formData.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">From:</label>
                        <input type="time" name="from" className="form-controle" onChange={handleChange} value={formData.from}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">To:</label>
                        <input type="time" name="to" className="form-controle" onChange={handleChange} value={formData.to}/>
                    </div>
                    <div className="mb-3">
                        <button type="submit">Saugoti</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWork;