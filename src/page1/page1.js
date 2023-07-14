import React, {Component} from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import {Button} from "antd";
import axios from "axios";

class Page1 extends Component {

    state = {
        editorState: BraftEditor.createEditorState('sszey62363ywywy7373785858ywyw37ydhdfhe4yu😂😻\n')
    }
    handleEditorContent=()=>{
        const data=(this.state.editorState.toHTML());
    //     寫入檔案
     //   axios 請求node.js 處理
        axios.post("http://192.168.0.174:8000/users/saveBraftEditorFile",{
            RichContent:data
        }).then(result=>{
            console.log(result.data);
        });
    }
    handleContentChange=(editor)=>{
        this.setState({
            editorState:editor
        });
    }
    render() {
        const { editorState } = this.state
        console.log(this.state.editorState.toHTML());

        return (
            <div>
                <BraftEditor language={"zh-hant"} value={editorState} onChange={this.handleContentChange}/>
                <Button onClick={this.handleEditorContent} style={{"display":"block","margin":"auto"}}>按我</Button>
            </div>
        );
    }
}

export default Page1;