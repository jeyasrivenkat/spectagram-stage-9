import React from "react";
import{Text,View, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Firebase from 'firebase'

export default class RegisterScreen extends React.Component{
    constructor(){
        super()
        this.state={first_name:'',
                    last_name:'',
                    email:'',
                    password:'',
                    confirm_password:'',
    }
    }
    render(){
        return(
            <View>
                <TextInput 
                placeholder={'input first name here'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({first_name:text})}
                            
                />
                
                <TextInput 
                placeholder={'input last name here'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({last_name:text})}
                            
                />
                                
                <TextInput 
                placeholder={'input email here'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({email:text})}
                            
                />

                <TextInput 
                placeholder={'input password here'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({password:text})}
                            
                />
                <TextInput 
                placeholder={'input password again'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({confirm_password:text})}
                            
                />
                <TouchableOpacity>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }
}