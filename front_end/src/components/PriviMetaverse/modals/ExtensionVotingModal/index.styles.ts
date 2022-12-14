import { makeStyles } from "@material-ui/core/styles";

export const useModalStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    background: "#151515 !important",
    color: "#ffffff !important",
    borderRadius: "unset !important",
    width: "100vw !important",
    maxWidth: "unset !important",
    padding: "0px !important",
    height: "100vh !important",
  },
  nftContent: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
  },
  viewLabel: {
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    padding: "8px 10px 3px",
    color: "#1C0A4D",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: "104.5%",
    fontFamily: "GRIFTER",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    width: "fit-content",
    marginBottom: 8,
  },
  nftInfoSection: {
    background: "#0B151C",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "491px",
    maxWidth: 491,
    [theme.breakpoints.down("md")]: {
      minWidth: "initial",
      maxWidth: "initial",
      paddingLeft: 24,
      paddingRight: 24,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 82,
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  nftPreviewSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: "48px 40px",
    "& div": {
      width: "100% !important",
      height: "100% !important",
    },
    "& > img": {
      objectFit: "contain",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "48px 16px",
    },
  },
  speaker: {
    marginTop: 40,
    background: "rgba(255, 255, 255, 0.1)",
    border: "0.726449px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 21,
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  createNftBtn: {
    background: "linear-gradient(90.07deg, #49E9FF 1.26%, #FFFFFF 98.76%), #FFFFFF",
    borderRadius: 48,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "20px",
    color: "#1C0A4C",
    cursor: "pointer",
    padding: "15px 30px",
    width: 234,
  },
  creatorinfoSection: {
    display: "flex",
    alignItems: "center",
    marginTop: 32,
    cursor: "pointer",
  },
  typo1: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    textTransform: "uppercase",
  },
  typo2: {
    fontSize: 27,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "130%",
    textTransform: "uppercase",
  },
  typo3: {
    fontSize: 16,
    fontFamily: "Rany",
    lineHeight: "150%",
    overflowWrap: "break-word",
  },
  typo4: {
    fontfamily: "Rany",
    fontsize: "14px",
    lineheight: "120%",
  },
  typo5: {
    fontFamily: "GRIFTER",
    fontWeight: "bold",
    fontSize: "20px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
  },
  shareButton: {
    "& svg": {
      stroke: "#EEFF21",
      color: "#EEFF21",
    },
  },
  freejectShape: {
    position: "absolute",
    width: "161.81px",
    bottom: 63,
    left: -112.44,
    zIndex: 0,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%) !important",
    borderRadius: "100px !important",
    color: "#212121 !important",
    textTransform: "uppercase",
    fontSize: "18px !important",
    height: "48px !important",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
  createButton: {
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%) !important",
  },
  editButton: {
    background: "transparent !important",
    color: "white !important",
    border: "2px solid rgba(255, 255, 255, 0.5) !important",
  },
  mintButton: {
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%) !important",
    border: "2px solid #212121 !important",
    marginTop: "10px",
  },
  close: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "0.726449px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "100%",
    position: "absolute",
    cursor: "pointer",
    right: 40,
    top: 23,
    width: 65,
    height: 65,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    "& svg": {
      width: 20,
      height: 20,
    },
    [theme.breakpoints.down("md")]: {
      width: 42,
      height: 42,
      right: 16,
      "& svg": {
        width: 14,
        height: 14,
      },
    },
    [theme.breakpoints.down("xs")]: {
      right: 16,
      width: 32,
      height: 32,
      "& svg": {
        width: 12,
        height: 12,
      },
    },
  },
  quorumName: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "104%",
  },
  quorumValue: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "150%",
  },
  progressBox: {
    width: "100%",
    height: 35,
    background: "rgba(255,255,255,0.3)",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      marginRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      marginRight: 0,
    },
  },
  doneBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 35,
  },
  barLabel: {
    position: "absolute",
    top: 7,
    left: 12,
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "160%",
    color: "#151515",
  },
  barValue: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "19px",
    width: 20,
    marginRight: 60,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginRight: 0,
    },
  },
}));
