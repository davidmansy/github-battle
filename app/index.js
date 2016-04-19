//var USER_DATA = {
//  name: 'David Mansy',
//  username: 'davidmansy',
//  image: 'https://avatars0.githubusercontent.com/u/2933430?v=36&s=460'
//};

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes')

ReactDom.render(routes, document.getElementById('app'));

//var Link = React.createClass({
//  changeUrl: function() {
//    window.location.replace(this.props.href);
//  },
//  render: function() {
//    return (
//      <span
//        style={{color: 'blue', cursor: 'pointer'}}
//        onClick={this.changeUrl}>
//        {this.props.children}
//      </span>
//    )
//  }
//});
//
//
//var ProfilePic = React.createClass({
//  render: function() {
//    return (
//      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//    )
//  }
//});
//
//var ProfileLink = React.createClass({
//  render: function() {
//    return (
//      <div>
//        <Link href={'https://www.github.com/' + this.props.username} >
//          {this.props.username}
//        </Link>
//      </div>
//    )
//  }
//});
//
//var ProfileName = React.createClass({
//  render: function() {
//    return (
//      <div>{this.props.name}</div>
//    )
//  }
//});
//
//var Avatar = React.createClass({
//  render: function() {
//    return (
//      <div>
//        <ProfilePic imageUrl={this.props.user.image} />
//        <ProfileName name={this.props.user.name} />
//        <ProfileLink username={this.props.user.username} />
//      </div>
//    )
//  }
//});
//
//ReactDom.render(<Avatar user={USER_DATA} />, document.getElementById('app'));