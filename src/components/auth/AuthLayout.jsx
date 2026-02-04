import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center px-4 gradient-hero">
            <div className="w-full max-w-md">
                <div className="glass p-8 md:p-10 rounded-3xl glow-primary">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                        <p className="text-text-muted">{subtitle}</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
