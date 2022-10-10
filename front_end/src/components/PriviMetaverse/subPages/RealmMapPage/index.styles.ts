import { makeStyles } from '@material-ui/core';

export const realmMapPageStyles = makeStyles(theme => ({
  mainContent: {
    width: "100%",
    height: "100%",
    paddingTop: "72px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0c0c0c",
    "& node-label": {
      color: "red",
    }
  },
  modalContainer: {
    width: "400px",
    position: "absolute",
    right: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      right: "auto",
    },
  },
  closeButton: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "0.726449px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "100%",
    position: "absolute",
    cursor: "pointer",
    right: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    width: 42,
    height: 42,
    "& svg": {
      width: 14,
      height: 14,
    },
    [theme.breakpoints.down("md")]: {
      width: 42,
      height: 42,
      "& svg": {
        width: 14,
        height: 14,
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: 32,
      height: 32,
      "& svg": {
        width: 12,
        height: 12,
      },
    },
  },
  picContainer: {
    width: "400px",
    height: "400px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "50px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "300px",
      paddingBottom: "35px",
    },
  },
  picBorder: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0",
    borderRadius: "50%",
    WebkitAnimation: "$rotating 3s linear infinite",
    animation: "$rotating 3s linear infinite",
    MozAnimation: "$rotating 3s linear infinite",
  },
  blueCircle: {
    position: "absolute",
    width: "381.49px",
    height: "381.49px",
    left: "0px",
    top: "0px",
    background: "#C4C4C4",
    borderRadius: "400px",
    border: "1px solid #5297FF",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "290px",
    },
  },
  blueCircleBlur: {
    position: "absolute",
    width: "381.49px",
    height: "381.49px",
    left: "0px",
    top: "0px",
    background: "#C4C4C4",
    borderRadius: "400px",
    border: "46px solid #267DFF",
    boxSizing: "border-box",
    filter: "blur(19px)",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "290px",
    },
  },
  yellowCircle: {
    position: "absolute",
    width: "381.49px",
    height: "381.49px",
    left: "20px",
    top: "10px",
    borderRadius: "400px",
    border: "1px solid #F3FF9C",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "290px",
      left: "10px",
      top: "5px",
    },
  },
  yellowCircleBlur: {
    position: "absolute",
    width: "381.49px",
    height: "381.49px",
    left: "20px",
    top: "10px",
    borderRadius: "400px",
    border: "46px solid #E9FF26",
    boxSizing: "border-box",
    filter: "blur(19px)",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "290px",
    },
  },
  pic: {
    position: "absolute",
    width: "381.69px",
    height: "381.69px",
    left: "11px",
    top: "9.31px",
    borderRadius: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "290px",
      left: "5px",
      top: "5px",
    },
  },
  picLabel: {
    zIndex: 10,
  },
  name: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "120%",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    marginTop: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 300,
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      marginTop: "15px",
    },
  },
  description: {
    color: "#FFFFFF",
    width: "300px",
    opacity: "0.6",
    fontSize: "14px",
    fontStyle: "normal",
    marginTop: "10px",
    textAlign: "center",
    fontFamily: "Rany",
    fontWeight: "normal",
    lineHeight: "140%",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  btnDetail: {
    width: "300px !important",
    height: "44px !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5) !important",
    border: "2px solid rgba(255, 255, 255, 0.5) !important",
    boxSizing: "border-box",
    borderRadius: "100px !important",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px !important",
    lineHeight: "120%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
      height: "40px !important",
    },
  },
  btnEnter: {
    width: "300px !important",
    height: "44px !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    borderRadius: "88px !important",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px !important",
    lineHeight: "135%",
    textTransform: "uppercase",
    color: "#000000 !important",
    marginTop: "10px",
    marginLeft: "0px !important",
    "& svg": {
      marginRight: 8,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
      height: "40px !important",
    },
  },
  extensionTag: {
    background: "#E9FF26",
    borderRadius: "20px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "19.6115px",
    lineHeight: "120%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#151515",
    padding: "10px 25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      padding: "6px 20px",
    },
  },
  realmTag: {
    background: "#E9FF26",
    borderRadius: "20px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "19.6115px",
    lineHeight: "120%",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#151515",
    padding: "10px 25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      height: "40px",
      padding: "6px 20px",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%) !important",
    borderRadius: "100px !important",
    border: "2px solid #000000 !important",
    color: "black !important",
    textTransform: "uppercase",
    fontSize: "16px !important",
    "& svg": {
      marginRight: 8,
    },
  },
  "@keyframes rotating": {
    from: {
      WebkitTransform: "rotate(0deg)",
    },
    to: {
      WebkitTransform: "rotate(360deg)",
    },
  },
  "@-webkit-keyframes rotating": {
    from: {
      WebkitTransform: "rotate(0deg)",
    },
    to: {
      WebkitTransform: "rotate(360deg)",
    },
  },
  "@-moz-keyframes rotating": {
    from: {
      WebkitTransform: "rotate(0deg)",
    },
    to: {
      WebkitTransform: "rotate(360deg)",
    },
  },
}));