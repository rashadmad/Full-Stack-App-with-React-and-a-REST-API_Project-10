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
        id: "",
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
                <div class="grid-66">
                    <div class="course--header">
                        <h4 class="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..." value={this.state.courseTitle} onChange={this.handleChange}></input></div>
                        <p>By Joe Smith</p>
                    </div>
                    <div class="course--description">
                        <div><textarea id="description" name="description" class="" placeholder="Course description..." value={this.state.courseDescription} onChange={this.handleChange}></textarea></div>
                    </div>
                </div>
                <div class="grid-25 grid-right">
                    <div class="course--stats">
                        <ul class="course--stats--list">
                        <li class="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value={this.state.courseEstimatedTime} onChange={this.handleChange}></input></div>
                        </li>
                        <li class="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={this.state.courseMaterialsNeeded} onChange={this.handleChange}></textarea></div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
