import * as React from "react";
// @ts-ignore

export default function ({ label, isActive, onClick }) {
    return (
        <button
            className={`dynamic-button ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
