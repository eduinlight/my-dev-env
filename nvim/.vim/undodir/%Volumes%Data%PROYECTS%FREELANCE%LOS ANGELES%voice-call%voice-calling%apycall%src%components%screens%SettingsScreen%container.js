Vim�UnDo� �q��GRxU�KBGe֪hh�|i�l�_[4Y   7                                   _}#�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _}"�     �         7       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _}"�    �         7       5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                  V        _}#�     �                  const Settings = () => {   
  return (   5    <Stack.Navigator initialRouteName="SettingsHome">         <Stack.Screen           name="SettingsHome"            component={SettingsHome}           options={{   P          headerTitle: (props) => <HeaderTitle {...props}>Settings</HeaderTitle>   
        }}         />         <Stack.Screen           name="SettingsDetails"   !        component={DetailsScreen}           options={{   "          headerBackTitle: 'Home',   B          headerTitle: <HeaderTitle>Settings Details</HeaderTitle>   
        }}         />       </Stack.Navigator>     )   }       export default Settings5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        _}#�     �      !   7       5�_�                              ����                                                                                                                                                                                                                                                                                                                                                  V        _}#�    �      !   7       5��