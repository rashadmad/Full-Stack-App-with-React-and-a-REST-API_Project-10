import React from 'react';

export default class UpdateCourse extends React.PureComponent {
    render() {
        return (
              <div className="bounds course--detail">
                  <h1>Update Course</h1>
                  <div>
                      <div>
                          <form>
                              <div class="grid-66">
                                  <div class="course--header">
                                      <h4 class="course--label">Course</h4>
                                      <div><input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..." value="Build a Basic Bookcase"></input></div>
                                      <p>By Joe Smith</p>
                                  </div>
                                  <div class="course--description">
                                      <div>
                                          <textarea id="description" name="description" class="" placeholder="Course description...">agasdasdfa</textarea>
                                      </div>
                                  </div>
                                  <ul class="course--stats--list">
                                      <li class="course--stats--list--item">
                                          <h4>Estimated Time</h4>
                                          <div><input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input" placeholder="Hours" value="14 hours"></input></div>
                                      </li>
                                      <li class="course--stats--list--item">
                                          <h4>Materials Needed</h4>
                                          <div>
                                              <textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials...">
                                              * 1/2 x 3/4 inch parting strip
                                              * 1 x 2 common pine
                                              * 1 x 4 common pine
                                              * 1 x 10 common pine
                                              * 1/4 inch thick lauan plywood
                                              * Finishing Nails
                                              * Sandpaper
                                              * Wood Glue
                                              * Wood Filler
                                              * Minwax Oil Based Polyurethane
                                              </textarea>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                              <div class="grid-100 pad-bottom"><button class="button" type="submit">Update Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='course-detail.html';">Cancel</button></div>
                          </form>
                      </div>
                  </div>
              </div>
          )
      }
}