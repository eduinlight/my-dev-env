Vim�UnDo� k�}�X���~�,������a=��g�=����	J   $                                  _�K   	 _�                             ����                                                                                                                                                                                                                                                                                                                                                             _�̄     �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̅     �               $   import axios from "axios";   "import config from "../envconfig";   import log from "loglevel";   +import {assertObject} from "cre-ui-kernel";   export function apiSetup() {   *    axios.defaults.baseURL = config().API;   1    //     axios.defaults.withCredentials = true;   9    //     axios.defaults.headers.common["ContentType"] =   �    //         "application/x-www-form-urlencoded; application/json; charset=UTF-8; image/jpeg; image/png; text/plain; application/octet-stream ";   -    axios.defaults.headers.common["Accept"] =   v        "application/json, application/octet-stream, image/jpeg, image/jpg, image/png, text/plain; application/pdf; ";   3    axios.defaults.headers.common["Content-Type"] =   S        "application/json, multipart/form-data, application/x-www-form-urlencoded";   5    // axios.defaults.headers.common["ContentType"] =   1    //   "application/json, multipart/form-data";       N    //     axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";       &    log.debug(axios.defaults.headers);   }       export const BASE_API = {   1    getById: (pathFunc, id) => pathFunc(`${id}`),   4    deleteById: (pathFunc, id) => pathFunc(`${id}`),   F    save: (pathFunc, id) => pathFunc( assertObject(id ) ? `${id}`:""),   }       Fconst pathUrl = (url, path) => (path ? `/${url}/${path}` : `/${url}`);           const API_URL = {   2    contacts: (path) => pathUrl("contacts", path),   +    login:(path) =>  pathUrl("login", path)   };       export default API_URL;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̅     �          #      import axios from 'axios'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̅     �          #      import axios from 'axios'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̆     �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̆    �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̊     �         #       5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _�̊    �         #       5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             _�̟     �         #       5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _�̠    �         #       5�_�   
                    ,    ����                                                                                                                                                                                                                                                                                                                                                             _�̦     �         #      ,import { assertObject } from 'cre-ui-kernel'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̧     �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�̧    �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���     �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���    �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��     �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��     �         $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��    �         $       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _�J   	 �         $       5��