import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Grid,
    Form,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Message,
    Table,
  } from 'semantic-ui-react'

const style = {
    base : {
        margin:'0.5rem',
        padding:'0.5rem'
    },
    row : {
        display : 'flex',
        flexDirection : 'row',
    }
};

class PersonalInput extends Component {
    state = {
        email : '',
        password : '',
        password_check : '',
        certification_number : '',
    };

    render() {
        return (
            <div>
                <Form>
                    <Segment piled>
                        <Label style={style.base}> Email </Label>
                        <Form.Input fluid icon='at' iconPosition='right' placeholder='E-mail address'/>
                        <Label style={style.base}> Password </Label>
                        <Form.Input fluid icon='lock' placeholder='Password' type='password'/>
                        <Label style={style.base}> Password Check </Label>
                        <Form.Input fluid icon='check' placeholder='Password' type='password'/>
                        <Label style={style.base}> Email Authentication </Label>
                        <div >
                            <Form.Input fluid icon='at' iconPosition='right' placeholder='Certification Number'/>
                            <Message content="If you don't receive our mail, click 're-send' button" icon='help circle' info />
                            <Button color='gray'> re-send </Button>
                            <Button disabled primary>confirm</Button>
                        </div>
                    </Segment>
                    <Link to='/signup/2'><Button color='teal' fluid size='large'>
                        Next
                    </Button></Link>
                </Form>
            </div>
        );
    };
}

export default PersonalInput;