import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = []
     constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
     }
     async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=089128af489d44f29cdbb8672d2c6e8e&page=${this.state.page}&pageSize=10`;
        let data = await fetch(url);
        let parsedData =  await data.json()
        let totalResults = parsedData.totalResults
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
        console.log("total result",  totalResults)
    }
    handleNextClick = async()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

        }
        else{
            console.log("next")
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=089128af489d44f29cdbb8672d2c6e8e&page=${this.state.page + 1}&pageSize=10`;
            let data = await fetch(url);
            let parsedData =  await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
            
        }
    }
    handlePreviousClick = async()=>{
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=089128af489d44f29cdbb8672d2c6e8e&page=${this.state.page - 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData =  await data.json()
        this.setState({ page: this.state.page - 1, articles: parsedData.articles})
    }
render() {
return (
    <div className='container my-3'>
        <h2>News App - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=> {
                    return    <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title} description={element.description} 
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}/>
                    </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handlePreviousClick}> &laquo; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/10)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
    </div>
)
}
}

export default News
