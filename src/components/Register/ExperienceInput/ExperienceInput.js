import React, {Component} from 'react';
import { Segment, Message, Form, Card, Button, Header, Icon } from 'semantic-ui-react';
import styles from './ExperienceInput.scss';
import classNames from 'classnames/bind';
import ExperienceForm from '../ExperienceForm';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const style = {

    base : {
        padding:'2rem',
        paddingLeft:'2.5rem',
        paddingRight:'2.5rem',
        fontSize:'5rem'
    },
    question : {
        marginTop: '2.5rem',
        fontSize: '1.2rem',
        fontFamily: 'bold'
    },
    radio : {
        margin:'0.5rem'
    },
    paddinglr : {
        paddingLeft: '6%',
        paddingRight: '6%'
    }
};

class ExperienceInput extends Component {

    render() {
        const { experiences, onAddExperience, onDeleteExperience, onChangeValue } = this.props;
        let idx = 1;
        const experienceList = experiences.map(({id, project_name, explanation, tags}) =>
            <ExperienceForm
                index={idx++} key={id} id={id} name={project_name}
                explanation={explanation} tags={tags}
                onDeleteExperience={onDeleteExperience}
                onChangeValue={onChangeValue}/>);
        return (
            <Form>
                <Segment piled style={style.paddinglr} >
                    <Message style={style.question} content='Please tell us about projects you had experienced!' as='h3'/>
                    <div className={cx('cards')}>
                        { experienceList }
                        <div className={cx('addCard')}><Button onClick={onAddExperience} style={style.base}>+</Button></div>
                    </div>
                </Segment>
                <Link to='/signup/4'><Button color='teal' fluid size='large'>Registration</Button></Link>
            </Form>
        )
    }
}

export default ExperienceInput;