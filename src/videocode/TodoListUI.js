import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// UI组件---傻瓜组件
class TodoListUI extends Component {
  render() { 
    return ( 
      /*  js注释需要括号，切单行需要换行 fragement占位符  */
      <Fragment>
        {/* jsx注释 */}
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input
            placeholder='请输入'
            onKeyUp={this.props.listenEnter}
            onChange={this.props.handleInputChange}
            value={this.props.inputValue}
            style={{width: '300px', marginRight: '10px'}}>
          </Input>
          <Button type="primary" onClick={this.props.handleBtnClick}>添加</Button>
          <List
            bordered
            dataSource={this.props.list}
            style={{width: '300px', marginTop: '10px'}}
            renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
          />
        </div>
      </Fragment>
    );
  }
}
 
export default TodoListUI;