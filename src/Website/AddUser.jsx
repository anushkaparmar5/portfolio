import React, { useState } from 'react'

const AddUser = () => {
    const [data, setData] = useState({
        id: Date.now(),
        fname: "",
        lname: "",
        email: "",
        num: "",
        gender: "",
        hobby: [],
    })
    const [error, setError] = useState({})
    const submitData = () => {
    }

    const handleChange = (e) => {
        const { name, value, checked } = e.target

        setData((prev) => ({ ...prev, [name]: name === "hobby" ? checked === true ? [...prev?.hobby, value] : prev?.hobby.length ? prev.hobby.filter((val) => val !== value) : [] : value }))
    }
    return (
        <div>
            <div className="container-sm  p-3 my-3 ">
                <form className="row g-3" onSubmit={submitData}>
                    <div className="col-md-6">
                        <div>
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder='Please enter first name' id="fname" value={data?.fname} onChange={handleChange} name='fname' />
                        </div>
                        {error?.fname ?
                            <div className="form-text text-danger" id="basic-addon4" >{error?.fname}</div> : null}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder='Please enter last name' id="lname" value={data?.lname} onChange={handleChange} name='lname' />
                        {error?.lname ?
                            <div className="form-text text-danger" id="basic-addon4" >{error?.lname}</div> : null}
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={data?.email} placeholder="Please enter email." onChange={handleChange} name='email' />
                        {error?.email ?
                            <div className="form-text text-danger" id="basic-addon4" >{error?.email}</div> : null}
                    </div>
                    <div className="col-12">
                        <label htmlFor="num" className="form-label">Contact No</label>
                        <input type="number" className="form-control" id="num" value={data?.num} placeholder="Please enter contact number." onChange={handleChange} name='num' />
                        {error?.num ?
                            <div className="form-text text-danger" id="basic-addon4" >{error?.num}</div> : null}
                    </div>
                    <div className="col-12">
                        <label htmlFor="gender">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleChange} id="male" />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleChange} id="female" />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                        {error?.gender ?
                            <div className="form-text text-danger" id="basic-addon4" >{error?.gender}</div> : null}
                    </div>
                    <div className="col-12">
                        <label htmlFor="hobby">Hobbies</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="cooking" name="hobby" onChange={handleChange} id="cooking" />
                            <label className="form-check-label" htmlFor="cooking">
                                Cooking
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="dancing" name="hobby" onChange={handleChange} id="dancing" />
                            <label className="form-check-label" htmlFor="dancing">
                                Dancing
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="traveling" name="hobby" onChange={handleChange} id="traveling" />
                            <label className="form-check-label" htmlFor="traveling">
                                Traveling
                            </label>
                        </div>
                        {error?.hobby ?
                            <div className="form-text text-danger" id="basic-addon4" >{error?.hobby}</div> : null}
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
