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

    render() {
        const { certification_number, onChange, check, sended } = this.props;
    
        return (
            <div>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Label style={style.base}> Email </Label>
                        { !check.email && <Label pointing='left' color='red' basic>Please enter a valid email address </Label>}
                        <Form.Input disabled={sended} onChange={onChange} name='email' fluid icon='at' iconPosition='right' placeholder='E-mail address'/>
                        <Label style={style.base}> Password </Label>
                        { !check.password && <Label pointing='left' color='red' basic>The password must be between 8 and 20 characters and it must be a mixture of numbers and alphabetic characters. </Label>}
                        <Form.Input onChange={onChange} name='password' fluid icon='lock' placeholder='Password' type='password'/>
                        <Label style={style.base}> Password Check </Label>
                        { !check.pcheck && <Label pointing='left' color='red' basic>Passwords do not match. Please check again. </Label>}
                        <Form.Input onChange={onChange} name='pcheck' fluid icon='check' placeholder='Password Check' type='password'/>
                        <Label style={style.base}> Email Authentication </Label>
                        <div>
                            <Form.Input onChange={onChange} name='certification_number' fluid icon='at' iconPosition='right' placeholder='Certification Number'/>
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