import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    text: string;
    to: string;
    icon?: React.ReactNode;
    clickable?: boolean;
    isActive?: boolean;
    activeClassname?: string;
    customClassname?: string;
    iconPosition?: 'left' | 'right' | undefined;
    customOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ListItem = ({
    text,
    to,
    icon = null,
    clickable = false,
    isActive = false,
    activeClassname = '',
    customClassname = '',
    iconPosition = undefined,
    customOnClick,
                  }: Props) => {
    const GetIcon = () => {
        if (icon) {
            return icon;
        }
        return null;
    }

    return (
        <Link to={to}>
            <button
                type="button"
                className={`${customClassname} flex items-center gap-3 ${isActive ? activeClassname : ''} `}
                onClick={clickable ? customOnClick : () => {
                }}
                role="button">
                {iconPosition === 'left' && <GetIcon/>}
                {text}
                {iconPosition === 'right' && <GetIcon/>}
            </button>
        </Link>

    )
}

export default ListItem;