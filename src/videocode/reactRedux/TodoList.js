import React, { Component } from 'react';
// 把store给provider，通过connect获得store(todolist是provider的子组件)
import { connect } from 'react-redux';
import { CHANGE_INPUT_VULAE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';

// 容器组件（聪明组件）
class TodoList extends Component {

  render() { 
    // 通过解构赋值 让代码更精简
    const { inputValue, list, handleInputChange, handleBtnClick, handleDeleteItem } = this.props
    return ( 
      <div>
        <div>
          <input 
            // value={this.props.inputValue} 
            // onChange={this.props.handleInputChange}
            value={inputValue} 
            onChange={handleInputChange}
            onKeyUp={this.listenEnter.bind(this)}
          />
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={() => {handleDeleteItem(index)}}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }

  listenEnter(e) {
    if (e.keyCode === 13) {
      this.props.handleBtnClick()
    }
  }
}

// 连接的方法的规则(mapStateToProps将state映射成props)
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

// 连接的方法的规则(mapDispatchToProps将store.dispatch()挂载到props)
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange (e) {
      const action = {
        type: CHANGE_INPUT_VULAE, 
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick () {
      const action = {
        type: ADD_TODO_ITEM, 
      }
      dispatch(action)
    },
    handleDeleteItem (index) {
      const action = {
        type: DELETE_TODO_ITEM, 
        index
      }
      dispatch(action)
    }
  }
}

// todoList(没有listenEnter的话)应该写作无状态组件（UI组件）。无状态组件+connect的数据返回的是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);