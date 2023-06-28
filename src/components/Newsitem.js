import React, { Component } from 'react'
export class Newsitem extends Component {

  render() {
    let { title, description, url, newsurl,author,date ,source} = this.props;
    return (
      <div>
        
        <div className="card" style={{ width: "18rem" }}>
        
          <img src={url} className="card-img-top" alt="..." />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
    <span class="visually-hidden">unread messages</span>
  </span>
          <div className="card-body">
            <h5 className="card-title"> {title}....</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-danger">BY {!author?"UNKNOWN":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsurl} target="_blank" className="btn  btn-sn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem







































































































































































































