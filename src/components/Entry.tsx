import React from "react";
import {Emoji} from "../models/emoji";

function Entry(props:Emoji) {
    return (
        <div className="term">
            <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
            </span>
                <span>{props.name}</span>
            </dt>
            <dd>{props.meaning}</dd>
        </div>
    );
}

export default Entry;