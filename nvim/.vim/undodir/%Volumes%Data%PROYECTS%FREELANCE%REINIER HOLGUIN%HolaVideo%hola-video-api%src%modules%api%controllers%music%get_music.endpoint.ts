Vim�UnDo� ~�y�D�b��ڜ<0�c-6�)o�_�˨���c                                     _�E�    _�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               H  const getUserEndpo(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               K  const getUserEndpoint(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               J  const getserEndpoint(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               I  const geterEndpoint(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               H  const getrEndpoint(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               G  const getEndpoint(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �              �               L  const getMusicEndpoint(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�      	                 )    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               ]  const getMusicEndpoint = withHttpErrors(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�      
           	      *    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               _  const getMusicEndpoint = withHttpErrors()(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�   	              
      *    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               ^  const getMusicEndpoint = withHttpErrors((req: ApiRequest, res: ApiResponse): Promise<void> {5�_�   
                    b    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               c  const getMusicEndpoint = withHttpErrors(async(req: ApiRequest, res: ApiResponse): Promise<void> {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �      
           })5�_�                            ����                                                                                                                                                                                                                                                                                                                                       
           V        _�E�     �      	   
       5�_�                            ����                                                                                                                                                                                                                                                                                                                                       
           V        _�E�     �               
   Fimport withHttpErrors from "../../../../utils/routes/with_http_errors"       e  const getMusicEndpoint = withHttpErrors(async(req: ApiRequest, res: ApiResponse): Promise<void> =>{       const { id } = req.params;   -    const music = await MusicService.get(id);       res.success(music);     })       export default getMusicEndpoint    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�    �      	           }5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �   	             5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �      	         }5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�    �   	             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               ?  async (req: ApiRequest, res: ApiResponse): Promise<void> => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �             5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �               ?  async (req: ApiRequest, res: ApiResponse): Promise<void> => {5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �             5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �      	         -    const music = await MusicService.get(id);5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�     �                5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        _�E�    �                5��