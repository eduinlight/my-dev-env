Vim�UnDo� _��%i	��(��;S�!����!?�aj����   X       4                           _�;F    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _���     �      2   Y   +   (import { Paths } from "../../../Routes";   Eimport HeaderLanguageSelect from "../../shared/HeaderLanguageSelect";   Fimport useTranslate from "../../../core/hooks/translate/useTranslate";       *const useStyles = makeStyles((theme) => ({   	  grow: {       flexGrow: 1     },     sectionDesktop: {       display: "none",   #    [theme.breakpoints.up("md")]: {         display: "flex"       }     },     sectionMobile: {       display: "flex",   #    [theme.breakpoints.up("md")]: {         display: "none"       }     },     container: {   $    minHeight: `calc(100vh - 68px)`,       display: "flex",       justifyContent: "center",       alignItems: "center"     }   }));       $export interface AuthTemplateProps {     children: any;   }       Kconst AuthTemplate: FC<AuthTemplateProps> = (props: AuthTemplateProps) => {     const { children } = props;     const styles = useStyles();   2  const { goToLogin, goToRegister } = useRoutes();   !  const location = useLocation();   !  const renderLoginBtn = useMemo(   5    () => !location.pathname.startsWith(Paths.LOGIN),       [location.pathname]     );   $  const renderRegisterBtn = useMemo(   8    () => !location.pathname.startsWith(Paths.REGISTER),5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���    �         Y      (import { paths } from "../../../Routes";5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _���     �   	      Y       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _���    �   	      Y       5�_�                   5        ����                                                                                                                                                                                                                                                                                                                                                             _�Sh    �   4   6   Y       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��K     �      
   Y      Fimport useTranslate from "../../../core/hooks/translate/useTranslate";5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _�:�     �      	          @import useTranslate from "../../../core/translate/useTranslate";5�_�                    3       ����                                                                                                                                                                                                                                                                                                                                                             _�:�     �   2   3          '  const { translate } = useTranslate();5�_�                    A       ����                                                                                                                                                                                                                                                                                                                                                             _�:�     �   @   B   W      +                {translate("startSession")}5�_�                    A       ����                                                                                                                                                                                                                                                                                                                                                             _�:�     �      
   W    5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             _�:�     �   3   5   X       5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             _�:�     �   3   5   X       5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             _�:�    �      
   X      2import {translate} from "../../../core/translate";5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             _�;@     �   3   5   X       5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             _�;@    �   3   5   X       5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             _�;D     �   3   5   X       5�_�                     4        ����                                                                                                                                                                                                                                                                                                                                                             _�;E    �   3   5   X       5�_�                   H   +    ����                                                                                                                                                                                                                                                                                                                                                             _�SR     �   G   I   Y      -                onClick={() => goToRegister)}5�_�                    H   +    ����                                                                                                                                                                                                                                                                                                                                                             _�SR     �   G   I   Y      ,                onClick={() => goToRegister}5�_�                    H   +    ����                                                                                                                                                                                                                                                                                                                                                             _�SS     �   G   I   Y      0                onClick={() => goToRegister({})}5�_�      	              H   -    ����                                                                                                                                                                                                                                                                                                                                                             _�S]     �   G   I   Y      0                onClick={() => goToRegister({})}5�_�      
           	   H   ,    ����                                                                                                                                                                                                                                                                                                                                                             _�S_     �   G   I   Y      /                onClick={() => goToRegister(})}5�_�   	               
   H   ,    ����                                                                                                                                                                                                                                                                                                                                                             _�S`     �   G   I   Y      .                onClick={() => goToRegister()}5��