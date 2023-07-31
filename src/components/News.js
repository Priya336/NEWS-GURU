import React,{ Component }from 'react'
import {Link} from "react-router-dom";
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import img from './favi.png'
export class news extends Component {

  static defaultprop = {
    pagesize:20,
    country:"in",
    category:"general",
    totalresult:0
  }

  static propTypes = {
   pagesize:PropTypes.number,
   country:PropTypes.string,
   category:PropTypes.string
  }


  
  constructor() {
 super();
    console.log("i am a constructor");
    this.state = {
      articals: [],
      loading: false,
      page: 1
    }
  }//constructor in reactjs used to construct an object It is the ideal place to set the components initial state

  async componentDidMount() {
    this.props.setprogress(10);
    let url = `
https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}`;
    this.setState({
      loading:true,
    })
    let data = await fetch(url);
    
    let parsedData = await data.json()//convert data of json into javascript which is fetch from the server full form -javascript Object Notation
    this.setState({
      loading:false,
      totalresult:parsedData.totalResults
    })
    this.props.setprogress(100);
    this.setState({ articals: parsedData.articles, totalartical: parsedData.totalResults});
    console.log(this.state.totalartical)
  }

  handlenextclick = async () => {
    
    console.log(this.state.page <= 1)
    if (this.state.page + 1 > Math.ceil(this.state.totalartical / this.props.pagesize)) {

    } else {
      console.log("next" + this.state.page);
      let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
      this.setState({
        loading:true
      })
      let data = await fetch(url);

      let parsedData = await data.json()//convert data of json into javascript which is fetch from the server full form -javascript Object Notation
      this.setState({
        loading:false
      })
      this.setState({
        page: this.state.page + 1,
        articals: parsedData.articles
      })
    }
  }
  handlepreclick = async () => {
    console.log("pre" + this.state.page)
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);

    let parsedData = await data.json()//convert data of json into javascript which is fetch from the server full form -javascript Object Notation
    this.setState({
      loading:false
    })
    this.setState({
      page: this.state.page - 1,
      articals: parsedData.articles

    })

  }
 

  render() {
    return (
<>
      <div className="container my-3">
<div className='text-center'>
<div className="spinner-border text-primary"  style={{position:'relative',top:200}}role="status">
  <span className="visually-hidden">Loading...</span>
  </div> 
        <h2> <p className="text-uppercase" style={{marginTop:"70px"}}><b style={{fontSize:50}}>NEWSGURU - TOP {this.props.category} HEADLINE</b></p> </h2>
  
</div>
      
{!this.state.loading  && <div className='row' >
          {this.state.articals.map((element) => {
            return <div className='col-md-4'  key={element.url}><div className='my-3'>
              <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} newsurl={element.url ? element.url : ""} url={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2023/03/98511368-770x433.png"} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
            </div>
            </div>
          })}




        </div>}
        <div className="d-flex justify-content-between">

          <button style={{backgroundColor:'#6bad1d',color:'white'}} disabled={this.state.page <= 1} type="button"  onClick={this.handlepreclick}><b> &larr; Previous</b>  </button>
          <button type="button" style={{backgroundColor:'#6bad1d'}}disabled={this.state.page + 1 > Math.ceil(this.state.totalartical / this.props.pagesize)}className="btn btn-dark" onClick={this.handlenextclick}><b>Next &rarr;</b></button>
        </div>

        </div>
     { (this.state.loading===false)?
        <div style={{width:"100%",backgroundColor:'black',height:350,color:"white", textAlign:"center"}}>
      <div style={{fontSize:30}}>  Explore  the outside world with <b> @NewsGuru</b> <br></br></div>
        <div style={{fontSize:30}}><i> *Collection of  important information and updates of  various field </i></div>
        <div className='row'  style={{cursor:"default",fontSize:25,color:"grey"}}>
          <div >#Business</div>
          <div >#Science</div>
          <div >#Sports</div>
          <div >#General</div>
          <div >#Entertainment</div>
          <div >#Topography</div>
        
        </div>
        </div>:" "
  }
        </>
    )
  }
}

export default news
// 1=constructor ,2=render ,3=componentdid
