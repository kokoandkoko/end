import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class LoginScreen extends Component{
    state={
      username : "",
      password : "",
      errorMsg : "",
    }
    onLogin=()=>{
        if(this.state.username == '' && this.state.password == ''){
            this.props.navigation.navigate('Main')
        }
        else{
         //   alert('Error')
            this.setState({errorMsg:'Invalid login details'})
        }
    }

    render(){
        return(

            /* Wecomlogin */

            <View style={styles.container}>
                <Text style={{fontSize:25,marginTop:20}}>Welcome</Text>
                <Text style={{fontSize:16,marginTop:20,color:'gray'}}>Sign In to continue</Text>

                <TextInput style={{
                    marginTop:40,
                    borderBottomColor:'red',
                    borderBottomWidth:1,
                    paddingBottom:20,

                }}
                    placeholder='Username'
                    onChangeText={(text)=>
                        {
                            this.setState({errorMsg: ''}),
                            this.setState({username: text})
                        }
                    }
                />     

                <TextInput style={{
                    marginTop:40,
                    borderBottomColor:'red',
                    borderBottomWidth:1,
                    paddingBottom:20
                }}
                    placeholder='Password'
                    onChangeText={(text)=>
                        {
                            this.setState({errorMsg: ''}),
                            this.setState({password: text})
                        }
                    }
                />
               
                <Text style={{marginTop:40,fontSize:20}}>
                    {this.state.errorMsg}
                </Text>


                <View style={{alginItems:'center',justifyContent:'center',marginTop:40}}>
                        <TouchableOpacity onPress={()=>this.onLogin()} style={{
                            
                            width:200,
                            height:30,
                            backgroundColor:'red',
                            alignItems:'center',
                            borderRadius:40,
                            marginTop:30
                        }}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#e0f2f1'}}>Sign In</Text>
                            
                        </TouchableOpacity>
                        <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',marginTop:40}}>Forgot Password</Text>

                </View>  


                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{height:40,width:40,backgroundColor:'#1592FA',borderRadius:50/2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#e0f2f1'}}>F</Text>
                        </View>

                        <View style={{height:40,width:40,backgroundColor:'red',borderRadius:50/2,justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#e0f2f1'}}>G</Text>
                        </View>

                        
                    </View>  
                    
                    <View style={{flexDirection:'row',marginTop:20}}>
                    <Text style={{fontSize:15, color:'gray',marginHorizontal:10}}>Dont't have a account</Text>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Sign Up</Text>
                    </View>
              

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:20
    }
})

export default LoginScreen;
