import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExperienceInput from 'components/ExperienceInput';
import * as inputActions from 'store/modules/experienceInputReducer';
import { Input } from 'semantic-ui-react';

class ExperienceInputContainer extends Component {

    // 처리 함수 정의
    handleAddExperience = (e) => {
        const { InputActions } = this.props;
        InputActions.add_experience();
    }

    handleDeleteExperience = (id) => {
        const { InputActions } = this.props;
        InputActions.delete_experience(id);
    }

    handleChangeValue = (params) => {
        const { InputActions } = this.props;
        InputActions.change_value(params);
    }

    render() {
        const { experiences } = this.props;
        
        return ( 
        <ExperienceInput
            onAddExperience = {this.handleAddExperience}
            onDeleteExperience = {this.handleDeleteExperience}
            onChangeValue = {this.handleChangeValue}
            experiences={experiences} />
        );
    }
}

// props로 넣어줄 스토어 상태 값
const mapStateToProps = state => ({
    ...state.experienceInputReducer
});

// props로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExperienceInputContainer);