import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    onClick?: () => void;
}

function Button({children, color = "success", onClick}: ButtonProps) {
    return (
        <button
            className={"btn btn-" + color}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;