Vim�UnDo� �&%P$q�ʔ���sn���޼u��c�Ih^�   #                                  _�/�    _�                           ����                                                                                                                                                                                                                                                                                                                                                             _�6     �                    <NavigationContainer>5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _�8     �                     </NavigationContainer>5�_�                    "        ����                                                                                                                                                                                                                                                                                                                                                             _�9     �   !   #   #       5�_�                    "        ����                                                                                                                                                                                                                                                                                                                                                             _�9     �          #   
         <Tab.Navigator           screenOptions={() => ({   #          tabBarLabel: TabBarLabel,   !          tabBarIcon: TabBarIcon,           })}            tabBarOptions={options}>   @        <Tab.Screen name={Routes.HOME} component={HomeScreen} />   H        <Tab.Screen name={Routes.ACTIVITY} component={ActivityScreen} />   H        <Tab.Screen name={Routes.SETTINGS} component={SettingsScreen} />         </Tab.Navigator>5�_�                    "        ����                                                                                                                                                                                                                                                                                                                                                             _�9    �   !   #   #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�F     �                ?import { NavigationContainer } from '@react-navigation/native';5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _�G     �   
      "       5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             _�G    �   
      "       5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _�L     �   
      "       5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             _�L    �   
      "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�R     �         "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�R    �         "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�&�     �         "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�&�    �         "       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�-L    �         "          <Tab.Navigator5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�/�     �                 const Navigation = () => {     const options = {   (    activeTintColor: COLORS.primaryDark,       inactiveTintColor: 'gray',     };       
  return (       <Tab.Navigator   $      initialRouteName={Routes.HOME}         screenOptions={() => ({   !        tabBarLabel: TabBarLabel,           tabBarIcon: TabBarIcon,   	      })}         tabBarOptions={options}>   >      <Tab.Screen name={Routes.HOME} component={HomeScreen} />   F      <Tab.Screen name={Routes.ACTIVITY} component={ActivityScreen} />   F      <Tab.Screen name={Routes.SETTINGS} component={SettingsScreen} />       </Tab.Navigator>     );   };       export default Navigation;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�/�    �                 const TabsVie = () => {     const options = {   (    activeTintColor: COLORS.primaryDark,       inactiveTintColor: 'gray',     };       
  return (       <Tab.Navigator   $      initialRouteName={Routes.HOME}         screenOptions={() => ({   !        tabBarLabel: TabBarLabel,           tabBarIcon: TabBarIcon,   	      })}         tabBarOptions={options}>   >      <Tab.Screen name={Routes.HOME} component={HomeScreen} />   F      <Tab.Screen name={Routes.ACTIVITY} component={ActivityScreen} />   F      <Tab.Screen name={Routes.SETTINGS} component={SettingsScreen} />       </Tab.Navigator>     );   };       export default TabsVie;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�5     �              5��