import React from "react";
// import {Link} from 'react-router';
// import PageBase from '../components/PageBase';
import axios from 'axios';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

//https://stackoverflow.com/questions/39680773/how-do-i-access-data-returned-from-an-axios-get-to-display-on-a-web-page-using-r
//https://v0.material-ui.com/#/components/card
// https://stackoverflow.com/questions/30803168/data-map-is-not-a-function
//https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react

// const HotDrop = () => {
class HotDrop extends React.Component{
//   const styles = {
//     toggleDiv: {
//       maxWidth: 300,
//       marginTop: 40,
//       marginBottom: 5
//     },
//     toggleLabel: {
//       color: grey400,
//       fontWeight: 100
//     },
//     buttons: {
//       marginTop: 30,
//       float: 'right'
//     },
//     saveButton: {
//       marginLeft: 5
//     }
//   };

constructor(props) {
    super(props);
    this.state = {
          classrooms: [],
          profile: {country: '', firstName: 'Apples', lastName: 'Charles', gravatar: '', organization: ''}
        };
  }
 
componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
    });
  }

// getit(){
//   fetch('https://mywebsite.com/endpoint/', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstParam: 'yourValue',
//       secondParam: 'yourOtherValue',
//     })
//   });
// }




    render(){
      return (
        <div>
           <ul>
                 <p>Welcome {this.state.profile.firstName}  {this.state.profile.lastName}</p>
                 <h1>List of names:</h1>
                 <ol>
                   
                    { this.state.persons && this.state.persons.map(person =>
                    
                         <li key={person.id}>{person.name} </li>

                    )}
                 </ol>
            </ul>
        </div>
        // <PageBase title="HotDrop Page"  navigation="Application / HotDrop Page">
        //     <div>
        //         <ul>
        //               <p>Welcome {this.state.profile.firstName}  {this.state.profile.lastName}</p>
        //         </ul>
        //         <Card>
        //         <br></br>
        //         <CardHeader
        //           title="Without Avatar"
        //           subtitle="Subtitle"
        //           actAsExpander={true}
        //           showExpandableButton={true}
        //         />
        //         <CardActions>
        //           <FlatButton label="Action1" />
        //           <FlatButton label="Action2" />
        //         </CardActions>
        //         <CardText expandable={true}>
        //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        //           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        //           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        //         </CardText>
        //       </Card>
        //     </div>
        // </PageBase>
      );
    }
}

export default HotDrop;