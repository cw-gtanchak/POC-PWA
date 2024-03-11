import { AuthProvider, theme } from '@azaVista/shared';
import { ThemeProvider } from '@mui/material/styles';
import Shell from '@azaVista/shell';

function Provider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}

export default Provider;
