import React from 'react';

class LeftSidebar extends React.Component {
  componentWillMount() {
    this.setState({
      collapsed: false,
      num: 2
    });
  }
  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed,
      num: arithmetic(this.state.num, 2)
    })
  }
  render() {
    const classes = this.state.collapsed ? 'sidebar--collapsed' : '';
    return (<div className={`sidebar--left ${classes}` }
                onClick={this.toggleCollapse.bind(this)}>{this.state.num}</div>);
  }
}

export default LeftSidebar;
