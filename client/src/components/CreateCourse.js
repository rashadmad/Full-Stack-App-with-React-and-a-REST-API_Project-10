import React from "react";

/*
    This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. 
    The component also renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. 
    This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
*/

/*
    "title": "Using Sequlize ORM with Express",
    "description": "In this workshop, you will use the Sequelize ORM and Express to build a simple CRUD application that's connected to a SQL database.",
    "userId": 1,
    "estimatedTime": "37-minutes",
    "materialsNeeded": "Computer Express.js Text-Editor"
*/

/*
    "title": "Using Sequlize ORM with Express",
    "description": "In this workshop, you will use the Sequelize ORM and Express to build a simple CRUD application that's connected to a SQL database.",
    "userId": 1,
    "estimatedTime": "37-minutes",
    "materialsNeeded": "Computer Express.js Text-Editor"
*/

export default class CreateCourse extends React.PureComponent {
  constructor() {
    super();
    this.state = { 
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createCourse = this.createCourse.bind(this);
  }

  handleChange = (event) => {
    const inputFieldName = event.target.name;
    this.setState({
        [inputFieldName]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  createCourse = () => {
    fetch(`http://localhost:5000/api/courses/`, { 
      method: "PUT",
      credentials: "same-origin",
      redirect: "follow",
      agent: null,
      headers: {
        "Content-Type": "text/plain",
        Authorization: "Basic " + btoa("gino@coolcats.com:password"),
      },
      body: JSON.stringify({ 
        //TODO: add a user to the id here
        title: this.state.title,
        description: this.state.description,
        estimatedTime: this.state.estimatedTime,
        materialsNeeded: this.state.materialsNeeded
      }),
      timeout: 5000,
    })
      .then((res) => res.json())
      .then((selectedCourse) =>
        this.setState({ selectedCourse }, () =>
          console.log("courses fetched...", selectedCourse)
        )
      );
  }

  render() {
    return (
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <div>
            <div>
              <h2 className="validation--errors--label">Validation errors</h2>
              <div className="validation-errors">
                <ul>
                  <li>Please provide a value for "Title"</li>
                  <li>Please provide a value for "Description"</li>
                </ul>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="grid-66">
                    <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." onChange={this.handleChange}></input></div> 
                        <p>By Joe Smith</p>
                    </div>
                    <div className="course--description">
                        <div><textarea id="description" name="description" className="" placeholder="Course description..." onChange={this.handleChange}></textarea></div>
                    </div>
                </div>
                <div className="grid-25 grid-right">
                    <div className="course--stats">
                        <ul className="course--stats--list">
                        <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" onChange={this.handleChange}></input></div>
                        </li>
                        <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={this.handleChange}></textarea></div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
