import React, {PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';

class App extends React.Component {

   
  
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }
//   componentDidMount(){
//   fetch('http://api/call')      // returns a promise object
//     .then( result => result.json()) // still returns a promise object, U need to chain it again
//     .then( items => this.setState({items}));
// }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }
 
  
  render() {
 
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    // const   getData = async(e) =>{
    //     e.preventDefault();
    //     //GET is working
    //     const user = e.target.elements.user.value;
    //     //const email = e.target.elements.email.value;
    //     //const api_call = await fetch(`http://gsc-ice-wolf.c9users.io:8082/user`);
    //     const api_call = await fetch(`http://gsc-ice-wolf.c9users.io:8082/user?q={"filters":[{"name":"name","op":"eq","val":"${user}"}]}`);
    //     const data = await api_call.json();
    //     console.log(data);
        
    //     if(user ){//hve to do check based on returned json
    //       this.setState({
    //         email:data.objects[0].email,
    //         name:data.objects[0].name
    //       })
    //     }else{
    //       this.setState({
    //         email:undefined,
    //         name:undefined,
    //         error:"No data returned"
    //       })
    //     }
    // }
    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        username="User Admin"/>

            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);
