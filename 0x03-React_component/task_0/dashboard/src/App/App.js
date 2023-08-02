importReactfrom'react';
import'./App.css';
importHeaderfrom'../Header/Header';
importFooterfrom'../Footer/Footer';
importNotificationfrom'../Notifications/Notifications';
importLoginfrom'../Login/Login';
importCourseListfrom'../CourseList/CourseList';
import{getLatestNotification}from'../utils/utils';
importPropTypesfrom'prop-types';


classAppextendsReact.Component{
staticlistCourses=[
{id:1,name:'ES6',credit:60},
{id:2,name:'Webpack',credit:20},
{id:3,name:'React',credit:40}
];

staticlistNotifications=[
{id:1,value:"Newcourseavailable",type:"default"},
{id:2,value:"Newresumeavailable",type:"urgent"},
{id:3,html:{__html:getLatestNotification()},type:"urgent"},
];
constructor(props){
super(props);
}

render(){
return(
<React.Fragment>
<NotificationlistNotifications={this.listNotifications}/>
<divclassName="App">
<Header/>
{this.props.isLoggedIn?<CourseListlistCourses={this.listCourses}/>:<Login/>}
<Footer/>
</div>
</React.Fragment>
);
}
}

App.defaultProps={
isLoggedIn:false
};

App.propTypes={
isLoggedIn:PropTypes.bool
};

exportdefaultApp;
