import React from 'react';
import './style.css'

class ListItem extends React.Component {
  render() {
    const { active, title, contents } = this.props;
    return (
      <div 
        className={active ? "list-item active" : "list-item"}
        onClck={onclick}
      >
        <div className="title">{title ? title : '제목'}</div>
        <div className="title-item-contents">{contents ? contents : '내용'}}</div>
      </div>
    )
  }
}

export default ListItem;