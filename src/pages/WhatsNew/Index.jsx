import React, { Component } from "react";
import styles from "./Index.module.css";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import topImg from "../../assets/imgs/Moon.png";
import { Button } from "antd-mobile";
import Animation from 'animate.css'

const WhatsNew = inject("userStore")(
  withRouter(
    observer(
      class WhatsNew extends Component {
        render() {
          return (
            <div>
              <img className={styles.pngSize} src={topImg} alt="lullaby" />
              <div className={`animated jello infinite ${styles.titleStyle}`}>LULLABY</div>
              <div className={styles.red}>
                这是首页，路径为src/pages/WhatsNew/Index.jsx
              </div>
              <div className={styles.blue}>
                下面是状态管理器<strong>Mobx</strong>中的数据
              </div>
              <div>{this.props.userStore.counts}</div>
              <Button type="primary" onClick={this.clickNet}>
                网络请求相关功能
              </Button>
              <i className="iconfont icon-BAI-tupian"></i>
            </div>
          );
        }
        clickNet = () => {
          this.props.userStore.clickBtn();
        };
      }
    )
  )
);

export default WhatsNew;
