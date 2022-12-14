import { makeStyles } from "@material-ui/core";

export const creatorPageStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    height: "100%",
    background: "#000000",
  },
  container: {
    width: "100%",
    marginTop: 16,
    paddingTop: 100,
    paddingBottom: 0,
    overflowY: "auto",
    color: "#ffffff",
    position: "relative",
    height: "100%",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 46,
      paddingRight: 46,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 26,
      paddingRight: 26,
    },
  },
  fitContent: {
    maxWidth: 1280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  decorationImage1: {
    width: 320,
    height: 700,
    top: 0,
    right: 0,
    position: "absolute",
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      top: -300,
      right: -60,
    },
    [theme.breakpoints.down("sm")]: {
      top: -400,
      right: -46,
    },
    [theme.breakpoints.down("xs")]: {
      top: -500,
      right: -26,
    },
  },
  decorationImage2: {
    width: 320,
    height: 390,
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      left: -60,
    },
    [theme.breakpoints.down("sm")]: {
      left: -46,
    },
    [theme.breakpoints.down("xs")]: {
      left: -26,
    },
  },
  profileSection: {
    zIndex: 1,
    border: "1px solid #ED7B7B",
    padding: "40px 24px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  avatarBox: {
    cursor: "pointer",
    marginRight: theme.spacing(5.5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
    },
  },
  profileContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },
  profileContentButtons: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  profileMetaBox: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
  },
  metaBoxDivider: {
    width: 1,
    height: 12,
    backgroundColor: "#ffffff11",
    margin: "0px 12px",
    [theme.breakpoints.down("sm")]: {
      opacity: 0,
    },
  },
  metaBoxDivider1: {
    width: 1,
    height: 54,
    backgroundColor: "#ffffff11",
    margin: "0px 20px",
  },
  metaBoxDivider2: {
    width: 1,
    height: 54,
    backgroundColor: "#ffffff11",
    margin: "0px 20px",
    [theme.breakpoints.down("sm")]: {
      opacity: 0,
      height: 16,
    },
  },
  followingBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  actionButtonContainer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  actionButtonsContainer: {
    display: "block",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  actionButtonContainer1: {
    display: "none",
    marginBottom: 16,
    [theme.breakpoints.down(700)]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  nftContentSection: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
  },
  tabSection: {
    display: "flex",
    padding: "24px 16px",
    border: "1px solid #ED7B7B",
    marginTop: 32,
    overflow: "scroll",

    "&::-webkit-scrollbar": {
      height: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: -26,
      borderRight: "none",
    },
  },
  selectedTab: {
    fontSize: 16,
    fontWeight: 800,
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    cursor: "pointer",
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    padding: "10px 39px",
    color: "#212121",
    textTransform: "uppercase",
    borderRadius: 2,
    height: 35,
    whiteSpace: "nowrap",
  },
  tab: {
    fontSize: 16,
    fontWeight: 800,
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    color: "#ffffff",
    cursor: "pointer",
    background: "transparent",
    padding: "10px 39px",
    height: 35,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  nftContent: {
    marginTop: theme.spacing(2),
    overflowY: "auto",
  },
  settingSection: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "0.726449px solid rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    padding: "7px 14px 0px",
    cursor: "pointer",
  },
  typo1: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "GRIFTER",
    lineHeight: "104.5%",
  },
  typo2: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    fontSize: 40,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    textTransform: "uppercase",
    paddingRight: 56,
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      paddingRight: 0,
    },
    "&:after": {
      position: "absolute",
      top: 0,
      right: 0,
      content: "no-close-quote",
      display: "none",
      width: "100px",
      height: "35px",
      backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
      [theme.breakpoints.down(380)]: {
        display: "inline-block",
      },
    },
  },
  typo3: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Rany",
    lineHeight: "104.5%",
    color: "#ffffff60",
  },
  typo4: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Rany",
    color: "#ffffff80",
    "& span": {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Rany",
      lineHeight: "104.5%",
      color: "#ffffff60",
    },
  },
  typo5: {
    fontSize: 24,
    fontWeight: 800,
    fontFamily: "GRIFTER",
    lineHeight: "25px",
  },
  typo6: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Rany",
    lineHeight: "150%",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.5)",
  },
  typo7: {
    fontSize: 34,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    textTransform: "uppercase",
    background: "linear-gradient(301.58deg, #ED7B7B 32.37%, #EDFF1C 100.47%)",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    width: "fit-content",
  },
  socialLinkButton: {
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "50%",
  },
  actionBox: {
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    alignItems: "center",
    background: "#151515",
    padding: "20px 40px 48px",
    "& > button": {
      marginTop: 20,
      width: "80%",
      justifyContent: "center",
    },
  },
  verify: {
    fontFamily: "GRIFTER",
    fontWeight: 700,
    fontSize: "12px",
    color: "#fff",
  },
}));
