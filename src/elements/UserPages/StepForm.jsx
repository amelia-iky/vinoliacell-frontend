import { useState } from 'react';
import Button from '../../components/Button';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Navigasi ke langkah berikutnya
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Navigasi ke langkah sebelumnya
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render indikator step
  const renderSteps = () => {
    return Array.from({ length: totalSteps }, (_, index) => {
      const step = index + 1;

      return (
        <div className='relative bottom-2' key={step}>
          {currentStep === step ? (
            <span
              className='mx-6 py-2 px-3 rounded-full bg-pink text-white cursor-pointer'
              key={step}
              onClick={() => setCurrentStep(step)}
            >
              {step}
            </span>
          ) : (
            <span
              className='mx-6 py-2 px-3 rounded-full bg-gray-400 text-black cursor-pointer'
              key={step}
              onClick={() => setCurrentStep(step)}
            >
              {step}
            </span>
          )}
        </div>
      );
    });
  };

  // Konten untuk setiap step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <p>Form Step 1: Input data pribadi</p>;
      case 2:
        return <p>Form Step 2: Alamat</p>;
      case 3:
        return <p>Form Step 3: Informasi pekerjaan</p>;
      case 4:
        return <p>Form Step 4: Verifikasi</p>;
      case 5:
        return <p>Form Step 5: Konfirmasi</p>;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col gap-7 items-center mt-5'>
      <div className='flex bg-pink h-2 mx-96'>{renderSteps()}</div>

      <div className='mt-5'>{renderStepContent()}</div>

      <div className='flex justify-center gap-5'>
        <Button
          type='submit'
          variant='primary'
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Kembali
        </Button>
        <Button
          type='submit'
          variant='primary'
          onClick={nextStep}
          disabled={currentStep === totalSteps}
        >
          Berikutnya
        </Button>
      </div>
    </div>
  );
};

export default StepForm;
