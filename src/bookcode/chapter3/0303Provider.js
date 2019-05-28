/*
  顶层组件扮演context提供者，包含store的context，就覆盖了所有组件
  provider的getChildContext返回context对象
  provider的render好函数只简单把子组件渲染出来
*/
import { Component } from 'react';

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

export default Provider;
