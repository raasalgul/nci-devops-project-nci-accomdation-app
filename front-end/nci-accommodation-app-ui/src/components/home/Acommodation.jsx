import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"

export default function Profile(){
    
    return(<ThemeProvider theme={theme}>
        Accommodation
    </ThemeProvider>)
}