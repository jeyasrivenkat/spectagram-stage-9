import React from "react";
import{Text,View, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Firebase from 'firebase'
import * as Font from 'expo-font'

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={email:'',password:'',userSignedIn:false,fontsLoaded:false}

    }
    async _loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded:true})
    }
    signIn=async(email,password)=>{
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=>{this.props.navigation.replace('Dashboard')})
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render(){
        return(
            <View>
                <TextInput
                placeholder={'enter email'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({email:text})}
                />
                    
                    <TextInput
                placeholder={'enter password'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({password:text})}
                />
                <TouchableOpacity onPress={()=>this.signIn(email,password)}>
                <Text>
                    Submit
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('registerScreen')}>
                    <Text>
                        Register User
                    </Text>
                </TouchableOpacity>
            


            </View>
        )
    }
}