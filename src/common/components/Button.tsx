import React from 'react';
import {Spinner} from '@common/components/Spinner.tsx';

interface Props {
    text?: string;
    textClassName?: string;
    customClassName: string;
    customOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    typeButton?: 'button' | 'submit' | 'reset' | undefined;
    isDisabled?: boolean | undefined;
    icon?: React.ReactNode;
    isLoading?: boolean;
    loaderColor?: string;
    spinnerColor?: string;
    iconPosition?: 'left' | 'right' | undefined;
}

const Button = ({
    text,
    textClassName,
    customClassName,
    customOnClick,
    typeButton = 'button',
    isDisabled,
     icon = null,
    isLoading = false,
    loaderColor = '#FFF',
    spinnerColor = '#fff',
    iconPosition = 'left',
}: Props) => {
    const GetIcon = () => {
        if (icon) {
            return icon;
        }
        return null;
    }

    return (
        <button
            type={typeButton}
            className={`${customClassName} ${isDisabled ? 'onDisabled' : ''} `}
            onClick={customOnClick}
            role="button"
            disabled={isDisabled}
        >
            {(!isLoading && iconPosition === 'left') && <GetIcon />}
            {isLoading ? (
               <Spinner loaderColor={loaderColor} spinnerColor={spinnerColor} />
            ) : (
                <span className={`truncate ${textClassName}`}>{text}</span>
            )}
            {(!isLoading && iconPosition === 'right') && <GetIcon/>}
        </button>
    );
};

export default Button;