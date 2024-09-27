import { render, screen } from '@testing-library/react';
import { Button } from '@common/components';
import {describe, expect, it, vi} from 'vitest';
import {userEvent} from '@testing-library/user-event';
import {RiMailLine} from '@remixicon/react';

describe('Button component', () => {
    it('Should render correctly', () => {
        render(<Button text="render test" customClassName="w-full py-2" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('render test');
    });

    it('Renders loading spinner correctly', () => {
        render(<Button text="render loading test" isLoading loaderColor="#000" customClassName="w-full py-2" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).not.toHaveTextContent('render loading test');
        expect(screen.getByRole('button')).toContain(screen.getByRole('status'));
    });

    it('Renders icon correctly', () => {
        render(<Button text="render icon test" icon={<RiMailLine size={20} />} isLoading loaderColor="#000" customClassName="w-full py-2" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        const iconElements = document.getElementsByTagName('svg');

        expect(iconElements.length).toBe(1);
        expect(iconElements[0]).toBeInTheDocument();
        expect(iconElements[0].classList).toContain('remixicon');
        expect(iconElements[0]).toBeVisible();
        expect(screen.getByRole('button')).toContain(iconElements[0]);
    });

    it("Calls on the onClick callback", async() => {
        const onClick = vi.fn();

        render(<Button customClassName="w-full py-2" text="On click test" customOnClick={onClick} />);
        await userEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledOnce();
    })

    it('Disables button correctly', async() => {
        const onClick = vi.fn();

        render(<Button isDisabled customClassName="w-full py-2" text="Disable on click test" customOnClick={onClick} />);
        await userEvent.click(screen.getByRole('button'));
        expect(onClick).not.toHaveBeenCalled();
    });
})