import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DevelopInput from 'components/Register/DevelopInput';
import * as inputActions from 'store/modules/developInputReducer';

class DevelopInputContainer extends Component {

    // 처리 함수 정의
    handleClickArea = (i) => {
        const { InputActions } = this.props;
        InputActions.click_area(i);
    }

    handleAddInterest = (e) => {
        const name = e.target.name;
        const { InputActions } = this.props;
        InputActions.add_interest(name);
    }

    handleDesignerRadio = (value) => {
        const { InputActions } = this.props;
        InputActions.designer_radio(value);
    }

    handleDevelopRadio = (value) => {
        const { InputActions } = this.props;
        InputActions.develop_radio(value);
    }

    render() {
        const {everCoding, choiceLimit, areas, interests, designer} = this.props;
        
        return ( 
        <DevelopInput
            onClickArea={this.handleClickArea}
            onAddInterest={this.handleAddInterest}
            onClickDesignerRadio={this.handleDesignerRadio}
            onClickDevelopRadio = {this.handleDevelopRadio}
            everCoding={everCoding}
            choiceLimit={choiceLimit}
            designer= {designer}
            areas={areas}
            interests={interests} />
        );
    }
}

// props로 넣어줄 스토어 상태 값
const mapStateToProps = state => ({
    ...state.developInputReducer
});

// props로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
    InputActions: bindActionCreators(inputActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DevelopInputContainer);