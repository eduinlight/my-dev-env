Vim�UnDo� ���5UQ�)��;�5��������b��!t���   '                 U       U   U   U    _�   / _�                       .    ����                                                                                                                                                                                                                                                                                                                                                             _��    �         +      5    dispatch(ContactsActions.GetLocalContacts.send())    �         +          �         *    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���     �      	   *       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���     �               *   (import React, { useEffect } from 'react'   "import PropTypes from 'prop-types'   ,import useOnMount from '../hooks/useOnMount'   2import * as SplashScreen from 'expo-splash-screen'   9import ContactsActions from '../actions/contacts/actions'   6import { useDispatch, useSelector } from 'react-redux'   /import * as Permissions from 'expo-permissions'       const LoadApp = ({   
  children   }) => {   H  const { accessToLocalContacts } = useSelector(store => store.contacts)   (  const loading = !accessToLocalContacts      const dispatch = useDispatch()         useOnMount(async () => {   5    dispatch(ContactsActions.GetLocalContacts.send())       	    try {   /      await SplashScreen.preventAutoHideAsync()       } catch (e) {       }     })         useEffect(() => {       if (!loading) {         SplashScreen.hideAsync()       }     }, [loading])         if (loading) {       return null     }         return <>{children}</>   }       LoadApp.propTypes = {     children: PropTypes.any   }       export default LoadApp5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���    �          '      )import React, { useEffect } from 'react';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��e     �      	   '       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _���     �      	   '       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���    �      	   '       5�_�                           ����                                                                                                                                                                                                                                                                                                                            
                      V        _���     �      	   '       5�_�                            ����                                                                                                                                                                                                                                                                                                                            
                      V        _���    �      	   '       5�_�                            ����                                                                                                                                                                                                                                                                                                                            
                      V        _���     �         '       5�_�                            ����                                                                                                                                                                                                                                                                                                                            
                      V        _���    �         '       5�_�                            ����                                                                                                                                                                                                                                                                                                                            
                      V        _���     �         '       5�_�                            ����                                                                                                                                                                                                                                                                                                                            
                      V        _���    �         '       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                            
                      V        _���     �   	             K  const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�                           ����                                                                                                                                                                                                                                                                                                                            
                      V        _���     �   
      '      )  const loading = !accessToLocalContacts;5�_�                            ����                                                                                                                                                                                                                                                                                                                            
                      V        _���    �                6    dispatch(ContactsActions.GetLocalContacts.send());5�_�      !                       ����                                                                                                                                                                                                                                                                                                                            
                      V        _���     �         '       5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                            
                      V        _���    �         '       5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                            
                      V        _��      �         '       5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                            
                      V        _��     �         '       5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                V       _��w     �         '      9    // dispatch(ContactsActions.GetLocalContacts.send());5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                V       _��y    �                7  // dispatch(ContactsActions.GetLocalContacts.send());5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                V       _���     �         '       5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                V       _���     �         '      4  dispatch(ContactsActions.GetLocalContacts.send());5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                V       _���    �         '       5�_�   (   *           )           ����                                                                                                                                                                                                                                                                                                                                                V       _���     �         '       5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                V       _���    �         '       5�_�   *   ,           +   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���    �   	      '      N  // const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   +   -           ,   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���     �   	             L// const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                                                V       _���     �      	   '       5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                                                V       _���     �   	      '      Iconst { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   .   0           /           ����                                                                                                                                                                                                                                                                                                                                                V       _���    �      	   '       5�_�   /   1           0   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��     �   	      '      K  const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   0   2           1   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��     �   	      '      Iconst { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   1   3           2   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��     �   	      '      Iconst { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   2   4           3   
       ����                                                                                                                                                                                                                                                                                                                                                V       _��    �   	             K  const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   3   5           4           ����                                                                                                                                                                                                                                                                                                                                                V       _��/     �         '       5�_�   4   ?           5           ����                                                                                                                                                                                                                                                                                                                                                V       _��/    �         '       5�_�   5   @   6       ?   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���   # �   	      '      N  // const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   ?   A           @   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���     �   	      '      L// const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   @   B           A           ����                                                                                                                                                                                                                                                                                                                                                V       _���     �      	   '       5�_�   A   C           B           ����                                                                                                                                                                                                                                                                                                                                                V       _���   $ �      	   '       5�_�   B   D           C   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���     �   	      '      N  // const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   C   E           D   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���     �   	             L// const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   D   F           E           ����                                                                                                                                                                                                                                                                                                                                                V       _��      �         '       5�_�   E   G           F           ����                                                                                                                                                                                                                                                                                                                                                V       _��      �   	      '      Iconst { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   F   H           G           ����                                                                                                                                                                                                                                                                                                                                                V       _��    % �         '       5�_�   G   I           H   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��     �   	      '      K  const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   H   J           I   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��   ' �   	             Iconst { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   I   K           J   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��1   ( �   	             L// const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   J   L           K   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��G     �   	             Iconst { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   K   M           L           ����                                                                                                                                                                                                                                                                                                                                                V       _��H     �         '       5�_�   L   N           M           ����                                                                                                                                                                                                                                                                                                                                                V       _��H     �   	      '      L// const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   M   O           N           ����                                                                                                                                                                                                                                                                                                                                                V       _��H   + �         '       5�_�   N   P           O          ����                                                                                                                                                                                                                                                                                                                                                             _�u     �         '      :import ContactsActions from '../actions/contacts/actions';5�_�   O   Q           P           ����                                                                                                                                                                                                                                                                                                                                                             _�y     �      	   '       5�_�   P   R           Q           ����                                                                                                                                                                                                                                                                                                                                                             _�y     �         '      <import {contactsActions} from '../actions/contacts/actions';5�_�   Q   S           R           ����                                                                                                                                                                                                                                                                                                                                                             _�y   , �      	   '       5�_�   R   T           S          ����                                                                                                                                                                                                                                                                                                                                                             _�|     �         '      6    dispatch(ContactsActions.GetLocalContacts.send());5�_�   S   U           T           ����                                                                                                                                                                                                                                                                                                                                                             _�~     �         '       5�_�   T               U           ����                                                                                                                                                                                                                                                                                                                                                             _�~   / �         '       5�_�   5   7       ?   6   
        ����                                                                                                                                                                                                                                                                                                                                                V       _��@     �   	             K  const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   6   8           7   
   
    ����                                                                                                                                                                                                                                                                                                                                                V       _��C     �   	      '      6  const {  } = useSelector((store) => store.contacts);5�_�   7   9           8   
   
    ����                                                                                                                                                                                                                                                                                                                                                V       _��D     �   
      '    �   	      '      K  const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�   8   :           9           ����                                                                                                                                                                                                                                                                                                                                                V       _��G     �         '       5�_�   9   ;           :           ����                                                                                                                                                                                                                                                                                                                                                V       _��G   ! �         '       5�_�   :   <           ;          ����                                                                                                                                                                                                                                                                                                                                                V       _��M     �   
      '      (  const loading = accessToLocalContacts;5�_�   ;   =           <           ����                                                                                                                                                                                                                                                                                                                                                V       _��O     �         '       5�_�   <   >           =           ����                                                                                                                                                                                                                                                                                                                                                V       _��O   " �         '       5�_�   =               >   
        ����                                                                                                                                                                                                                                                                                                                                                V       _���     �   	             N  // const { accessToLocalContacts } = useSelector((store) => store.contacts);5�_�                   
        ����                                                                                                                                                                                                                                                                                                                            
           
           V        _��P     �   	           5�_�                            ����                                                                                                                                                                                                                                                                                                                            
           
           V        _��Q     �      	          5�_�                            ����                                                                                                                                                                                                                                                                                                                            
           
           V        _��Q     �      	          5�_�                             ����                                                                                                                                                                                                                                                                                                                            
           
           V        _��Q    �   	          5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��e    �      	   '       5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _��q     �      !   '        return <></>;5�_�      
           	       	    ����                                                                                                                                                                                                                                                                                                                                                             _��r     �      !   '        return ></>;5�_�   	              
       	    ����                                                                                                                                                                                                                                                                                                                                                             _��r     �      !   '        return </>;5�_�   
                     	    ����                                                                                                                                                                                                                                                                                                                                                             _��r     �      !   '        return />;5�_�                        	    ����                                                                                                                                                                                                                                                                                                                                                             _��r     �      !   '        return >;5�_�                        	    ����                                                                                                                                                                                                                                                                                                                                                             _��r     �      !   '      
  return ;5�_�                        	    ����                                                                                                                                                                                                                                                                                                                                                             _��s   	 �      !   '        return null;5�_�                    "        ����                                                                                                                                                                                                                                                                                                                                                             _���     �   !   #   '       5�_�                     "        ����                                                                                                                                                                                                                                                                                                                                                             _���   
 �   !   #   '       5�_�                        .    ����                                                                                                                                                                                                                                                                                                                                                             _��     �         *      1    dispatch(ContactsActions.GetLocalContacts.())5��