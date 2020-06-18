import React from "react"
import { Link } from 'react-router-dom'


function Project() {

    return (
        <div className='project' id="Project">
            <h2>Projects</h2>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://res.cloudinary.com/dt5zs08ue/image/upload/v1583200009/port/Books_hqqael.png" className="card-img" alt="All About Books" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a target="_blank" href="https://kassidysh.github.io/project1-Trivia/">
                                <h5 className="card-title">All About Books</h5>
                            </a>
                            <p className="card-text">This is a quiz app made with HTML, CSS, and JAVASCRIPT. It uses an API call that calls 40 diffrent questions that are then shuffled to show 10 diffrent questions each time you play the game. There are four answers that you can choose from and if you answer in 5 seconds you get 10 points, if you don't you'll get 5 points.</p>
                            <a target="_blank" href="https://github.com/KassidySh/project1-Trivia">
                                <p className="card-text"><small className="text-muted">Link to Github</small></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://res.cloudinary.com/dt5zs08ue/image/upload/v1583200021/port/Super_ldawsq.png" className="card-img" alt="Super Facts" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a target="_blank" href="https://superfacts.netlify.com/">
                                <h5 className="card-title">Super Facts</h5>
                            </a>
                            <p className="card-text">This is a site created with REACT, CSS, and BOOTSTRAP to look through various superheros and see all sorts of information about them. It uses an API call to get the information. There's also a search bar that you can use to search people.</p>
                            <a target="_blank" href="https://github.com/KassidySh/project-2">
                                <p className="card-text"><small className="text-muted">Link to Github</small></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://res.cloudinary.com/dt5zs08ue/image/upload/v1583200016/port/Myth_j3lggy.png" className="card-img" alt="Myth Information" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a target="_blank" href="https://mythinformation.herokuapp.com/">
                                <h5 className="card-title">Myth Information</h5>
                            </a>
                            <p className="card-text">Created with DJANGO, PYTHON, BOOTSTRAP, PSQL, Myth Information uses a database to store information on diffrent gods and stories about the gods. You have to be logged in to add stories and only the author can edit or delete a story. A user can search by god and by what something is god of.</p>
                            <a target="_blank" href="https://github.com/KassidySh/myth">
                                <p className="card-text"><small className="text-muted">Link to Github</small></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project