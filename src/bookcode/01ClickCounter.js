// jsx最终渲染为会被转译依赖于react的表达式（React不直接用也不能删掉）
import React, { Component } from 'react';

// 组件：高内聚，低耦合（数据分2种：props和state,无论哪个数据变化都可能引发组件重新渲染）
class ClickCounter extends Component {
  constructor(props) {
    // props组件的对外接口（任何js的数据结构）
    super(props)
    this.onClickButton = this.onClickButton.bind(this)
    // state组件内部状态(必须是对象)
    this.state = {count :0}
  }

  onClickButton() {
    this.setState({count: this.state.count+1})
  }

  // virtual dom
  render() {
    // 定义样式
    const counterStyle = {
      margin:  '16px'
    }
    // 定义HTML
    return(
      <div style={counterStyle}>
        <button onClick={this.onClickButton}>点击</button>
        <div>
          计数器：{this.state.count}
        </div>
      </div>
    )
  }
}

export default ClickCounter;
