Vim�UnDo� �!������� r�kyh�Hz	[�O	d��   $                 W       W   W   W    _�Z    _�                              ����                                                                                                                                                                                                                                                                                                                                                             _�0     �      !   #       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _�0    �      !   #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�?     �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�?    �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�,     �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�-    �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�h     �         #       5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _�i    �         #       5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             _��     �         #       5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _��    �         #       5�_�   
                    <    ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   #      <import { ERol } from "../../data_manager/models/user.model";5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   %       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   %      const isAdminGuard = 5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                             _��     �         %    5�_�                    	   F    ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   &      Gconst isAdminGuard = async (request: ApiRequest, response: ApiResponse)5�_�                    	   F    ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   &    5�_�                    
   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Gconst isAdminGuard = async (request: ApiRequest, response: ApiResponse)5�_�                    
   S    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Sconst isAdminGuard = async (request: ApiRequest, response: ApiResponse) => Promise<5�_�                    
   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Xconst isAdminGuard = async (request: ApiRequest, response: ApiResponse) => Promise<void>5�_�                    
   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Wconst isAdminGuard = async (request: ApiRequest, response: ApiResponse)=> Promise<void>5�_�                    
   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Vconst isAdminGuard = async (request: ApiRequest, response: ApiResponse)> Promise<void>5�_�                    
   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Uconst isAdminGuard = async (request: ApiRequest, response: ApiResponse) Promise<void>5�_�                    
   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      '      Tconst isAdminGuard = async (request: ApiRequest, response: ApiResponse)Promise<void>5�_�                    
   V    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   
      (    �   	      '      Vconst isAdminGuard = async (request: ApiRequest, response: ApiResponse): Promise<void>5�_�                            ����                                                                                                                                                                                                                                                                                                                                       #          v       _��     �         )      9    const token = this.request.headers["x-access-token"];           if (token === undefined) {   "      throw new NotAllowedError();       }       A    const payload = JWT.decode(token as string) as ITokenPayload;       if (!payload) {   "      throw new NotAllowedError();       }       6    const user = await UserRepository.get(payload.id);       +    if (!user || user.rol !== ERol.ADMIN) {   "      throw new NotAllowedError();       }           this.request.user = user;           this.next();     }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   
              �             5�_�                    	        ����                                                                                                                                                                                                                                                                                                                            $           $          v       _��     �      
   )       5�_�                    	        ����                                                                                                                                                                                                                                                                                                                            $           $          v       _��     �      
   )       5�_�                    	        ����                                                                                                                                                                                                                                                                                                                            $           $          v       _��    �   	   &   )      [const isAdminGuard = async (request: ApiRequest, response: ApiResponse): Promise<void> => {   9    const token = this.request.headers["x-access-token"];           if (token === undefined) {   "      throw new NotAllowedError();       }       A    const payload = JWT.decode(token as string) as ITokenPayload;       if (!payload) {   "      throw new NotAllowedError();       }       6    const user = await UserRepository.get(payload.id);       +    if (!user || user.rol !== ERol.ADMIN) {   "      throw new NotAllowedError();       }           this.request.user = user;           this.next();       }       ,class IsAdminGuardClass extends Middleware {     async run(): Promise<void> {     }5�_�                           ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��     �         *      7  const token = this.request.headers["x-access-token"];5�_�                            ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��     �         *      3  const token = .request.headers["x-access-token"];5�_�      !                       ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��     �         *       5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��   	 �         *       5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��     �         *        response: ApiResponse5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��     �         +        next: NextFunction5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                            
           
          v       _��     �      
   +    5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �         ,       5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �      
   ,      %import {NextFunction} from "express";5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �         ,       5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                 v       _��   
 �         ,       5�_�   (   *           )   !       ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �       "   ,        this.request.user = user;5�_�   )   +           *   !       ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �       "   ,        .request.user = user;5�_�   *   ,           +   #       ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   "   $   ,        this.next();5�_�   +   -           ,   #       ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   "   $   ,       this.next();5�_�   ,   .           -   #       ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   "   $   ,       his.next();5�_�   -   /           .   #       ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   "   $   ,      	 .next();5�_�   .   0           /   %        ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   $   &   ,       5�_�   /   1           0   %        ����                                                                                                                                                                                                                                                                                                                                                 v       _��     �   "   $   ,       next();5�_�   0   2           1   %        ����                                                                                                                                                                                                                                                                                                                                                 v       _��    �   $   &   ,       5�_�   1   3           2   &        ����                                                                                                                                                                                                                                                                                                                            &           ,           V        _��     �   %   &          ,class IsAdminGuardClass extends Middleware {     async run(): Promise<void> {}   }       -const IsAdminGuard = new IsAdminGuardClass();       export default IsAdminGuard;5�_�   2   4           3   %        ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�     �   $               5�_�   3   5           4   %        ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�
     �   $   &   &       5�_�   4   6           5   %        ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�
     �   %              export default isAdminGuard5�_�   5   7           6   %        ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�
    �   $   &   &       5�_�   6   8           7   %        ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�     �   $   &   &       5�_�   7   9           8   %        ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�    �   $   &   &       5�_�   8   :           9           ����                                                                                                                                                                                                                                                                                                                            &           &           V        _�     �                :import Middleware from "../../../core/classes/middleware";5�_�   9   ;           :   	        ����                                                                                                                                                                                                                                                                                                                            %           %           V        _�     �      
   %       5�_�   :   <           ;   	        ����                                                                                                                                                                                                                                                                                                                            %           %           V        _�    �      
   %       5�_�   ;   =           <          ����                                                                                                                                                                                                                                                                                                                            %           %           V        _�     �         %        response: ApiResponse,5�_�   <   >           =   	        ����                                                                                                                                                                                                                                                                                                                            %           %           V        _�     �      
   %       5�_�   =   ?           >   	        ����                                                                                                                                                                                                                                                                                                                            %           %           V        _�    �      
   %       5�_�   >   @           ?   $        ����                                                                                                                                                                                                                                                                                                                            
                      V        _�V     �   #   %   %       5�_�   ?   A           @   $        ����                                                                                                                                                                                                                                                                                                                            
                      V        _�W    �   #   %   %       5�_�   @   B           A          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %           throw new NotAllowedError();5�_�   A   C           B          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %        _response: ApiResponse,5�_�   B   D           C          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %        _esponse: ApiResponse,5�_�   C   E           D          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %        esponse: ApiResponse,5�_�   D   F           E          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %          new NotAllowedError();5�_�   E   G           F          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %      !    return response.NotFoundError5�_�   F   H           G           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %       5�_�   G   I           H           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %       5�_�   H   J           I           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�    �         %          return response.notFound()5�_�   I   K           J           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %           throw new NotAllowedError();5�_�   J   L           K           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %       5�_�   K   M           L           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %           return response.notAllowed()5�_�   L   N           M           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�    �         %       5�_�   M   O           N          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Y�     �         %           throw new NotAllowedError();5�_�   N   P           O           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z     �          %       5�_�   O   Q           P           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z     �          %       5�_�   P   R           Q           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z    �         %          return response.notAllowed5�_�   Q   S           R          ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z     �         %          return response.notAllowed;5�_�   R   T           S           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z     �         %       5�_�   S   U           T           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z	    �         %       5�_�   T   V           U           ����                                                                                                                                                                                                                                                                                                                            
                      V        _�Z     �                ?import NotAllowedError from "../../../core/errors/not_allowed";5�_�   U   W           V           ����                                                                                                                                                                                                                                                                                                                            	                      V        _�Z     �      	   $       5�_�   V               W           ����                                                                                                                                                                                                                                                                                                                            	                      V        _�Z    �      	   $       5��