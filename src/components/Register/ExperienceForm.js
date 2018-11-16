import React, { Component } from 'react';
import { TextArea, Input, Card, Label, Button} from 'semantic-ui-react';
import TagInput from '../TagInput';

const style = {
    base : {
        margin:'0.5rem',
    },
    idLabel : {
        fontSize: '1rem',
        marginLeft: '1rem',
        color: 'white',
        backgroundColor: 'orange'
    }
}
class ExperienceForm extends Component {
    handleDeleteExperience = (e) => {
        const {id} = this.props;
        this.props.onDeleteExperience(id);
    }

    handleChangeValue = (e, {name}) => {
        const {id} = this.props;
        const value = e.target.value;
        this.props.onChangeValue({name: name, id: id, value: value});
    }

    render() {
        const { index, name, explanation, tags, id } = this.props;
        return (
            <Card style={style.base}>
                <Card.Content>
                    <Input name='project_name' onChange={this.handleChangeValue} placeholder='your project name' value={name}/>
                    <Button onClick={this.handleDeleteExperience} style={style.idLabel} circular animated='fade'>
                        <Button.Content visible>{index}</Button.Content>
                        <Button.Content hidden> X </Button.Content>
                    </Button>
                </Card.Content>
                <Card.Content><TextArea name='explanation' value={explanation} onChange={this.handleChangeValue} rows='2' placeholder='Simple explanation about your project' value={explanation}/></Card.Content>
                <Card.Content><TagInput visible title='Please tag the technology or field associated with your project.' /></Card.Content>
            </Card>
        );
    }
}

export default ExperienceForm;