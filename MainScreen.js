import React , {Component} from 'react';
import {View, Text ,Button,Image,StyleSheet} from 'react-native';

class MainScreen extends Component{
    render(){
        return(
            
            <View style={{justifyContent:'center',alignItems:'center'}}>

                <View style={styles.itemRow}>
                    <View style={styles.box1}>
                        <Text style={styles.box2}>Wallpaper</Text>
                        <Text style={styles.box3}>4K</Text>
                    </View>
                <Image source={{uri: 'https://external-preview.redd.it/GOkP8onbuyjGmN9Rc8Que5mw21CdSw6OuXpAKUuE6-4.jpg?auto=webp&s=2bc0e522d1f2fa887333286d557466b2be00fa5e',}} style={styles.itemImage}/>

                <Image source={{uri: 'https://free4kwallpapers.com/uploads/originals/2020/04/30/retro-mustang-wallpaper.jpg',}} style={styles.itemImage}/>

                <Image source={{uri: 'https://i.imgur.com/sjvtlq0.png',}} style={styles.itemImage}/>
                </View>   
                <Button
                title="Logout"
                onPress={()=>this.props.navigation.navigate('Home')}>

                </Button>
                
            </View>
        );
        
    }

    
    
    

}

const styles = StyleSheet.create({
    container:{
        marginTop:0,
        backgroundColor:'#FFB6C1',
        
       },
       itemRow:{
         borderBottomColor:'#ccc',
         marginBottom:10,
         borderBottomWidth:1,
       },
       itemText:{
         fontSize:20,
         padding:1,
         color:'black',
         fontWeight:'bold',
         textAlign:'center',
       },
       itemImage:{
        justifyContent:'center',
        alignItems:'center',
         width:'100%',
         height:600,
         resizeMode:'cover',
         borderColor:'pink',
         borderWidth:15,
       },
       loader:{
         marginTop:10,
         alignItems:'center',
       },
       box1:{
         height:150,
       },
       box2:{
         fontSize:50,
         fontWeight:'bold',
         textAlign:'center',
         color:'#000',
         marginTop:26,
       },
       box3:{
         fontSize:28,
         fontWeight:'bold',
         color:'#000',
         textAlign:'center',
         marginTop:0,
       }


}
)
export default MainScreen;
