import React from "react";
import emojiList from "../models/emoji-list";
import {Emoji} from "../models/emoji";
import Entry from "./Entry";

const title = 'Emojipedia';

function createEntry(emoji: Emoji) {
    return <Entry
        key={emoji.id}
        id={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
    />
}

function App() {
    return (
        <div>
            <h1>
                <span>{title}</span>
            </h1>
            <dl className="dictionary">
                {emojiList.map(createEntry)}
            </dl>
        </div>
    );
}

export default App;
