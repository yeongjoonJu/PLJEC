import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Step,
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

class RegisterHeader extends Component {

    render() {
        const { number, onClickHome } = this.props;
        const prior = (number > 1) ? '/signup/'+(number - 1) : '/';
        return (
            <div>
                <Container style={style.h3}>
                    { number !== '4' && <Link to={prior}><Button onClick={onClickHome} content='Back' icon='arrow alternate circle left outline' labelPosition='left' /></Link>}
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
            </div>
        );
    };
}

export default RegisterHeader;