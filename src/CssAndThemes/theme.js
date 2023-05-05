import { createTheme } from "@mui/material/styles";
export default createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    common: { black: "rgba(88, 33, 33, 1)", white: "rgba(233, 216, 216, 1)" },
    background: {
      paper: '#ffff',
      default: "rgba(237, 123, 123, 1)",
      alignItems: "center",
    },
    primary: {
      light: "#7986cb",
      main: "rgba(75, 86, 127, 1)",
      dark: "rgba(18, 26, 80, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(82, 49, 61, 1)",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "rgba(249, 223, 223, 1)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "rgba(29, 7, 7, 1)",
    },
    text: {
      primary: "rgba(59, 113, 145, 0.8)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(19, 17, 17, 0.38)",
      hint: "rgba(180, 48, 48, 0.38)",
    },
    container: {
      maxWidth: "960px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    copyright: {
      float: "right",
    },
    img: {
      height: "auto",
      max_width: "100%",
      vertical_align: "middle"
    },
    
    button: {
      '&:hover': {
        backgroundColor: "rgba(255, 255, 255)",
      },
      '&:active': {
        backgroundColor: "rgba(255, 255, 25, 0.2)",
      },
      color: "white",
      padding: "0.8rem",
      font_size: "14px",
      text_transform: "uppercase",
      border_radius: "4px",
      font_weight: "400",
      display: "block",
      width: "100%",
      cursor: "pointer",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      background: "transparent",
    },
   
    cards_item: {
      display: "flex",
      padding: "1rem"
    },
    cards: {
      display: "flex",
      flex_wrap: "wrap",
      list_style: "none",
      margin: "0",
      padding: "0",
    },
    card: {
      background_color: "white",
      border_radius:"0.25rem",
      box_shadow:" 0 20px 40px -14px rgba(0, 0, 0, 0.25)",
      display: "flex",
      flex_direction: "column",
      overflow: "hidden",
      text_align: "center",
    },
    card_content: {
      padding: "1rem",     
      background: "linear_gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%)",
    },
    card_title: {
      color: "rgba(255, 255, 255)",
      font_size: "1.1rem",
      font_weight: "700",
      letter_spacing: "1px",
      text_transform: "capitalize",
      margin: "0px",
    },
    card_text: {
      color: "rgba(255, 255, 255)",
      font_size: "0.875rem",
      line_height: "1.5",
      margin_bottom: "1.25rem",    
      font_weight: "400",
    },
    made_by: {
      font_weight: "400",
      font_size: "13px",
      margin_top: "35px",
       text_align: "center",
    },
    App: {
      text_align: "center",
    }

  },
  
});
