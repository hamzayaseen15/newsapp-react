import React, { Component } from 'react';

export class NewsItem extends Component {
render() {
    let {title, description} = this.props;
return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://image.cnbcfm.com/api/v1/image/107344970-1702025501084-gettyimages-1831281608-a1_08224_libkos.jpeg?v=1702026408&w=1920&h=1080" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
)
}
}

export default NewsItem
