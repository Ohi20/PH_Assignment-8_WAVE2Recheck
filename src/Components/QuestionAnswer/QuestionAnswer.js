import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='QuesAns'>
        <h1>How React works</h1>
        <h2>React normally maintains a tree.The tree is able to do efficient diff algorithms on the nodes.Thinking as HTML code as a tree. So, that is exactly how the browser reacts to DOM (rendered HTML on the browser). React allows this to effectively re-construct the DOM in JavaScript.By comparing with previous DOM and push only those changes to the DOM which have actually changed.</h2>
        <h1>Props vs State</h1>
        <h2>In props, The data passes from one component to another.It is Immutable.It can be used with state and functional components.It is read-only.On the other hand,In state The data passes within the component only.It is Mutable.It can be used only with the state components.It is both read and write.</h2>
        </div>
    );
};

export default QuestionAnswer;