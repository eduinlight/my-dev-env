Vim�UnDo� R��`��sM(8�7�s��D�	���r��@<   $   &          globalStyles.alignSelfStart,             /       /   /   /    _�D   " _�                            ����                                                                                                                                                                                                                                                                                                                                                             _�@�     �              :   $const ForgotPasswordScreen = () => {   %  const navigation = useNavigation();       
  return (   .    <View style={[globalStyles.rootCentered]}>         <Input           label="Email *"           placeholder="email"   9        leftIcon={{ type: 'font-awesome', name: 'user' }}         />         <Input           label="Password *"           placeholder="password"   9        leftIcon={{ type: 'font-awesome', name: 'lock' }}           errorMessage="error"         />         <Button           type="clear"            title="forgot password?"   <        onPress={() => navigation.navigate(Routes.REGISTER)}           style={[              globalStyles.textLeft,   &          globalStyles.alignSelfStart,   "          globalStyles.textNormal,   
        ]}         />         <Button           title="Login"   <        onPress={() => navigation.navigate(Routes.REGISTER)}         />         <Divider           style={[             globalStyles.divider,             globalStyles.flex0,   !          globalStyles.fullWidth,             globalStyles.my3,   
        ]}         />   G      <Text style={[globalStyles.textCenter, globalStyles.textNormal]}>           Sign up for free         </Text>   E      <SocialIcon title="Sign In With Google" button type="google" />   I      <SocialIcon title="Sign In With Facebook" button type="facebook" />   A      <View style={[globalStyles.rowCentered, globalStyles.my3]}>   0        <Divider style={globalStyles.divider} />   9        <Text style={[globalStyles.textNormal]}>or</Text>   0        <Divider style={globalStyles.divider} />         </View>         <Button           type="clear"   $        title="Create a new account"   <        onPress={() => navigation.navigate(Routes.REGISTER)}         />       </View>     );   };       $export default ForgotPasswordScreen;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�@�     �         A       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�@�    �         A       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�     �         A    �         A    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�     �         F              label="Email *"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�    �         F              placeholder="email"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�     �                9        leftIcon={{ type: 'font-awesome', name: 'user' }}5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�     �                9        leftIcon={{ type: 'font-awesome', name: 'user' }}5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�    �                9        leftIcon={{ type: 'font-awesome', name: 'lock' }}5�_�   	              
   B        ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�     �   A   C   C       5�_�   
                 B        ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�     �   A   C   C       5�_�                    B        ����                                                                                                                                                                                                                                                                                                                                                  V        _�A�   	 �         C            <Input           label="Name *"           placeholder="name"         />         <Input           label="Email *"           placeholder="email"         />         <Input           label="Password *"           placeholder="password"           errorMessage="error"         />5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�CK     �         9      1      <Input label="Name *" placeholder="name" />5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                                  V        _�CO   
 �         9      1      <Input label="Code *" placeholder="name" />5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�CV     �                3      <Input label="Email *" placeholder="email" />5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�CV     �                N      <Input label="Password *" placeholder="password" errorMessage="error" />5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�C^    �         7               title="forgot password?"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�Co    �                <        onPress={() => navigation.navigate(Routes.REGISTER)}5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�Cv     �         6              title="Login"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�C{    �         6              title="Validate Code"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�C}     �                <        onPress={() => navigation.navigate(Routes.REGISTER)}5�_�                            ����                                                                                                                                                                                                                                                                                                                                      0          V       _�C�     �                      <Divider           style={[             globalStyles.divider,             globalStyles.flex0,   !          globalStyles.fullWidth,             globalStyles.my3,   
        ]}         />   G      <Text style={[globalStyles.textCenter, globalStyles.textNormal]}>           Sign up for free         </Text>   E      <SocialIcon title="Sign In With Google" button type="google" />   I      <SocialIcon title="Sign In With Facebook" button type="facebook" />   A      <View style={[globalStyles.rowCentered, globalStyles.my3]}>   0        <Divider style={globalStyles.divider} />   9        <Text style={[globalStyles.textNormal]}>or</Text>   0        <Divider style={globalStyles.divider} />         </View>         <Button           type="clear"   $        title="Create a new account"   <        onPress={() => navigation.navigate(Routes.REGISTER)}         />5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �                     <Button           title="Validate code"         />5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �                5�_�                       .    ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �               .    <View style={[globalStyles.rootCentered]}>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �                     <Text >5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �                     <Text></Text>5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �   	             5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �   	             5�_�                        C    ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �               J      <Text>Please enter the code that we already sent to you email</Text>5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �               K      <Text>Please enter the code that we already sent to you email.</Text>5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �                5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �               �      <Text style={[globalStyles.textNormal, globalStyles.textCenter]}>Please enter the code that we already sent to you email.</Text>5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �                5�_�   #   %           $      D    ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �               G      <Text style={[globalStyles.textNormal, globalStyles.textCenter]}>5�_�   $   &           %      G    ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �               J      <Text style={[globalStyles.textNormal, globalStyles.textCenter, g]}>5�_�   %   '           &      U    ����                                                                                                                                                                                                                                                                                                                                                V       _�C�    �               Y      <Text style={[globalStyles.textNormal, globalStyles.textCenter, globalStyles.mb3]}>5�_�   &   (           '   
        ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �   	             5�_�   '   )           (   
        ����                                                                                                                                                                                                                                                                                                                                                V       _�C�     �               Y      <Text style={[globalStyles.textNormal, globalStyles.textCenter, globalStyles.mb4]}>5�_�   (   *           )   
        ����                                                                                                                                                                                                                                                                                                                                                  V       _�C�    �   	      $       5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                  V       _�C�     �         $      &          globalStyles.alignSelfStart,5�_�   *   ,           +           ����                                                                                                                                                                                                                                                                                                                                                  V       _�C�    �         $      !          globalStyles.alignSelf,5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                                                  V       _�D     �         $      $          globalStyles.alignSelfEnd,5�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                                                  V       _�D    �         $      !          globalStyles.alignSelf,5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                                                  V       _�D     �         $      $          globalStyles.alignSelfEnd,5�_�   .               /           ����                                                                                                                                                                                                                                                                                                                                                  V       _�D   " �         $      !          globalStyles.alignSelf,5��