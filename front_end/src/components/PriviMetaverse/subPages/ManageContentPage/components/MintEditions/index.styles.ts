import { makeStyles } from "@material-ui/core/styles";

export const useModalStyles = makeStyles(theme => ({
  otherContent: {
    marginTop: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1600,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 96px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 16px",
    },
  },
  content: {
    background: "rgba(11, 21, 28, 0.6)",
    boxShadow: "0px 38px 96px 17px rgba(1, 1, 13, 0.25)",
    color: "white",
    maxWidth: "755px",
    borderRadius: "0px",
    maxHeight: "527px",
    overflow: "auto",
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
    textAlign: "center",
    marginBottom: "30px",
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "Rany",
    lineHeight: "21px",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: "65px",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "17px",
    textTransform: "uppercase",
    marginBottom: "22px",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Rany",
    lineHeight: "120%",
  },
  mintBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "13px 18px",
    height: "60px",
    background: "rgba(218, 230, 229, 0.06)",
    border: "1px solid #DAE6E5",
    boxSizing: "border-box",
  },
  mintBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "34px !important",
    fontSize: "14px !important",
    backgroundColor: "#E9FF26 !important",
    borderRadius: "27.661px !important",
    color: "#212121 !important",
  },
  finishBtn: {
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%) !important",
    borderRadius: "100px !important",
    width: "230px !important",
    padding: "16px 44px 10px !important",
    fontSize: "18px !important",
    fontWeight: "bold",
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    textTransform: "uppercase",
    textAlign: "center",
    height: "auto !important",
    color: "#212121 !important",
  },
}));
