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
    },
    paddinglr : {
        paddingLeft : '6%',
        paddingRight : '6%'
    }
};

class PersonalInput extends Component {
    state = {
        email : '',
        password : '',
        pcheck : '',
        certification_number : '',
        sended : false,
        check : {
            email : false,
            password : false,
            pcheck : false,
            certification_number : false,
            enable_next : false
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.checkCorrectForm(name, value);
    }

    handleSubmit = (e) => {
        this.props.onSubmitPersonal({
            email : this.state.email,
            password : this.state.password
        });
    }

    handleEmail = () => {
        this.setState({
            ...this.state,
            sended : true
        })
    }

    checkCorrectForm = (name, value) => {
        const email_regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
        const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/;
        let check = false;

        if(name === 'email') {
            check = (email_regex.exec(value) !== null);
        }
        else if(name === 'password') {
            check = (password_regex.exec(value) !== null);
        }
        else if(name === 'pcheck') {
            if(value === this.state.password) check = true;
        }
        else return;

        this.setState( {
            ...this.state,
            [name] : value,
            check : {
                ...this.state.check,
                [name] : check
            }
        });
    }

    render() {
        const { certification_number, check, sended } = this.state;
    
        return (
            <div>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Label style={style.base}> Email </Label>
                        { !check.email && <Label pointing='left' color='red' basic>Please enter a valid email address </Label>}
                        <Form.Input onChange={this.handleChange} name='email' fluid icon='at' iconPosition='right' placeholder='E-mail address'/>
                        <Label style={style.base}> Password </Label>
                        { !check.password && <Label pointing='left' color='red' basic>The password must be between 8 and 20 characters and it must be a mixture of numbers and alphabetic characters. </Label>}
                        <Form.Input onChange={this.handleChange} name='password' fluid icon='lock' placeholder='Password' type='password'/>
                        <Label style={style.base}> Password Check </Label>
                        { !check.pcheck && <Label pointing='left' color='red' basic>Passwords do not match. Please check again. </Label>}
                        <Form.Input onChange={this.handleChange} name='pcheck' fluid icon='check' placeholder='Password Check' type='password'/>
                        <Label style={style.base}> Email Authentication </Label>
                        <div>
                            <Form.Input onChange={this.handleChange} name='certification_number' fluid icon='at' iconPosition='right' placeholder='Certification Number'/>
                            <Message content="If you don't receive our mail, click 're-send' button" icon='help circle' info />
                            <Button onClick={this.handleEmail}> {sended ? 'Re-send' : 'Send email'} </Button>
                            <Button disabled={!sended} primary>confirm</Button>
                        </div>
                    </Segment>
                    <Link to='/signup/2'><Button disabled onClick={this.handleSubmit} color='teal' fluid size='large'>
                        Next
                    </Button></Link>
                </Form>
            </div>
        );
    };
}

export default PersonalInput;