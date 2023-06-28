import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

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
    let url = `
    https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
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

      <div className="container my-3">
<div className='text-center'>
        <h2> <p class="text-uppercase" style={{marginTop:"90px"}}>NEWSGURU - TOP {this.props.category} HEADLINE</p> </h2>
       
      {this.state.loading===true  && <div className="spinner-border text-primary"  style={{position:'relative'}}role="status">
  <span className="visually-hidden">Loading...</span>
</div> }
</div>
      
{!this.state.loading  && <div className='row'>
          {this.state.articals.map((element) => {
            return <div className='col-md-4' key={element.url}><div className='my-3'>
              <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} newsurl={element.url ? element.url : ""} url={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2023/03/98511368-770x433.png"} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
            </div>
            </div>
          })}




        </div>}
        <div className="d-flex justify-content-between">

          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreclick}>  &larr; Previous </button>
          <button type="button"disabled={this.state.page + 1 > Math.ceil(this.state.totalartical / this.props.pagesize)}className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>

        </div>
    )
  }
}

export default news
// 1=constructor ,2=render ,3=componentdid