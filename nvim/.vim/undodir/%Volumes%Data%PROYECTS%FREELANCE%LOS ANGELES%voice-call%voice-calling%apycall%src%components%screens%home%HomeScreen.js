Vim�UnDo� i��$a0���,�h���s	�W��dz�9   !       	                           _|�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _|B     �      	           5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|B    �      	           5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|#     �      	           5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|#     �                   <import {ScrollView, View, SafeAreaView} from 'react-native';   import * as React from 'react';   +import {Icon} from 'react-native-elements';   <import {Button, ThemeProvider} from 'react-native-elements';   /import {ListItem} from 'react-native-elements';   1import globalStyles from '../../../globalStyles';   *import {lightTheme} from '../../../theme';       -const HomeScreen = ({onAccessToContact}) => {   $  const handleTestContacts = () => {       // onAccessToContact();     };       
  return (   ,    <SafeAreaView style={globalStyles.root}>   (      <ThemeProvider theme={lightTheme}>   3        <ScrollView style={globalStyles.container}>   ,          {/*<AppBar title={"Settings"}/>*/}   +          <View style={globalStyles.panel}>               {/*<Button*/}   2            {/*    onPress={handleTestContacts}*/}   4            {/*    title="Request Contact Access"*/}   $            {/*    type="outline"*/}               {/*/>*/}             </View>           </ScrollView>         </ThemeProvider>       </SafeAreaView>     );   };       export default HomeScreen;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|#     �                =import { ScrollView, View, SafeAreaView } from 'react-native'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|$    �                =import { ScrollView, View, SafeAreaView } from 'react-native'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|%     �                5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _|%    �                5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             _|P     �                5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _|P    �                5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             _|]     �                }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|h     �      !   #        �      !   "    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|q     �                HomeScreen.propTypes = {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _|q     �                  onAccessToContact: Prop5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|q     �                }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|r    �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|w     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _|w    �                5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                             _|y     �               /const HomeScreen = ({ onAccessToContact }) => {5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _|z     �      
   !       5�_�                     	       ����                                                                                                                                                                                                                                                                                                                                                             _|�    �      
   !        kkw5��