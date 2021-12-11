import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { useSelector } from "react-redux";

const steps = [
  {
    label: 'RECEIVED',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'IN PROGRESS',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'PREPARED',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'PAID',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];


const StatusStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const currentStatus = useSelector(state => state.order.status);
  
    useEffect(() => {
        setActiveStep(steps.findIndex(step => step.label == currentStatus))
    },[currentStatus])
  
  
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
              <StepContent>
                <h2>{step.description}</h2>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }


export default StatusStepper;