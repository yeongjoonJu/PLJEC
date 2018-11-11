import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './DevelopInput.scss';
import classNames from 'classnames/bind';
import { WithContext as ReactTags } from 'react-tag-input';
import {
    Button,
    Form,
    Message,
    Segment,
    Header,
    Checkbox,
    Transition
} from 'semantic-ui-react';

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const cx = classNames.bind(styles);

const style = {
    base : {
        margin:'0.5rem',
        padding:'1rem'
    },
    row : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    paddinglr : {
        paddingLeft : '6%',
        paddingRight : '6%'
    },
    question : {
        marginTop: '2.5rem',
        fontSize: '1.2rem',
        fontFamily: 'bold'
    },
    radio : {
        margin:'0.5rem'
    },
};

class DevelopInput extends Component {
    state = {
        everCoding : true,
        area : {
            ai : true,
            web : true,
            server : true,
            mobile : true,
            dataAnalysis : true,
            algorithm : true,
            iot : true,
            embedded : true,
            system : true,
            multimedia : true,
            graphic : true,
            network : true,
            console : true,
        },
        tags: [
         ],
        suggestions: [
            { id: 'Pytorch', text: 'Pytorch' },
            { id: 'Tensorflow', text: 'Tensorflow' },
            { id: 'Reinforcement_Learning', text: 'Reinforcement Learning' },
            { id: 'Keras', text: 'Keras' },
            { id: 'Deeplearning4j', text: 'Deeplearning4j' },
            { id: 'CUDA', text: 'CUDA' }
         ]
    };

    handleClickArea = (e) => {
        const {area} = this.state;
        this.setState({
            ...this.state,
            area : {
                ...this.state.area,
                [e.target.name] : ![e.target.inverted]
            }
        });
    }

    handleDelete = (i) => {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition = (tag) => {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag = (tag, currPos, newPos) => {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

    render() {
        const {area} = this.state;
        return (
            <div>
                <Form className = {cx('devInput')}>
                    <Segment piled style={style.paddinglr}>
                        <Message style={style.question} as='h3'> Have you ever been programming? </Message>
                        <div style={style.row}>
                            <Form.Field style={style.radio}>
                                <Checkbox radio label='Yes' name='everCoding' value='yes'/>
                            </Form.Field>
                            <Form.Field style={style.radio}>
                                <Checkbox radio label='No' name='everCoding' value='no'/>
                            </Form.Field>
                        </div>
                        { this.state.everCoding && (
                            <div>
                                <Message style={style.question} as='h3'>Please select areas you had experienced.</Message>
                                <Segment inverted style={style.row}>
                                    <Button style={style.base} onClick={this.handleClickArea} name='ai' inverted={area.ai} color="red"> A.I </Button>
                                    <Button style={style.base} name='web' inverted={area.web} color="orange"> Web </Button>
                                    <Button style={style.base} name='server' inverted={area.server} color="blue"> Server </Button>
                                    <Button style={style.base} name='mobile' inverted={area.mobile} color="purple"> Mobile </Button>
                                    <Button style={style.base} name='system' inverted={area.system} color="yellow"> System Programming </Button>
                                    <Button style={style.base} name='dataAnalysis' inverted={area.dataAnalysis} color="green"> Data Analysis </Button>
                                    <Button style={style.base} name='algorithm' inverted={area.algorithm} color="red"> Algorithm </Button>
                                    <Button style={style.base} name='iot' inverted={area.iot} color="purple"> IOT </Button>
                                    <Button style={style.base} name='embedded' inverted={area.embedded} color="pink"> Embedded System</Button>
                                    <Button style={style.base} name='multimedia' inverted={area.multimedia} color="violet"> Multimedia </Button>
                                    <Button style={style.base} name='graphic' inverted={area.graphic} color="brown"> Graphics </Button>
                                    <Button style={style.base} name='network' inverted={area.network} color="olive"> Network </Button>
                                    <Button style={style.base} name='console' inverted={area.console} color="blue"> I just experienced programming language grammer </Button>
                                </Segment>
                                <Message style={style.question} as='h3'>Tag libraries or technologies you can use.</Message>
                                <Transition visible={!area.ai} animation='scale' duration={500}>
                                    <div>
                                        <h4>A.I</h4>
                                        <ReactTags 
                                            autocomplete={true}
                                            tags={this.state.tags}
                                            suggestions={this.state.suggestions}
                                            handleDelete={this.handleDelete}
                                            handleAddition={this.handleAddition}
                                            handleDrag={this.handleDrag}
                                            delimiters={delimiters} />
                                    </div>
                                </Transition>
                            </div>
                        )}
                    </Segment>
                </Form>
            </div>
        );
    };
}

export default DevelopInput;