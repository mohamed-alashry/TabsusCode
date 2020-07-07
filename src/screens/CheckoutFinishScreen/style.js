import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor:Colors.light,
    //   padding:10
    },
    bodyContainer:{
      // paddingHorizontal:20,
      paddingTop:50,
    //   marginBottom:'',
      width:'100%',
      // height:height-70 , //70 is the height of header,
    //   justifyContent:'center'
    },
    title: {
      color: Colors.textGray,
      marginBottom:10
  },
  inputTextStyle: {
      width: '100%',
      marginBottom: 20
  },
  radioStyle:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
  },
  radioText:{
    marginHorizontal:10,
    fontWeight:'bold'
  },
  timeBlock:{
    borderTopColor: Colors.lightgray,
    borderTopWidth: 1,
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    marginVertical: 20
  },
  imgContainerStyle: {
    borderColor: Colors.lightgray,
    borderRadius: 5,
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  imgStyle: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  pragText: {
    width: '60%',
    color: Colors.textGray,
    lineHeight: 20,
    fontSize: 13
  },
   footerStyle: {
    position: 'absolute',
    backgroundColor: Colors.light,
    width: '100%',
    bottom: 0,
    // height: '17%',
    padding:20
  },
  priceStyle: {
    // textAlignVertical:'center',
    color: Colors.lightblue,
    fontWeight: 'bold',
    //  marginStart: 5,
  }
});

export default Style;