Vim�UnDo� 
5
�2f��5�g��b3�c�"Й���x�p�)   p         <Box>   X   
      3       3   3   3    `8h    _�                        #    ����                                                                                                                                                                                                                                                                                                                                                             `86     �         m      #import Step3 from "../Steps/Step3";5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `87     �         n       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `87     �         n       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `87    �       l   n   k   1import React, {useEffect, useState} from 'react';   Timport {Box, Button, Step, StepLabel, Stepper, Typography} from "@material-ui/core";   ?import logo from '../../../assets/images/Logos/Vacunaterd.png';   #import Step1 from "../Steps/Step1";   #import Step2 from "../Steps/Step2";   #import Step3 from "../Steps/Step3";       function FormStepper() {   4    const [activeStep, setActiveStep] = useState(0);   ;    const [stepConttentCmp, setStepConttentCmp] = useState(           <Step1/>   
        );       const steps = [   	        {   "            label: 'Info Personal'   
        },   	        {   "            label: 'Info Personal'   
        },   	        {   "            label: 'Info Personal'   	        }       ];       useEffect(() => {           switch (activeStep){               case 0: {   -                setStepConttentCmp(<Step1/>);                   break;               }               case 1: {   -                setStepConttentCmp(<Step2/>);                   break;               }               case 2: {   -                setStepConttentCmp(<Step3/>);                   break;               }               default: {   -                setStepConttentCmp(<Step1/>);                   break;               }   	        }       }, [activeStep])           const handleNext = () => {   >        setActiveStep((prevActiveStep) => prevActiveStep + 1);           };           const handleBack = () => {   >        setActiveStep((prevActiveStep) => prevActiveStep - 1);       };       const handleReset = () => {           setActiveStep(0);       };           return (   e        <Box display="flex" flexDirection="column" p={3} justifyContent="center" alignItems="center">   $            <img src={logo} alt=""/>   2            <Typography variant="h6" gutterBottom>                   REGÍSTRATE               </Typography>               <p>   c                Completa la información correspondiente para registrate en programa de vacunación               </p>   >            <Stepper activeStep={activeStep} alternativeLabel>   0                {steps.map(({label}, index) => {                           return (   *                        <Step key={index}>   :                            <StepLabel>{label}</StepLabel>                           </Step>                       );                   })}               </Stepper>               <div>   0                {activeStep === steps.length ? (                       <div>   $                        <Typography>   F                            All steps completed - you&apos;re finished   %                        </Typography>                           <Button   2                            onClick={handleReset}>   !                            Reset   !                        </Button>                       </div>                   ) : (                       <div>   )                        {stepConttentCmp}                           <div>   ?                            <Button disabled={activeStep === 0}   9                                    onClick={handleBack}>   $                                Back   %                            </Button>   #                            <Button   3                                variant="contained"   /                                color="primary"   4                                onClick={handleNext}                               >   U                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}   %                            </Button>                           </div>                       </div>                   )}               </div>           </Box>       );5�_�                          ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8W     �         n            label: "Info Personal"5�_�                           ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8^    �         n            label: "Info Personal"5�_�                    J       ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8�     �   I   K   n      O        Completa la información correspondiente para registrate en programa de5�_�                    J       ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8�    �   I   K   n      P        Completek la información correspondiente para registrate en programa de5�_�                           ����                                                                                                                                                                                                                                                                                                                            E          n          V       `8�     �         n        ];5�_�                            ����                                                                                                                                                                                                                                                                                                                            F          o          V       `8�     �         o       5�_�                            ����                                                                                                                                                                                                                                                                                                                            F          o          V       `8�    �         o       5�_�                    9       ����                                                                                                                                                                                                                                                                                                                            3          6           V       `8     �   8   ;   o        };5�_�                    :        ����                                                                                                                                                                                                                                                                                                                            3          6           V       `8     �   9   ;   p       5�_�                    :        ����                                                                                                                                                                                                                                                                                                                            3          6           V       `8   
 �   9   ;   p       5�_�                   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8�     �   ^   `   p                <div>5�_�                    i       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8�     �   h   j   p                </div>5�_�                    >        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   =   ?   p       5�_�                    >        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   =   ?   p       5�_�                    >        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8    �   =   ?   p       5�_�                    a       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   `   b   p                  <div>5�_�                    h       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   g   i   p                  </div>5�_�                     _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   ^   `   p                <Box>5�_�      !               _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   ^   `                    <Box width>5�_�       "           !   o        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   n   p   p       5�_�   !   #           "   o        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   n   p   p       5�_�   "   $           #   o        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8     �   n   p   p       5�_�   #   %           $   o        ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8    �   n   p   p       5�_�   $   &           %   Z       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8T     �   Y   [   p                <div>5�_�   %   '           &   Z       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8U     �   Y   [   p                <>5�_�   &   (           '   ]       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8V     �   \   ^   p                </div>5�_�   '   )           (   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Y     �   ^   `   p                <Box width="100%">5�_�   (   *           )   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Y     �   ^   `   p                <Boxwidth="100%">5�_�   )   +           *   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Z     �   ^   `   p                <Box="100%">5�_�   *   ,           +   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Z     �   ^   `   p                <Box100%">5�_�   +   -           ,   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Z     �   ^   `   p                <Box00%">5�_�   ,   .           -   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Z     �   ^   `   p                <Box0%">5�_�   -   /           .   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8Z     �   ^   `   p                <Box%">5�_�   .   0           /   _       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8[     �   ^   `   p                <Box">5�_�   /   1           0   X       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8]     �   W   Y   p            <div>5�_�   0   2           1   k       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8`     �   j   l   p            </div>5�_�   1   3           2   k       ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8a     �   j   l   p      	      </>5�_�   2               3   X   
    ����                                                                                                                                                                                                                                                                                                                            O          W          V       `8g    �   W   Y   p            <Box>5�_�                   _       ����                                                                                                                                                                                                                                                                                                                            a          h          V       `8�     �   ^   `   p                <>5�_�                     i       ����                                                                                                                                                                                                                                                                                                                            a          h          V       `8�   	 �   h   j   p                </>5�_�      
                     ����                                                                                                                                                                                                                                                                                                                                                             `89     �         n       5�_�                
           ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8Q     �         n       5�_�   
                          ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8Q     �         n       5�_�             
              ����                                                                                                                                                                                                                                                                                                                                                             `89    �         n       5�_�                            ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8H     �         n      FormStepper() {5�_�      	                      ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8I     �         n      const FormStepper() {5�_�                  	          ����                                                                                                                                                                                                                                                                                                                            c          e          V       `8K     �         n      const FormStepper: FC<>() {5��