import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { PersonalInput } from './register_form';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react'

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '0.5em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
    comp: {
        margin:'0.5rem',
        padding:'0.5rem'
    },
    base: {
        marginBottom: '2rem',
    }
}

class Signup extends Component {

    state = {
        personalInfo : {
            email : '',
            password : '',
        }
    }

    handlePersonalInfo = (data) => {
        this.setState({
            ...this.state,
            personalInfo : {
                ...data
            }
        });
    }

    render() {
        const { match } = this.props;
        const number = match.params.number;

        return (
            <div>
                <Container style={style.h3}>
                    <Link to='/'><Button content='Home' icon='arrow alternate circle left outline' labelPosition='left' /></Link>
                    <h1>Join PLJEC</h1>
                    The best way to implement your idea with diverse people.
                </Container>
                <Container style={style.base}>
                    <Step.Group fluid>
                        { (number === '1' || number === undefined) ?
                            ( <Step active icon='address card' title='Step 1:' description='Create personal account' /> )
                            : ( <Step disabled icon='address card' title='Step 1:' description='Create personal account' /> )
                        }
                        { number === '2' ?
                            ( <Step active icon='clipboard outline' title='Step 2:' description='Enter your detail information' /> )
                            : ( <Step disabled icon='clipboard outline' title='Step 2:' description='Enter your detail information' /> )
                        }
                        { number === '3' ?
                            ( <Step active icon='tasks' title='Step 3:' description='Enter your experience' /> )
                            : ( <Step disabled icon='tasks' title='Step 3:' description='Enter your experience' /> )
                        }
                    </Step.Group>
                </Container>
                <Container style={style.base}>
                    { (number === '1' || number === undefined) && <PersonalInput onChange={this.handlePersonalInfo} />}
                </Container>
            </div>
        );
    };
}

export default Signup;