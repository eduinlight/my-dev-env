Vim�UnDo� ��O����"�����G���8"�e�Y� '��                                      `S_    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `S^    �                  .const generate = (length: number): string => {     let i = length;     const code = [];     while (i > 0) {       i--;   2    code.push(Math.ceil(Math.random() * 10) % 10);     }     return code.join("");   };       export default generate;5��