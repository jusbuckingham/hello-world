import React, { Component } from "react";

class Article extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
  
      return (
        <div key={this.props.idx}>
            <article className="message is-black">
                <div className="message-header">
                    <p>{this.props.categories}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    <div className="board-item">
                        <div className="board-item-content"><span>{this.props.tvShow}</span></div>
                    </div>
                </div>
            </article>

        </div>
      );
    }
  }
  
  export default Article;