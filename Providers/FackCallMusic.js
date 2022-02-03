import React from 'react';
import Sound from 'react-native-sound';



let Context = React.createContext();
let summer = new Sound("dd.mp3", Sound.MAIN_BUNDLE);

class FackCallProvider extends React.Component{

    state = {
        music: new Sound("dd.mp3", Sound.MAIN_BUNDLE),
    }
    render(){
        return <Context.Provider
            value={this.state}
        
        >
            {this.props.children}

        </Context.Provider> 
    }
}

export { FackCallProvider, Context };