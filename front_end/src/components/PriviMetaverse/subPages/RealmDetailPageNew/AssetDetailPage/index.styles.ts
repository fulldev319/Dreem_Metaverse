import { makeStyles } from "@material-ui/core";

export const usePageStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "#151515",
    position: "relative",
    backgroundRepeat: "no-repeat",
    "&:before": {
      width: "100%",
      height: "380px",
      backgroundImage: `url(${require("assets/backgrounds/asset_detail_bg.png")})`,
      opacity: 0.6,
      position: "absolute",
      top: "70px",
      content: "' '",
      zIndex: 0,
    },
    "&:after": {
      width: "100%",
      height: "380px",
      background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
      position: "absolute",
      top: "70px",
      content: "' '",
      zIndex: 1,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: 72,
    margin: "0 auto",
    maxWidth: "1342px",
    padding: "41px 85px",
    color: "#ffffff",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      paddingTop: 80,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  backBtn: {
    cursor: "pointer",
    background: "white",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "120%",
    textTransform: "uppercase",
    padding: "8px 24px 6px",
    borderRadius: "50px",
    color: "#151515",
    "& svg": {
      marginRight: "10px",
    },
  },
  shareBtn: {
    cursor: "pointer",
    background: "#00B4F6",
    padding: "9.39583px 37.5833px 8.54167px 33.58px",
    borderRadius: "44.4167px",
  },
  divider: {
    width: "100%",
    opacity: "0.1",
    borderBottom: "2px solid #FFFFFF",
    margin: "32px 0",
  },
  darkLayer: {
    maxHeight: 333,
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "#151515",
    opacity: 0.7,
    zIndex: 1,
  },
  assetImage: {
    maxWidth: 480,
    maxHeight: 480,
    minWidth: 320,
    minHeight: 320,
    padding: 64,
    backgroundImage: `url(${require("assets/backgrounds/asset_img_frame.svg")})`,
    backgroundSize: "cover",
    width: "fit-content",
    height: "fit-content",
    backgroundRepeat: "no-repeat",
  },
  assetCreator: {
    padding: "31px 0px 31px 24px",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.65) -5.25%, rgba(0, 0, 0, 0) 97.07%)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: 16,
    width: "fit-content",
  },
  assetDetail: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  assetDetailBG: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  assetAttributes: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  vDivider: {
    margin: "0 27px",
    height: "70%",
    borderRight: "1px solid rgba(255, 255, 255, 0.25)",
  },
  vDivider1: {
    margin: "0 48px",
    height: "80%",
    borderRight: "1px solid rgba(255, 255, 255, 0.25)",
  },
  heading: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
  },
  heading1: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "42px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  typo1: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
  },
  typo2: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "175%",
  },
  typo3: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "19px",
    lineHeight: "110%",
    color: "#FFFFFF",
  },
  typo4: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "110%",
    color: "rgba(255, 255, 255, 0.6)",
    marginTop: "4px",
  },
  typo5: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "175%",
    color: "#FFFFFF",
  },
  typo6: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "19.8px",
    color: "#FFFFFF99",
    marginBottom: "12px",
  },
  typo7: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "110%",
    color: "#7535FB",
  },
  typo8: {
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "25.6px",
    color: "#FFFFFF99",
  },
  typo9: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "25.6px",
    color: "#FFFFFF",
  },
  element: {
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: 32,
    marginRight: 16,
    padding: "8px 20px",
    "& svg": {
      marginRight: 8,
    },
  },
  typo10: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "120%",
    color: "#8AE92C",
  },
  typo11: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "15px",
    color: "#8AE92C",
    background: "linear-gradient(246.14deg, #0AF0FF -27.07%, #FFFFFF 95.52%)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
  },
  typo12: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "12.83px",
    lineHeight: "13.41px",
    color: "#EFFFF9",
  },
  link: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontHeight: "500",
    fontSize: "18px",
    lineHeight: "120%",
    textTransform: "capitalize",
    textDecoration: "none",
    color: "#00B4F7",
    flex: "none",
    margin: "8px 0px",
  },
  cardOptionButton: {
    float: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 8px",
    background: "rgba(190, 167, 255, 0.6)",
    borderRadius: "5.90529px",
    flex: "none",
    order: 1,
    flexGrow: 0,
    color: "#212121",
    marginRight: "11px",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13.2857px",
  },
  copiesLabel: {
    position: "absolute",
    top: 0,
    left: 32,
    transform: "translateY(-50%)",
    fontFamily: "Rany",
    fontStyle: "normal",
    fontWeight: "bold",
    width: "fit-content",
    fontSize: "13px",
    lineHeight: "120%",
    textTransform: "uppercase",
    color: "white",
    padding: "3px 8px 4px",
    background: "#00B4F6",
    borderRadius: "5px",
  },
  openOrderBookBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 58px 10px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    color: "#FFFFFF",
    fontFamily: "GRIFTER",
    fontWeight: 700,
    fontSize: "18px",
    fontStyle: "normal",
    width: "fit-content",
    textTransform: "uppercase",
    margin: "51px auto",
  },
  button: {
    padding: "16px 44px 10px",
    borderRadius: 8,
    color: "white",
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "120%",
    width: "fit-content",
  },
  buyBtn: {
    backgroundColor: "#00B4F6",
  },
  rentBtn: {
    backgroundColor: "#7535FB",
  },
  blockBtn: {
    backgroundColor: "#FFFFFF",
    color: "black",
  },
}));
