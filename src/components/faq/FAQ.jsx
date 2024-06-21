import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-7xl mx-auto my-4 rounded-lg'>
            <h1 className='text-center my-4'>Frequnetly Asked Questions</h1>

            <div className="join join-vertical">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is JS Hoisting?
                    </div>
                    <div className="collapse-content">
                        <p>Variable and function declarations are moved to the top of their rescpective scopes during compilation phase. This is known as hoisting
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Explain the closure concept in JS?
                    </div>
                    <div className="collapse-content">
                        <p>Closure is basically refers to the function along with its lexical scope. Whenever you return a functuon basically you return function along with the access of its lexical scope.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is Event Loop?
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;