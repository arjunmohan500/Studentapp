import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    return (
        <div>
             <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">adm no</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                    <button className="btn btn-info">search</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchStudent