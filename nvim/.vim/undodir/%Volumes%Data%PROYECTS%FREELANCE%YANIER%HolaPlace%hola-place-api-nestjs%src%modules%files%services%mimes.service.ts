Vim�UnDo� ��%��F@���ʶ������J�q|�N��   -       (          <       <   <   <    `0r    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �              �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                 �             �                 @Injectable()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                 constructor()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                 constructor(){}5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               '�             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                *import {Injectable} from "@nestjs/common";       @Injectable()   export class MimesService {     constructor(){}       2  const isAudio = (mimeType: string): boolean => {     const audios = [       "audio/mpeg",       "audio/mp4",       "audio/x-mpegurl",       "audio/vnd.wav"     ];   #  return audios.includes(mimeType);   };        5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                ,import { Injectable } from '@nestjs/common';5�_�   	              
      
    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               ,  isAudio = (mimeType: string): boolean => {5�_�   
                    '    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               +  isAudio  (mimeType: string): boolean => {5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               *  isAudio  (mimeType: string): boolean > {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �            	   )  isAudio  (mimeType: string): boolean  {       const audios = [         'audio/mpeg',         'audio/mp4',         'audio/x-mpegurl',         'audio/vnd.wav',       ];   %    return audios.includes(mimeType);     };5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�    �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                  constructor() {}5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�    �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�    �                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                 }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               0const isImage = (mimeType: string): boolean => {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               *isImage = (mimeType: string): boolean => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               *isImage = (mimeType: string): boolean => {5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               (isImage (mimeType: string): boolean => {5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               'isImage (mimeType: string): boolean > {5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �               &isImage (mimeType: string): boolean  {   :  const images = ["image/jpeg", "image/png", "image/jpg"];   #  return images.includes(mimeType);   };        5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                             `0q�    �                5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �                 }5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �      *          �             5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         *       5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �      (   *      3const isResource = (mimeType: string): boolean => {     const resources = [       "application/pdf",   $    "application/vnd.ms-powerpoint",       "application/msword",       "application/vnd.ms-excel",   .    "application/vnd.oasis.opendocument.text",   5    "application/vnd.oasis.opendocument.spreadsheet",   6    "application/vnd.oasis.opendocument.presentation",   #    "application/x-rar-compressed",   "    "application/x-7z-compressed",       "application/x-tar",       "application/zip",       "image/svg+xml",       "image/jpeg",       "image/png",       "image/png"     ];   &  return resources.includes(mimeType);   };        5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         (      /  isResource = (mimeType: string): boolean => {5�_�   '   )           (      )    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         (      -  isResource (mimeType: string): boolean => {5�_�   (   *           )      )    ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         (      ,  isResource (mimeType: string): boolean > {5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         (       5�_�   *   ,           +           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �      (   (      +  isResource (mimeType: string): boolean  {       const resources = [         'application/pdf',   &      'application/vnd.ms-powerpoint',         'application/msword',   !      'application/vnd.ms-excel',   0      'application/vnd.oasis.opendocument.text',   7      'application/vnd.oasis.opendocument.spreadsheet',   8      'application/vnd.oasis.opendocument.presentation',   %      'application/x-rar-compressed',   $      'application/x-7z-compressed',         'application/x-tar',         'application/zip',         'image/svg+xml',         'image/jpeg',         'image/png',         'image/png',       ];   (    return resources.includes(mimeType);     };5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         (       5�_�   ,   .           -           ����                                                                                                                                                                                                                                                                                                                                                             `0q�     �         (       5�_�   -   /           .           ����                                                                                                                                                                                                                                                                                                                                                             `0q�    �         (       5�_�   .   0           /   '       ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   &   *   (        }5�_�   /   1           0   )       ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   (   /   *        v�   )   *   *    5�_�   0   2           1   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   '   )   /       5�_�   1   3           2   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   (   -   /      2  const isVideo = (mimeType: string): boolean => {     const videos = ["video/mp4"];   #  return videos.includes(mimeType);   };        5�_�   2   4           3   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   '   )   -       5�_�   3   5           4   )   
    ����                                                                                                                                                                                                                                                                                                                                                             `0r	     �   (   *   -      ,  isVideo = (mimeType: string): boolean => {5�_�   4   6           5   )   
    ����                                                                                                                                                                                                                                                                                                                                                             `0r	     �   (   *   -      +  isVideo  (mimeType: string): boolean => {5�_�   5   7           6   )   &    ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   (   *   -      *  isVideo (mimeType: string): boolean => {5�_�   6   8           7   )   &    ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   (   *   -      )  isVideo (mimeType: string): boolean > {5�_�   7   9           8   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   '   )   -       5�_�   8   :           9   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   '   )   -       5�_�   9   ;           :   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   (   -   -      (  isVideo (mimeType: string): boolean  {   !    const videos = ['video/mp4'];   %    return videos.includes(mimeType);     };5�_�   :   <           ;   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r     �   '   )   -       5�_�   ;               <   (        ����                                                                                                                                                                                                                                                                                                                                                             `0r    �   '   )   -       5��