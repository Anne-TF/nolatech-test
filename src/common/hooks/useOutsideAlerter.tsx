import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.RefObject<any>, fn: () => void) {
    useEffect(() => {
        if (!ref) return;
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                fn();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export const OutsideAlerter = ({ children, fn }: { children: React.ReactNode, fn: () => void }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, fn);

    return <div className="relative" ref={wrapperRef}>{children}</div>;
}

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
};