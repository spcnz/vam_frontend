import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { useSelector } from "react-redux";

import "../../assets/css/StatusStepper.css";

import { RECEIVED, IN_PROGRESS, PREPARED, PAID } from "../../orderStatus";

const steps = [
  {
    id: RECEIVED,
    label: 'Primljena',
    description: `Vaša porudžbina se obrađuje. Molimo Vas da sačekate.`,
  },
  {
    id: IN_PROGRESS,
    label: "U pripremi",
    description: 'Vaša porudžbina se sprema!',
  },
  {
    id: PREPARED,
    label: "Gotovo",
    description: `Spremno! Očekujte Vašu porudžbinu svakog trenutka.`,
  },
  {
    id: PAID,
    label: 'Plaćeno',
    description: `Vaša porudžbina je plaćena. Hvala na ukazanom poverenju.`,
  },
];


const StatusStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const currentStatus = useSelector(state => state.order.status);
  
    useEffect(() => {
        const newStep = steps.findIndex(step => step.id == currentStatus);
        if (newStep != -1) {
          setActiveStep(newStep)
        }
    },[currentStatus])
  
  
    return (
      <Box className="box">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <h1>{step.label}</h1>
              </StepLabel>
              <StepContent>
                <h3>{step.description}</h3>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }


export default StatusStepper;