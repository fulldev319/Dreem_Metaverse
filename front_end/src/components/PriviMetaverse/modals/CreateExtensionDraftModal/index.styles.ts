import { makeStyles } from "@material-ui/core/styles";

export const useModalStyles = makeStyles(theme => ({
  content: {
    backgroundColor: "#0B151C !important",
    boxShadow: "0px 38px 96px 17px rgba(1, 1, 13, 0.25)",
    color: "white !important",
    width: "788px !important",
    borderRadius: "0px !important",
  },
  warningScreen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h3": {
      marginTop: 23,
      marginBottom: 14,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: 20,
      textAlign: "center",
      fontFamily: "Grifter",
      lineHeight: "130%",
    },
    "& p": {
      fontStyle: "normal",
      fontFamily: "Rany",
      fontSize: 18,
      fontWeight: 500,
      lineHeight: "160%",
      textAlign: "center",
      marginTop: 0,
      marginBottom: "19px",
      "&:last-child": {
        marginTop: 30,
      },
    },
    "& b": {
      fontWeight: 600,
    },
    "& button": {
      height: 59,
      width: 295,
      marginTop: 53,
      borderRadius: "48px",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "18px",
      border: "none",
      background: "linear-gradient(90.07deg, #49E9FF 1.26%, #FFFFFF 98.76%), #FFFFFF",
      color: "#1C0A4C",
    },
  },
  warningContainer: {
    background: "rgba(231, 218, 175, 0.3)",
    borderRadius: "49px",
    height: "39px",
    width: "39px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "11px",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    textTransform: "uppercase",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Rany",
    lineHeight: "104.5%",
  },
  input: {
    background: "rgba(218, 230, 229, 0.06)",
    border: "1px solid rgba(218, 218, 219, 0.59)",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "160%",
    outline: "none",
    color: "white",
    padding: "12px 30px",
  },
  uploadBox: {
    display: "flex",
    alignItems: "center",
    background: "rgba(238, 242, 247, 0.06)",
    border: "1px dashed #FFFFFF",
    padding: "12px 12px 12px 0",
    "& button": {
      color: "white",
      background: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "unset",
      "& svg": {
        marginRight: 8,
      },
    },
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    color: "#ffffff",
  },
  controlBox: {
    fontSize: 14,
    fontWeight: 500,
    "& span": {
      color: "#B7FF5C",
    },
  },
  uploadBtn: {
    background: "white !important",
    fontSize: "18px !important",
    color: "#4218B5 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      marginRight: 8,
    },
    "& button": {
      color: "#ffffff",
      background: "#4218B5",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 20,
      "& svg": {
        marginRight: 8,
        "& path": {
          stroke: "#4218B5",
          fill: "#4218B5",
        },
      },
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      borderRadius: 48,
      fontSize: 16,
      fontWeight: 600,
      height: 59,
      padding: "0 80px",
      "&:first-child": {
        border: "1px solid rgba(255, 255, 255, 0.36)",
        color: "white",
        background: "transparent",
      },
      "&:last-child": {
        background: "linear-gradient(90.07deg, #49E9FF 1.26%, #FFFFFF 98.76%), #FFFFFF",
        color: "#1C0A4C",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0 48px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "0 24px",
      },
    },
  },
  switchWrapper: {
    display: "flex",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "25px 0px",
    justifyContent: "space-between",
    marginTop: 20,
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Rany",
    "& p": {
      color: "#ffffff",
      margin: 0,
    },
    "& .MuiFormControlLabel-root": {
      marginRight: "0px !important",
    },
  },
}));
