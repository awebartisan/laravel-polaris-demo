require('./bootstrap');

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {AppProvider, Card, Page} from '@shopify/polaris';
import {Provider, TitleBar} from '@shopify/app-bridge-react';

export default class App extends Component{

    render(){

        const config = {
            apiKey : document.getElementById("apiKey").value,
            shopOrigin : document.getElementById("shopOrigin").value,
            forceRedirect : true
        };

        return(
            <AppProvider>
                <Provider config={config}>
                    <TitleBar title="Polaris Demo" />
                    <Page title="Polaris Demo Page">
                        <Card sectioned title="Hello World"></Card>
                    </Page>
                </Provider>
            </AppProvider>
        );

    }

}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}