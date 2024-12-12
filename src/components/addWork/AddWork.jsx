import { useState } from "react";

const AddWork = () => {
    const [formData, setFormData] = useState({
        data:'',
        company:'',
        service:'',
        description:'',
        from:'',
        to:''
    })
    
    const handleChange = (e) => {
        e.preventDefaul();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div className="card">
            <div className="card-header">
                <h2>Prideti atlikta darba</h2>
            </div>
            <div className="card-body">
                <form className="form">
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite data</label>
                        <input type="date" name="date" className="form-control" onChange={handleChange} value={formData.data}/>
                    </div>
                    <div className="mb-3">
                       <select name="service" className="form-control" onChange={handleChange} value={formData.service}>
                            <option selected disabled>Pasirinkite paslauga</option>
                            <option value="dev">Development</option>
                            <option value="ux">Ux research</option>
                       </select>
                   </div>
                    <div className="mb-3">
                       <textarea name="desctiption" className="form-control" onChange={handleChange} value={formData.description}></textarea>
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