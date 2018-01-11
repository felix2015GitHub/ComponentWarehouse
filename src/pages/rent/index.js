import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Checkbox } from '../../components/common';

const DEFAULT_CONFIG = {
    is_new_list: 1,
    type: 1,
    kind: 0,
    searchtype: 1,
    region: 1,
    section: "1,2,3,4,5,7",
    rentprice: "12000,16000",
    area: "10,16",
    keywords: ""
}
const SECTION = ["All", "中正區", "大同區", "中山區", "松山區", "大安區",
                "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"];
const SEARCH_URL = "https://rent.591.com.tw/home/search/rsList";
const SLACK_URL = "https://hooks.slack.com/services/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";

class Rent extends Component {

  constructor(props) {
      super(props);
      this.state = {
          config: DEFAULT_CONFIG,
          loading: false,
          result: [],
          syncToSlack: false
      }
  }

  proccessData(result) {
      const { data } = result;
      let temp = [];
      let d = new Date();
      temp = data.data.filter((item, idx) => {
          return ((d - item.refreshtime*1000) / (60*1000)) < 60;
      })
      this.setState({result: temp});
      // console.log(this.state.syncToSlack);
      if(this.state.syncToSlack) {
          this.postToSlack();
      }
  }

  getPostData() {
      const { result } = this.state;
      let obj = [];

      result.map((item, i) => {
          obj.push({
              "color": "#36a64f",
              "title": item.address_img_title,
              "title_link": `https://rent.591.com.tw/rent-detail-${item.houseid}.html`,
              "fields": [
                  {"value": `${item.region_name} ${item.section_name}`},
                  {"value": `${item.floorInfo} ${item.kind_name}`},
                  {"value": `$ ${item.price}`}
              ],
              "image_url": item.cover
          });
      });

      return { attachments: obj };
  }

  postToSlack() {
      let postData = this.getPostData();
      axios({
          url: SLACK_URL,
          method: 'post',
          header: {
              'Content-Type': 'application/json'
          },
          data: JSON.stringify(postData)
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  handleSearchClick() {
      const self = this;
      const { config } = this.state;
      this.setState({loading: true});
      axios.get(SEARCH_URL, {
          params: config
      })
      .then(function (response) {
          // console.log(response);
          self.proccessData(response.data);
          self.setState({loading: false});
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  handleCheckboxClick(e) {
      const { checked } = e.target;
      this.setState({syncToSlack: checked ? true : false});
  }

  render() {
      const { loading, result, syncToSlack } = this.state;
      const { section, rentprice, area, keywords } = DEFAULT_CONFIG;
      return (
          <div>
              <div><h2>搜尋條件</h2></div>
              <div><span>台北市 </span></div>
              <div>
                  {section.split(",").map((key, i) => {
                      return <span key={`section${i}`}>{SECTION[key]} </span>
                  })}
              </div>
              <div><span>價錢範圍 : </span><span>{`${rentprice.split(",")[0]} ~ ${rentprice.split(",")[1]}`}</span></div>
              <div><span>坪數 : </span><span>{`${area.split(",")[0]} ~ ${area.split(",")[1]}`}</span></div>
              <div><span>關鍵字 : </span><span>{keywords}</span></div>
              <div><span>其他 : </span><span>更新時間1小時內</span></div>
              <br />
              <div>
                <Checkbox
                    id="sync"
                    defaultChecked={syncToSlack}
                    onChange={(e) => this.handleCheckboxClick(e)}
                />
                <span >發送結果至Slack</span>
              </div>
              <Button className={'default'} onClick={() => this.handleSearchClick()} disabled={loading}>搜尋</Button>
              <hr />
              <div><h3>{result.length > 0 ? `搜尋結果 共 ${result.length} 筆` : `搜尋結果`}</h3></div>
              <div>
              {
                  result.map((item, idx) => {
                      return (
                          <div key={`result-${idx}`}>
                            <div><a href={`https://rent.591.com.tw/rent-detail-${item.houseid}.html`} target="_blank">{item.address_img_title}</a></div>
                            <div><span>{`${item.region_name} ${item.section_name}`}</span></div>
                            <div><span>{`${item.floorInfo} ${item.kind_name}`}</span></div>
                            <div><span>{`$ ${item.price}`}</span></div>
                            <div><img src={item.cover} /></div>
                          </div>
                      )
                  })
              }
              </div>
          </div>
      );
  }

}

export default Rent;
