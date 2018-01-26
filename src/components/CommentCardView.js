import React, { Component } from 'react';
import TimeAgo from 'react-time-ago';
import 'react-time-ago/Tooltip.css'

class CommentCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <span>Category: {this.props.data.Category}</span>
        <br/>
        <span>Content: {this.props.data.Content}</span>
        <br/>
        <span>Dislike: {this.props.data.DislikeIt}</span>
        <br/>
        <span>Status: {this.props.data.Status}</span>
        <br/>
        <span>Time: <TimeAgo>{this.props.data.Time}</TimeAgo></span>
      </div>
    );
  }

}

export default CommentCardView;
