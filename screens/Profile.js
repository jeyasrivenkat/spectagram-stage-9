import React, { Component } from 'react';
import { Switch, Text, View } from 'react-native';

export default class Profile extends Component {
    toggleSwitch(){
        console.log('something')
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                   
                }}>
                <View style={styles.themeContainer}>
                    <Text style={styles.themeText}>dark theme</Text>
                    <Switch 
                    
                    style={{transform:[{scaleX:1.3},{scaleY:1.3}]}}/>
                    value={this.state.isEnable}
                    onValueChange={()=>this.toggleSwitch()}
                </View>
            </View>
        )
    }
}