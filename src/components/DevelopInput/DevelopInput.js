import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TagInput from '../TagInput';
import './DevelopInput.css';
import {
    Button,
    Form,
    Message,
    Segment,
    Header,
    Checkbox,
    Transition
} from 'semantic-ui-react';

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

class DevelopInput extends Component {
    state = {
        everCoding : true,
        area: {
            ai: true,
            web: true,
            mobile: true,
            server: true,
            dataAnalysis: true,
            algorithm: true,
            iot: true,
            embedded: true,
            system: true,
            multimedia: true,
            graphic: true,
            network: true,
            game: true,
            language: true
        }
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

    render() {
        const { area } = this.state;
        return (
            <div>
                <Form>
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
                                    <Button style={style.base} onClick={this.handleClickArea} name='web' inverted={area.web} color="orange"> Web </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='server' inverted={area.server} color="blue"> Server </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='mobile' inverted={area.mobile} color="purple"> Mobile </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='system' inverted={area.system} color="yellow"> System Programming </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='dataAnalysis' inverted={area.dataAnalysis} color="green"> Data Analysis </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='algorithm' inverted={area.algorithm} color="red"> Algorithm </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='iot' inverted={area.iot} color="purple"> IOT </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='embedded' inverted={area.embedded} color="pink"> Embedded System</Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='multimedia' inverted={area.multimedia} color="violet"> Multimedia </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='graphic' inverted={area.graphic} color="brown"> Graphics </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='network' inverted={area.network} color="olive"> Network </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='language' inverted={area.language} color="blue"> I experienced programming language grammer </Button>
                                </Segment>
                                <Message style={style.question} as='h3'>Tag libraries or technologies you can use.</Message>
                                <div className="tag-input">
                                    <TagInput visible={!area.ai} title='A.I' />
                                    <TagInput visible={!area.web} title='Web' />
                                    <TagInput visible={!area.server} title='Server' />
                                    <TagInput visible={!area.mobile} title='Mobile' />
                                    <TagInput visible={!area.dataAnalysis} title='Data Analysis' />
                                    <TagInput visible={!area.algorithm} title='Algorithm' />
                                    <TagInput visible={!area.iot} title='IOT' />
                                    <TagInput visible={!area.embedded} title='Embedded System' />
                                    <TagInput visible={!area.system} title='System Programming' />
                                    <TagInput visible={!area.multimedia} title='Multimedia'/>
                                    <TagInput visible={!area.graphic} title='Graphics'/>
                                    <TagInput visible={!area.network} title='Network'/>
                                    <TagInput visible={!area.game} title='Game'/>
                                    <TagInput visible={!area.language} title='Programming Language'/>
                                </div>
                            </div>
                        )}
                        <Link to='/signup/3'><Button color='teal' fluid size='large'>Next</Button></Link>
                    </Segment>
                </Form>
            </div>
        );
    };
}

export default DevelopInput;