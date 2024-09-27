import { render, screen } from '@testing-library/react';
import { Input } from '@common/components';
import {describe, expect, it, vi} from 'vitest';
import {userEvent} from '@testing-library/user-event';
import {RiMailLine} from '@remixicon/react';

describe('Input component', () => {
    it('Should render correctly', () => {
        render(<Input type="text" name="test" />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('Renders label correctly', () => {
        render(<Input label="Search" type="text" name="render-label-test" />);
        expect(screen.getByRole("label")).toBeInTheDocument();
        expect(screen.getByRole("label")).toHaveTextContent("Search");
    });

    it('Hides label correctly', () => {
        render(<Input label="Search" noLabel type="text" name="hide-label-test" />);
        expect(screen.queryByRole("label")).not.toBeInTheDocument();
    });

    it('Renders icon correctly', () => {
        render(<Input showIcon={true} icon={<RiMailLine size={20} />} noLabel type="text" name="render-icon-test" />);

        const iconElements = document.getElementsByTagName('svg');

        expect(iconElements.length).toBe(1);
        expect(iconElements[0]).toBeInTheDocument();
        expect(iconElements[0].classList).toContain('remixicon');
        expect(iconElements[0]).toBeVisible();
    });

    it('Hides icon correctly', () => {
        render(<Input showIcon={false} icon={<RiMailLine size={20} />} noLabel type="text" name="render-icon-test" />);

        const iconElement = document.getElementsByTagName('svg');

        expect(iconElement.length).toBe(0);
    });

    it('Renders error correctly', () => {
        render(<Input showError errorMessage="This field is required" noLabel type="text" name="render-icon-test" />);

        expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("Calls on the onChange callback handler and updates value", async() => {
        let value = '';
        const onChange = {
            setValue: (val: string) => value = val,
        }

        const spy = vi.spyOn(onChange, 'setValue').mockImplementation((val: string) => value = val);

        render(<Input type="text" name="on-change-test" onChange={(v) => onChange.setValue(v)} />);
        await userEvent.type(screen.getByRole('textbox'), 'This is a test');
        expect(spy).toHaveBeenCalledTimes(14);
        expect(value).toBe('This is a test');
        screen.debug();
    })

    it('Disables input correctly', async() => {
        let value = '';
        const onChange = {
            getValue: () => 'hello',
            setValue: (val: string) => value = val,
        }

        const spy = vi.spyOn(onChange, 'setValue').mockImplementation((val: string) => value = val);
        const spy2 = vi.spyOn(onChange, 'getValue').mockImplementation(() => value);

        render(<Input value={value} onChange={(v) => onChange.setValue(v)} noLabel type="text" name="test" />);
        await userEvent.type(screen.getByRole('textbox'), 'This is a test');
        expect(spy).toHaveBeenCalledTimes(14);
        expect(spy2).not.toHaveBeenCalled();
        expect(value).not.toBe('This is a test');
    });
})