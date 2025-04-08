import React from 'react'
import { FormControl, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = <T extends FieldValues>({ control, name, label, placeholder, type="text" }: FormFieldProps<T>) => (
  <Controller 
    control={control}
    name={name} 
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            placeholder={placeholder}
            type={type}
            {...field}
            value={field.value ?? ""}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField