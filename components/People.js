import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions,
        TouchableOpacity, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mails from './MailDB.js';
import Header from './Header.js';
import ContactItem from './ContactItem.js';

type Props = {};
  var wS = Dimensions.get('window');
  var dh = wS.height;
  var dw = wS.width;

export class People extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Header title="People" rightIcon="search" navigation={this.props.navigation} />
       <View style={styles.body}>
           <FlatList
             data={Mails}
              keyExtractor={(item, index) => item.id}
             renderItem={({item}) => <ContactItem contact={item}/>}
            />
       </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  appBar: {
    backgroundColor:'#c110a4',
    height: APPBAR_HEIGHT,
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-start'
    },

  headerText:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline',
    flex:1
    },

  drawrIcon:{
    color:'#fff',
    margin:15,
    },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusBar: {
      height: STATUSBAR_HEIGHT,
    },


});
