import React, { Component } from 'react';
import CountdownTimer from './CountdownTimer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wordsGameActions from './actions';
import { Button } from '../../components/common';
import { questionList } from './questionList';
import { bopomofo } from './bopomofo';

import './index.css';

const WORD_NUMBER = 25;
const COUNTDOWNTIME = 20;

class WrodsGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: false,
            questionNum: 0,
            wordNum: 0,
        };
    }

    componentDidMount() {
        this.genWords();
        this.genQuestion();
    }

    genWords() {
        let len = bopomofo.length;
        let result = [];
        for(let i=0; i>-1; i++) {
            let flag = true;
            let num = Math.floor(Math.random()*len-1)+1;
            if(result.indexOf(num) != -1) {
                flag = false;
            }
            if(flag == true){
                result.push(num);
            }
            if(result.length === WORD_NUMBER) break;
        }
        this.wordList = result;
    }

    genQuestion() {
        let len = questionList.length;
        let questionNum = Math.floor(Math.random()*len-1)+1;
        const { actions } = this.props;
        actions.questionNum({num: questionNum});
    }

    handleStartClick = () => {
        const { actions } = this.props;
        actions.gameState();
        actions.wordNum();
    }

    handleFinish = () => {
        const { actions } = this.props;
        actions.gameState();
    }

    render() {
        const { start, wordNum, questionNum } = this.props;
        return (
            <div className="wordsgame-wrapper">
                <div className="title">
                    <span>急中生字ㄅㄆㄇ</span>
                </div>
                <div className="questions">
                    <span>{`題目 : ${questionList[questionNum]}`}</span>
                    <Button
                        className="btn-go"
                        onClick={this.handleStartClick}
                        disabled={start?true:false}>Go
                    </Button>
                </div>
                {start &&
                    <div className="countdown-area">
                        <CountdownTimer className="countdowntimer" setTime={COUNTDOWNTIME*1000} handleFinish={this.handleFinish} />
                        <div className="word">
                            <span>{bopomofo[this.wordList[wordNum]]}</span>
                        </div>
                    </div>
                }
            </div>
        );
    }

}

const mapStateToProps = (state)  => {
    const { start, questionNum, wordNum } = state.WordsGameReducer;
    return { start, questionNum, wordNum };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(wordsGameActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WrodsGame);
