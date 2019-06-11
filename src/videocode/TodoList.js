import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.listenEnter = this.listenEnter.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() { 
    return ( 
      /*  js注释需要括号，切单行需要换行 fragement占位符  */
      <Fragment>
        {/* jsx注释 */}
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input
            placeholder='请输入'
            onKeyUp={this.listenEnter}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            style={{width: '300px', marginRight: '10px'}}>
          </Input>
          <Button type="primary" onClick={this.handleBtnClick}>添加</Button>
          <List
            bordered
            dataSource={this.state.list}
            style={{width: '300px', marginTop: '10px'}}
            renderItem={(item, index) => (<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    );
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