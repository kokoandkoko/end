import React , {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'



class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width:350,height:350}}
                source={require('../assets/images/login-logo.png')}/>
                <Text style={{ fontWeight:'bold',fontSize:16,marginHorizontal:20}}>Welcome to Wapp</Text>
                <View style={{flexDirection:'row',margin:20,paddingVertical:20}}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Login')}
                        style={{
                            backgroundColor:'red',
                            padding:10,
                            width:150,
                            borderRadius:30,
                            marginHorizontal:10
                            
                        }}
                    >
                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18,color:'#ffffff'}}>Sign In</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor:'red',
                            padding:10,
                            width:150,
                            borderRadius:30,
                            
                           
                            
                        }}
                    >
                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18,color:'#ffffff'}}>Sign Up</Text>



                    </TouchableOpacity>

                    </View>

                    <Text style={{fontSize:30,fontWeight:'bold',}}>or</Text>



                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{height:40,width:40,backgroundColor:'#1592FA',borderRadius:50/2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#e0f2f1'}}>F</Text>
                        </View>

                        <View style={{height:40,width:40,backgroundColor:'red',borderRadius:50/2,justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#e0f2f1'}}>G</Text>
                        </View>

                        
                    </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    }
})
export default HomeScreen;