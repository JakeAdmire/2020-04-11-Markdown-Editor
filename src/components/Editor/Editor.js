import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'blueprints-ui';

import "./Editor.css";


export function Editor(props) {
    const textareaRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('editorValue', props.inputValue);
    }, [props.inputValue]);

    const handleChange = (e) => {
        props.stateUpdate(e.target.value);
    }

    const copyText = () => {
        textareaRef.current.select();
        document.execCommand('copy');
      }

    return (
        <div className="Editor">
            <span className="toolbox">
                <Tooltip    text="Copy to clipboard" 
                            position="left">
                    <i  class="fas fa-copy"
                        onClick={copyText}>
                    </i>
                </Tooltip>
            </span>
            <textarea   value={props.inputValue}
                        placeholder="Welcome! Press any key to get started writing markdown..."
                        onChange={(e) => handleChange(e)}
                        ref={textareaRef} 
                        autoFocus>
            </textarea>
        </div>
    );
}