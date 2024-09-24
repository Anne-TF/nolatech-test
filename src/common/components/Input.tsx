import React, {useState} from 'react';
import { RiErrorWarningLine } from '@remixicon/react';

export interface InputProps {
    type: string;
    name: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    showError?: boolean;
    errorMessage?: string;
    value?: string;
    ariaLabel?: string;
    icon?: React.ReactNode;
    onChange?: (value: string) => void;
    showIcon?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    containerClasses?: string;
    onKeyDown?: () => void;
    noLabel?: boolean;
    preventCopyPaste?: boolean;
    label?: string;
    highlightError?: boolean;
    isDisabled?: boolean;
}

const Input = ({
   type,
   name,
   placeholder,
   required,
   showError = false,
   errorMessage = '',
   value,
   className,
   ariaLabel,
   icon = null,
   onChange,
   inputRef,
   showIcon,
   containerClasses,
   onKeyDown = () => {},
   noLabel = false,
   preventCopyPaste = false,
   label,
   highlightError = false,
   isDisabled = false,
}: InputProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
        setInputValue(e.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13 && onKeyDown) {
            onKeyDown();
        }
    };

    const onCopyOrPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        if (preventCopyPaste) {
            e.preventDefault();
        }
    };

    return (
        <div className={`${containerClasses ?? ''} relative flex flex-col`}>
            {!noLabel && (
                <label
                    htmlFor={name}
                    className="my-2 block text-inter-regular ls-1 capitalize text-app-secondary dark:!text-slate-300">
                    {label ? label : name}
                </label>
            )}
            <div className="relative">
                <div className="relative">
                    <input
                        type={type}
                        name={name}
                        id={name}
                        onKeyDown={handleKeyDown}
                        required={required}
                        placeholder={placeholder}
                        aria-label={ariaLabel}
                        value={value}
                        onCopy={(e) => onCopyOrPaste(e)}
                        onPaste={(e) => onCopyOrPaste(e)}
                        onCut={(e) => onCopyOrPaste(e)}
                        onChange={handleInputChange}
                        autoComplete="off"
                        disabled={isDisabled}
                        ref={inputRef}
                        className={`w-full rounded-lg bg-slate-200 !focus:border-transparent !focus:ring-0 ${className || ''}
                        dark:!bg-app-secondary dark:!text-white py-4 rounded-lg
                         ${
                            showError || highlightError
                                ? 'border-b border-solid border-app-danger-900 dark:!border-app-danger'
                                : ''
                        }`}
                        aria-invalid={
                            (showError && inputValue.length < 2) || highlightError
                        }
                    />
                    { showIcon &&  icon }
                </div>
                <div
                    className={`absolute animate-fade-in-down mt-2 flex items-center gap-1 ${showError && errorMessage ? 'block' : 'hidden'}`}
                    role="region"
                    aria-live="assertive"
                    aria-label={errorMessage}>
                    <RiErrorWarningLine
                        size={20}
                        className="text-app-danger-900 dark:!text-app-danger"
                    />
                    <span
                        aria-hidden="true"
                        className="text-sm text-app-danger-900 font-medium dark:!text-app-danger">
                        {errorMessage}
                        </span>
                </div>
            </div>
        </div>
    );
};

export default Input;
