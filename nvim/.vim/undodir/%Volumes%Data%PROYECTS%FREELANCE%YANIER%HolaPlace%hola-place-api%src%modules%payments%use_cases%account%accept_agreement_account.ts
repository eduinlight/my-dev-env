Vim�UnDo� Ue���4k�FH�cz��Z �Eg���h6f�XK   %       $          #       #   #   #    `��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `�     �                   �               5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             `��     �   	      "      .export async function acceptAccountAgreement({5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             `��     �   	      "      'async function acceptAccountAgreement({5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             `��     �   	      "      !function acceptAccountAgreement({5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             `��     �   	      "      acceptAccountAgreement({5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             `��     �   	      "      const acceptAccountAgreement({5�_�                       :    ����                                                                                                                                                                                                                                                                                                                                                             `��     �         "      ;}: AcceptAccountAgreementParams): Promise<Stripe.Account> {5�_�      	                 *    ����                                                                                                                                                                                                                                                                                                                                                             `��     �         "      >}: AcceptAccountAgreementParams): Promise<Stripe.Account> => {5�_�      
           	      *    ����                                                                                                                                                                                                                                                                                                                                                             `��     �         "      8}: AcceptAccountAgreementParams): Promise<.Account> => {5�_�   	              
      0    ����                                                                                                                                                                                                                                                                                                                                                             `��     �          "    5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             `��     �   
      $       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 &const acceptAccountAgreement = async({     id,     ip   >}: AcceptAccountAgreementParams): Promise<Stripe.Account> => {     Validator.validateWithError(       { ip: ip },       {   '      ...ACCEPT_ACCOUNT_AGREEMENT_RULES       }     );       9  const stripe = new Stripe(Config.stripeConfig.apiKey, {   .    apiVersion: Config.stripeConfig.apiVersion     });       4  const account = await stripe.accounts.update(id, {   <    // eslint-disable-next-line @typescript-eslint/camelcase       tos_acceptance: {   *      date: Math.floor(Date.now() / 1000),         ip: ip       }     });         return account;   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��    �   
      $       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �         $        Validator.validateWithError(5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �         $    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �                9  const stripe = new Stripe(Config.stripeConfig.apiKey, {   .    apiVersion: Config.stripeConfig.apiVersion     });5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         !      4  const account = await stripe.accounts.update(id, {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         !      .  const account = await .accounts.update(id, {5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         !    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         "       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��    �         "       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         "      } as SchemaType;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         "    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `��    �         #      =import {SchemaType} from "../../../../utils/validator/types";5�_�                    #       ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   "              };5�_�                     $        ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   #   %   %       5�_�      !               $        ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   $              %export default acceptAccountAgreement5�_�       "           !   $        ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   #   %   %       5�_�   !   #           "   $        ����                                                                                                                                                                                                                                                                                                                                                  V        `��     �   #   %   %       5�_�   "               #   $        ����                                                                                                                                                                                                                                                                                                                                                  V        `��    �   #   %   %       5��