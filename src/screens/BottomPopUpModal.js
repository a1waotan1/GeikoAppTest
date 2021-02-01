import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    Dimensions,
    FlatList,
    Touchable,
  } from 'react-native';

  import { useNavigation } from '@react-navigation/native';
  const deviceHeight = Dimensions.get('window').height

  export default function(props) {
    const navigation = useNavigation();

    return <EmailLogin {...props} navigation={navigation} />;
  }

  export class BottomPopUp extends React.Component {
      constructor(props) {
          super(props)
          this.state={
              show:false
          }
      }

      show = () =>{
          this.setState({show:true})
      }

      close =()=>{
          this.setState({show:false})
          
      }
      renderOutsideTouchable(onTouch) {
          const view = <View style={{flex: 1, width: '100%', }}/>
              if (!onTouch) return view

              return (
                  <TouchableOpacity onPress={onTouch} style= {{flex: 1, width: '100%',}}>
                      {view}
                  </TouchableOpacity>
              )
      }
      

      renderTitle = () => {
          const {title}= this.props
          return(
            <View>
                  <Text style={{
                                color: '#182e44',
                                fontSize: 20,
                                fontWeight: '500',
                                margin: 15,
                            }}>
                                {title}
                            </Text>
                        </View>
          )
      }

      onEmailLoginPress = () =>{
        const {navigation}=this.props;
        navigation.navigate('Login');

      }

      

      render(){
        let {show} = this.state

        const {onTouchOutside, title} = this.props
        


          return(
              
            <Modal 
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
            >
            
            <View style ={{
                flex:1, 
                backgroundColor:'#000000AA', 
                justifyContent:'flex-end'}}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style = {{
                        flex: 2,
                        backgroundColor: '#ffffff',
                        width: '100%',
                        borderRadius: 30,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.6,
                        alignItems: 'center',
                        paddingHorizontal: 20,
                    }}>
                        {this.renderTitle()}
                
                        <View>
                            <TouchableOpacity>
                                <View style ={
                                    {backgroundColor: '#55ACEE',
                                    width: 294,
                                    height: 59,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 18,
                                    }}>
                                    <Text style ={{
                                    color: '#fff', 
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                     }}>
                                    Twitterで続ける</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style ={
                                    {backgroundColor: '#1877F2',
                                    width: 294,
                                    height: 59,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 18,
                                    }}>
                                    <Text style ={{
                                    color: '#fff', 
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                     }}>
                                    FaceBookで続ける</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style ={
                                    {backgroundColor: '#000000',
                                    width: 294,
                                    height: 59,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 18,
                                    }}>
                                    <Text style ={{
                                    color: '#fff', 
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                     }}>
                                    Appleで続ける</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity 
                            onPress={this.onEmailLoginPress}
                            >
                                <View style ={
                                    {backgroundColor: '#F0F0F0',
                                    width: 294,
                                    height: 59,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 18,
                                    }}>
                                    <Text style ={{
                                    color: '#000000', 
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                     }}>
                                    メールアドレスで続ける</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style = {{
                            marginBottom: 22
                        }}>
                            <Text style = {{
                                fontSize: 14,
                                fontWeight:'400',
                            }}>
                                メールアドレスでログインの方はこちら</Text>
                        </TouchableOpacity>
                        <Text>
                        上のボタンを押すと、利用規約とプライバシーポリシーに同意したことになります
                        </Text>
                    </View>
            </View>
            </Modal>


          )
      }
  }

  