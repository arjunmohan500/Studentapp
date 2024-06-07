import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changedata] = useState(
        [
            { "name": "amju", "admno": 101, "rollno": 1, "img": "https://imgs.search.brave.com/8lhd-xeaifRiIXy4x29LO3VYeuCYUaZ5OvQjf-uSUA4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzc2Lzc1LzM5/LzM2MF9GXzU3Njc1/Mzk2NV9VUFlXRjFH/SGpadVFmUW8wUXVw/djc3NnVibjV1V2Fp/Si5qcGc" },
            { "name": "adarsh", "admno": 102, "rollno": 2, "img": "https://imgs.search.brave.com/RfWpqe7q18SL77xYxGlI2V7cKIu3z5XZEZYTYckyahs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/MDA3NjYzMi9waG90/by9oYXBweS1ibGFj/ay1zdHVkZW50LWlu/LWhpZ2gtc2Nob29s/LWxvb2tpbmctYXQt/Y2FtZXJhLndlYnA_/Yj0xJnM9MTcwNjY3/YSZ3PTAmaz0yMCZj/PWpvbGJJajEtYlZ4/UVhnSkkzNG1QU0N0/MmpkQy1jYWxIMkxD/UUJxOU8xb0k9" },
            { "name": "gops", "admno": 103, "rollno": 3, "img": "https://imgs.search.brave.com/p-opeJ9XnAtUuHAoFqQcs-rCnwXghrosFsjZVfDjk3o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzE5LzI4Lzg2/LzM2MF9GXzUxOTI4/ODYzNF9zNjNEYU5t/T2xZdklYNXhQTUNv/R0VYN2I1aFY3Mmc3/Si5qcGc" },
            { "name": "ashil", "admno": 104, "rollno": 4, "img": "https://imgs.search.brave.com/9XM1S7twa7HpPBYyT60sOrD4vwVFPOE7GKYStdOzwhU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MzcxMTE5OS9waG90/by9mYWNlLXBvcnRy/YWl0LXN0dWRlbnQt/YW5kLW1hbi1pbi11/bml2ZXJzaXR5LXJl/YWR5LWZvci1iYWNr/LXRvLXNjaG9vbC1s/ZWFybmluZy1nb2Fs/cy1vci53ZWJwP2I9/MSZzPTE3MDY2N2Em/dz0wJms9MjAmYz1S/cnZ0Tk5td0dTSlFu/NThnZFlZTTN4UC1J/VlVJZEtqMjlHNGFK/dy1qSnNFPQ" }


        ]

    )
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 align="center">STUDENT LIST</h1><br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.img} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.admno}</p>
                                                <a>{value.rollno}</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewAll