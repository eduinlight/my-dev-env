Vim�UnDo� 6�W:��nE����ʉ
_����o���T��                                      _ݝ-    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _�2�     �                Gimport withHttpErrors from "../../../../utils/routes/with_http_errors";   >import ApiRequest from "../../../../core/classes/api_request";   @import ApiResponse from "../../../../core/classes/api_response";   Timport HistoryVideoService from "../../../histories/services/history_video.service";5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _ݝ,    �                  Jimport withHttpErrors from "../../../../../utils/routes/with_http_errors";   Aimport ApiRequest from "../../../../../core/classes/api_request";   Cimport ApiResponse from "../../../../../core/classes/api_response";   Wimport HistoryVideoService from "../../../../histories/services/history_video.service";       +const deleteVideoEndpoint = withHttpErrors(   ?  async (req: ApiRequest, res: ApiResponse): Promise<void> => {   "    const { user, history } = req;       const { id } = req.params;   E    res.success(await HistoryVideoService.delete(user, history, id));     }   );       #export default deleteVideoEndpoint;5��