import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input } from '../../components/common';
// const URL = 'https://ec-bot-web.line-apps.com/event/luckyprice/trend/ugBFIDeyMxcoCaY7HaaGgUUKWaj3xCddVX8EgYXNpzZGUOISvTkx2djiopQ44W0TIPnZINyYJvVR9jKFEMsWwA';

class LuckyPrice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiurl: "",
      loading: false,
      resultNum: [],
      inputValue: ""
    };
  }

  proccessData(data) {
    const { resultNum, inputValue } = this.state;
    let arr = resultNum;
    data.forEach((d) => {
      if(resultNum.indexOf(d.price) < 0) {
        arr.push(d.price);
      }
    })
    this.compare(inputValue, arr);
    this.setState({resultNum: arr});
  }

  compare(inputValue, arr) {
    if(arr.indexOf(inputValue) !== -1) {
      alert("已有相同出價");
    }
  }

  handleButtonClick() {
    // const self = this;
    const { apiurl } = this.state;
    this.setState({loading: true});
    axios.get(apiurl, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(function (resp) {
        console.log(resp);
        this.proccessData(resp.result.data);
        this.setState({loading: false});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
      const { apiurl, loading, inputValue } = this.state;
      return (
        <div>
          <div>Lucky Price</div>
          <div>
            <span>API URL</span>
            <Input
              className={'default'}
              style={{width: 200}}
              placeholder={'Type API URL'}
              value={apiurl}
              onChangeText={(e) => this.setState({apiurl: e.target.value})}
            />
          </div>
          <div>
            <span>Your Price</span>
            <Input
              className={'default'}
              style={{width: 80}}
              placeholder={'Price'}
              value={inputValue}
              onChangeText={(e) => this.setState({inputValue: e.target.value})}
            />
          </div>
          <Button className={'default'} onClick={() => this.handleButtonClick()} disabled={loading}>送出</Button>
          <hr />
        </div>
      );
  }

}

export default LuckyPrice;
