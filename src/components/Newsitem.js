import React, { Component } from 'react'
export class Newsitem extends Component {

  render() {
    let { title, description, url, newsurl,author,date ,source} = this.props;
    return (
      
        <div className="card " style={{backgroundColor:'#6bad1d', width:400 }}>       
          <img src={url} className="card-img-top" alt="..." />

          <span  className="position-absolute top-0 start-0translate-middle badge rounded-pill bg-danger ">
   {source}
    <span className="visually-hidden">unread messages</span>
  </span>
          <div className="card-body">
            <h5 className="card-title"> {title}....</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><h5 className="text-danger">BY {!author?"UNKNOWN":author} on {new Date(date).toGMTString()} </h5></p>
            <a href={newsurl} target="_blank" className="btn  btn-sn btn-dark">Read More</a>
          </div>
        </div>
      
    )
  }
}

export default Newsitem







































































































































































































