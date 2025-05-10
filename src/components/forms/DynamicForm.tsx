import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

interface DynamicFormProps {
  fields: FormField[];
  initialValues: Record<string, string>;
  onSubmit: (values: Record<string, string>) => void;
  submitButtonText?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  initialValues,
  onSubmit,
  submitButtonText = 'Submit',
}) => {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !values[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          value={values[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
          required={field.required}
          placeholder={field.placeholder}
          icon={field.icon}
        />
      ))}
      <Button type="submit" variant="primary" className="w-full flex justify-center items-center">
        {submitButtonText} <span className="ml-2">→</span>
      </Button>
    </form>
  );
};

export default DynamicForm;