import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { Transition } from 'semantic-ui-react';
import './TagInput.css';

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const style = {
    base : {
        marginBottom: '1rem'
    }
}

class TagInput extends Component {
    state = {
        area : true,
        tags : [],
        suggestions : [
            { id: 'Pytorch', text: 'Pytorch' },
            { id: 'Tensorflow', text: 'Tensorflow' },
            { id: 'Reinforcement_Learning', text: 'Reinforcement Learning' },
            { id: 'Keras', text: 'Keras' },
            { id: 'Deeplearning4j', text: 'Deeplearning4j' },
            { id: 'CUDA', text: 'CUDA' }
        ]
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

    defaultProps = {
        title : '',
        visible: false
    }

    render() {
        const { title, visible} = this.props;
        const { tags, suggestions} = this.state;

        return (
            <Transition visible={visible} animation='scale' duration={500}>
                <div>
                    <h4>{title}</h4>
                    <ReactTags
                        inline={false}
                        autocomplete={true}
                        tags={tags}
                        suggestions={suggestions}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        handleDrag={this.handleDrag}
                        delimiters={delimiters} />
                </div>
            </Transition>
        );
    }
}

export default TagInput;