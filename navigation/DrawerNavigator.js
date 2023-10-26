import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import StackNavigator from './StackNavigator'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        async addPost(){
            if(
                this.state.caption
            ){
                let postData={
                    previewImage:this.state.previewImage,
                    caption:this.state.caption,
                    author:firebase.auth().currentUser.displayName,
                    created_on:new Date(),
                    author_uid: firebase.auth().currentUser.uid,
                    profile_image:this.state.profile_image,
                    likes:0
                }
                await firebase
                .database()
                .ref(
                    '/posts/'+
                    Math.random()
                    .toString(36),
                    .slice(2),

                )
                .set(postData)
                .then(function (snapshot){});
                this.props.setUpdateToTrue();
                this.props.navigation.navigate('feed')

                
            }else{
                Alert.alert(
                    "error",
                    "all fields are required",
                    [{text:"ok",onPress:()=>console.log('ok pressed')}],
                    {cancelable:false}
                )
            }
        }
    }

    componentDidMount() { 
        let theme;
        firebase
        .database()
        .ref("/users/"+firebase.auth().currentUser.uid)
        .on("value",function (snapshot) {
            theme=snapshot.val().current_theme;
        });
        this.setState({ light_theme: theme==="light" ? true : false});
    }
    render(){
        let props = this.props;
        return(
            <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor:'#e91e63',
                inactiveTintColor:this.state.light_theme ? "black" : "white",
                itemStyle: {marginVertical: 5}
            }}
            />
        )
    }
}


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};
