Vim�UnDo� pha+��5�c|�������<F�o�7g*F�   /                 C       C   C   C    _�Y�   ! _�                             ����                                                                                                                                                                                                                                                                                                                                                             _�[     �         .       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�\    �         .       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�_     �         .       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�_    �         .       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�    �   '   )              this.next();�   %   '              this.request.user = user;�                1      token = this.request.query.token as string;�                -      this.request.headers["X_ACCESS_TOKEN"];�                /      this.request.headers["X-Access-Token"] ||�   
             /      this.request.headers["x-access-token"] ||5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��     �         .    �         .    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   3      const isAdminGuard = async (5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   3      const = async (5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   3      const isUserGuard= async (5�_�   	              
   1        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   0   1          +const IsUserGuard = new IsUserGuardClass();5�_�   
                 1        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   0   1           5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             _��     �   0              export default IsUserGuard;5�_�                    0        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   /   1   1       5�_�                    0        ����                                                                                                                                                                                                                                                                                                                                                             _��    �   /   1   1       5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   1        request: ApiRequest,5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                             _��     �         1    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �   
      2        _response: ApiResponse,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   2    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �         3        next: NextFunction5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   3    5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      4       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _��    �   	      4       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��     �                +class IsUserGuardClass extends Middleware {5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      3       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _��    �   	      3       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	      3       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             _��    �   	      3       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��     �                :import Middleware from "../../../core/classes/middleware";5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   2       5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _��   	 �      
   2       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _��     �         2        async run(): Promise<void> {5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                                             _��     �         2      async run(): Promise<void> {5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                             _��     �         2      run(): Promise<void> {5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                             _��     �         2      (): Promise<void> {5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                             _��     �                Promise<void> {5�_�   #   %           $   /        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   .   /          }5�_�   $   &           %   /        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   .   0   0       5�_�   %   '           &   /        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   .   0   0       5�_�   &   (           '   /        ����                                                                                                                                                                                                                                                                                                                                                             _��   
 �      /   0   '   %import {NextFunction} from "express";       const isUserGuard = async (     request: ApiRequest,     _response: ApiResponse,     next: NextFunction   ): Promise<void> => {       let token =   *      request.headers["x-access-token"] ||   *      request.headers["X-Access-Token"] ||   (      request.headers["X_ACCESS_TOKEN"];           if (token === undefined) {   ,      token = request.query.token as string;       }           if (token === undefined) {   "      throw new NotAllowedError();       }       A    const payload = JWT.decode(token as string) as ITokenPayload;           if (!payload) {   "      throw new NotAllowedError();       }       1    const user = await UserRepository.filterOne({   +      ...QueryFactory.findById(payload.id),         validationCode: ""       });           if (!user) {   "      throw new NotAllowedError();       }           request.user = user;           next();     }5�_�   '   )           (   	        ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   0       5�_�   (   *           )   	        ����                                                                                                                                                                                                                                                                                                                                                             _��    �      
   0       5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   0      'import { NextFunction } from "express";5�_�   *   ,           +           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	   0      'import { NextFunction } from "express";5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	          'import { NextFunction } from "express";5�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                                                             _��    �      	          *// import { NextFunction } from "express";5�_�   -   /           .   	        ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   0       5�_�   .   0           /   	        ����                                                                                                                                                                                                                                                                                                                                                             _��    �      
   0       5�_�   /   1           0   	        ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   0       5�_�   0   2           1   	        ����                                                                                                                                                                                                                                                                                                                                                             _��    �      
   0       5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                             _�YX     �         0           throw new NotAllowedError();5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                                             _�Y_    �         0        _response: ApiResponse,5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                                             _�Yb     �         0          re5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                                                             _�Ym     �         0       5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                                                             _�Ym     �         0       5�_�   6   8           7           ����                                                                                                                                                                                                                                                                                                                                                             _�Ym    �         0          response.notFound()5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                                             _�Yr    �         0          response.notFound();5�_�   8   :           9          ����                                                                                                                                                                                                                                                                                                                                                             _�Y{     �          0           throw new NotAllowedError();5�_�   9   ;           :           ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �         0       5�_�   :   <           ;           ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �         0       5�_�   ;   =           <           ����                                                                                                                                                                                                                                                                                                                                                             _�Y�    �          0           return response.notAllowed()5�_�   <   >           =   (        ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �   '   )   0           throw new NotAllowedError();5�_�   =   ?           >   &        ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �   %   '   0       5�_�   >   @           ?   &        ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �   %   '   0       5�_�   ?   A           @   &        ����                                                                                                                                                                                                                                                                                                                                                             _�Y�    �   '   )   0           return response.notAllowed()5�_�   @   B           A           ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �                ?import NotAllowedError from "../../../core/errors/not_allowed";5�_�   A   C           B           ����                                                                                                                                                                                                                                                                                                                                                             _�Y�     �      	   /       5�_�   B               C           ����                                                                                                                                                                                                                                                                                                                                                             _�Y�   ! �      	   /       5��