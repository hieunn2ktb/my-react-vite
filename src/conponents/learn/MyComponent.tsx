import './style.css';

const MyComponent = () => {
    const message = "Welcome to MyComponent!";
    return (
        <>
        <div className='child'>
            <h2>This is MyComponent</h2>
            <p >{message} Welcome to MyComponent!</p>
        </div>
        <div>

        </div>
        </>
        
    );
} 

export {MyComponent} ;