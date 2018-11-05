import * as React from 'react';
import logo from '../../logo.svg';

export class Header extends React.Component{
    public render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Image CMS</h1>
        </header>);
    }
}