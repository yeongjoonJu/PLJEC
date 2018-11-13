import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TagInput from '../TagInput';
import './DevelopInput.css';
import {
    Button,
    Form,
    Message,
    Segment,
    Checkbox,
    Transition
} from 'semantic-ui-react';

const style = {

    base : {
        margin:'0.5rem',
        padding:'1rem'
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
    handleClickArea = (e, {inverted}) => {
        const {name} = e.target;
        this.props.onClickArea({name: name, inverted: inverted})
    }

    handleDesignerRadio = (e, {value}) => {
        this.props.onClickDesignerRadio(value);
    }

    handleDevelopRadio = (e, {value}) => {
        this.props.onClickDevelopRadio(value);
    }

    render() {
        const { everCoding, choiceLimit, areas, interests, onAddInterest, designer} = this.props;       
        const interestList = interests.map(
            ({id, text, color, choice}) => (
                <Transition key={id} visible={!choice} animation='scale' duration={300}>
                    <Button onClick={onAddInterest} style={style.base} name={text} inverted={false} color={color}> {text} </Button>
                </Transition>
            )
        );

        let choicedinterestList = interests.filter(interest => interest.choice);
        choicedinterestList = choicedinterestList.map(
            ({id, text, color, choice}) => (
                <Transition key={id} visible={choice} animation='scale' duration={300}>
                   <Button onClick={onAddInterest} style={style.base} name={text} inverted={false} color={color}> {text} </Button>
                </Transition>
            )
        );

        return (
            <div>
                <Message icon='info circle' info style={style.question}  as='h3'
                content='Whatever you choose, you can participate in the project with the role you want.'/>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Message style={style.question} as='h3'> Have you ever been programming? </Message>
                        <div className='area'>
                            <Form.Field style={style.radio}>
                                <Checkbox onClick={this.handleDevelopRadio} checked={everCoding} radio label='Yes' name='everCoding' value='yes'/>
                            </Form.Field>
                            <Form.Field style={style.radio}>
                                <Checkbox onClick={this.handleDevelopRadio} checked={!everCoding} radio label='No' name='everCoding' value='no'/>
                            </Form.Field>
                        </div>

                        {!everCoding && designer !== undefined && (
                            <div>
                                <Message style={style.question} as='h3'> Welcome! Are you designer? </Message> 
                                <div className='area'>
                                    <Form.Field style={style.radio}>
                                        <Checkbox onClick={this.handleDesignerRadio} checked={designer} radio label='Yes' name='designer' value='yes'/>
                                    </Form.Field>
                                    <Form.Field style={style.radio}>
                                        <Checkbox onClick={this.handleDesignerRadio} checked={!designer} radio label='No' name='designer' value='no'/>
                                    </Form.Field>
                                </div>
                            </div>
                        )}
                            
                        <Transition visible={everCoding} animation='scale' duration={300}>
                            <div>
                                <Message style={style.question} as='h3'>Please select areas you had experienced.</Message>
                                <Segment inverted style={style.row}>
                                    <Button style={style.base} onClick={this.handleClickArea} name='ai' inverted={areas.ai} color="red"> A.I </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='web' inverted={areas.web} color="orange"> Web </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='server' inverted={areas.server} color="blue"> Server </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='mobile' inverted={areas.mobile} color="teal"> Mobile </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='system' inverted={areas.system} color="yellow"> System Programming </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='dataAnalysis' inverted={areas.dataAnalysis} color="green"> Data Analysis </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='algorithm' inverted={areas.algorithm} color="red"> Algorithm </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='iot' inverted={areas.iot} color="purple"> IOT </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='embedded' inverted={areas.embedded} color="pink"> Embedded System</Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='multimedia' inverted={areas.multimedia} color="violet"> Multimedia </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='graphic' inverted={areas.graphic} color="brown"> Graphics </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='network' inverted={areas.network} color="olive"> Network </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='game' inverted={areas.game} color="green"> Game </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='security' inverted={areas.security} color="violet"> Security </Button>
                                    <Button style={style.base} onClick={this.handleClickArea} name='language' inverted={areas.language} color="blue"> I experienced programming language grammer </Button>
                                </Segment>
                                <Message style={style.question} as='h3'>Please tag libraries or technologies you can use.</Message>
                                <div className="tag-input">
                                    <TagInput visible={!areas.ai} title='A.I' />
                                    <TagInput visible={!areas.web} title='Web' />
                                    <TagInput visible={!areas.server} title='Server' />
                                    <TagInput visible={!areas.mobile} title='Mobile' />
                                    <TagInput visible={!areas.dataAnalysis} title='Data Analysis' />
                                    <TagInput visible={!areas.algorithm} title='Algorithm' />
                                    <TagInput visible={!areas.iot} title='IOT' />
                                    <TagInput visible={!areas.embedded} title='Embedded System' />
                                    <TagInput visible={!areas.system} title='System Programming' />
                                    <TagInput visible={!areas.multimedia} title='Multimedia'/>
                                    <TagInput visible={!areas.graphic} title='Graphics'/>
                                    <TagInput visible={!areas.network} title='Network'/>
                                    <TagInput visible={!areas.game} title='Game'/>
                                    <TagInput visible={!areas.security} title='Security'/>
                                    <TagInput visible={!areas.language} title='Programming Language'/>
                                </div>
                            </div>
                        </Transition>
                        
                        <Message style={style.question} as='h3'>Please Select 4 or fewer interests below.</Message>
                        <div className='interest'>
                            { choicedinterestList}
                        </div>
                        <Segment disabled={choiceLimit} className='interest'>
                            { interestList }
                        </Segment>
                        <Link to='/signup/3'><Button color='teal' fluid size='large'>Next</Button></Link>
                    </Segment>
                </Form>
            </div>
        );
    };
}
export default DevelopInput;