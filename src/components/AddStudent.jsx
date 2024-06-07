import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    return (
        <div>
             <NavBar></NavBar>
            <div className="container">
                <marquee><h1>ADD STUDENT</h1></marquee>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">name</div>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">adm number</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">

                                <div className="label form-label">roll no</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">parent name</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="label form-label">college</div>
                                <textarea name="" id="" className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">date of birth</div>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">e mail</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">password</div>
                               <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">confirm password</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <button className="btn btn-success">register</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent