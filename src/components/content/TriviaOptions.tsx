import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';

interface TriviaOptionsProps {
  options: string[];
  correctAnswer?: number;
}

export function TriviaOptions({ options, correctAnswer }: TriviaOptionsProps) {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  const getOptionStyles = (index: number) => {
    if (selectedOption !== index) return '';
    if (correctAnswer === undefined) return '';
    
    return selectedOption === correctAnswer ? 'bg-green-100' : 'bg-red-100';
  };

  return (
    <div className="space-y-2 mb-4">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="secondary"
          className={cn(
            'w-full text-left',
            getOptionStyles(index)
          )}
          onClick={() => handleSelect(index)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}