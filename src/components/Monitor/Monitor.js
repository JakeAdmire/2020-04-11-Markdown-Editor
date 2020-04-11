import React from 'react';

import "./Monitor.css";

var markdown = require("markdown").markdown;


export function Monitor(props) {

    const parseMarkdown = (md) => {
        return markdown.toHTML(md);
    }

    return (
        <div className="Monitor"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(props.inputValue) }}>
        </div>
    );
}
