import React, { Component } from 'react';
import axios from 'axios'
import store from './store';
import { initData, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

// 容器组件（聪明组件）
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.listenEnter = this.listenEnter.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() { 
    return ( 
      <TodoListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        listenEnter={this.listenEnter}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/mock').then((res) => {
      const data = res.data.array
      const action = initData(data)
      // console.log(action)
      store.dispatch(action)
    })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  listenEnter(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick()
      e.stopPropagation()
    }
  }

  handleStoreChange() {
    this.setState(store.getState())
  }
}
 
export default TodoList;