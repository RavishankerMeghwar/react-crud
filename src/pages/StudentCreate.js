import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../component/Loading";

function StudentCreate() {
    const [inputErrorList, setInputErrorList] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: ''
    });
    const handleInput = (e) => {
        e.persist();
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const saveUser = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password,
            gender: user.gender
        }
        axios.post('http://localhost/arcadian-admin-ravi/public/api/users', data).then(res => {
            alert(res.data);
            navigate('/');
            setLoading(false);
        })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.detail);
                        setLoading(false);
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data);
                        setLoading(false);
                    }
                }
            });
    }

    if (loading) {
        return <Loading/>;
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Student
                                    <Link to='/' className="btn btn-danger float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveUser}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" value={user.name} onChange={handleInput} className="form-control" name="name" placeholder="Enter Name" />
                                        <span className="text-danger">{inputErrorList.name}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" value={user.email} onChange={handleInput} className="form-control" name="email" placeholder="name@example.com" />
                                        <span className="text-danger">{inputErrorList.email}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone" className="form-label">Phone</label>
                                        <input type="number" value={user.phone} onChange={handleInput} className="form-control" name="phone" placeholder="Enter phone" />
                                        <span className="text-danger">{inputErrorList.phone}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" value={user.password} onChange={handleInput} className="form-control" name="password" placeholder="Enter password" />
                                        <span className="text-danger">{inputErrorList.password}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label for="gender" className="form-label">Password</label>
                                        <select name="gender" id="gender" value={user.gender} onChange={handleInput} className="form-select" aria-label="Default select example">
                                            <option selected>select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <span className="text-danger">{inputErrorList.gender}</span>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">Add User</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentCreate;