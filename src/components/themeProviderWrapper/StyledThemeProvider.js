import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { usualTheme, customTheme } from '../../themes';

export const StyledThemeProvider = ({ children }) => {
    const isUsualTheme = useSelector(state => state.themeToggle.isUsualTheme);
    return (
        <ThemeProvider theme={isUsualTheme ? usualTheme : customTheme}>
            {children}
        </ThemeProvider>
    )
}