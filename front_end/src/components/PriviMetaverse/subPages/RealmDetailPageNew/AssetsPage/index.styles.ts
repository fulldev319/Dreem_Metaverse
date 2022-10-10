import { makeStyles } from "@material-ui/core";

export const usePageStyles = makeStyles(theme => ({
  root: {
    background: "#151515",
    position: "relative",
    backgroundImage: `url(${require("assets/metaverseImages/background_voting.png")})`,
    backgroundRepeat: "no-repeat",
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
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    marginTop: 72,
    padding: "41px 85px",
    color: "#ffffff",
    [theme.breakpoints.down("md")]: {
      paddingTop: 80,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 350,
    zIndex: 2,
  },
  solanaIcon: {
    background: "#fff",
    width: 40,
    height: 31,
    padding: "8px 11px",
    borderRadius: 4,
  },
  selectedAssetsMenu: {
    background: "#00B4F7",
    padding: "12px 24px 10px",
    borderRadius: "63px",
    color: "#151515",
    width: "fit-content",
  },
  followerSection: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "10px",
  },
  twitterFeedSection: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "10px",
    marginTop: 16,
    padding: 16,
  },
  twitterFeedItem: {
    display: "flex",
  },
  creationDateSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: 10,
    padding: 24,
    marginTop: 16,
  },
  rightPanel: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 185,
    zIndex: 2,
  },
  applyExtensionButton: {
    background: "#00B4F7 !important",
    borderRadius: "8px !important",
    color: "#fff !important",
    width: "260px !important",
    height: "48px !important",
    textTransform: "uppercase",
    paddingTop: "4px !important",
  },
  createRealmButton: {
    background: "#7535FB !important",
    borderRadius: "8px !important",
    color: "#fff !important",
    width: "230px !important",
    height: "48px !important",
    textTransform: "uppercase",
    paddingTop: "4px !important",
  },
  filterItem: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Grifter",
    textTransform: "capitalize",
    color: "#ffffff70",
    cursor: "pointer",
    padding: "15px 24px",
    borderRadius: "63px",
    background: "rgba(255, 255, 255, 0.1)",
    marginRight: 12,
  },
  select: {
    marginTop: "8px",
    background: "#212121",
    padding: "8px 12px",
    "& + &": {
      marginLeft: 10,
    },
    "& .MuiSelect-root": {
      padding: "0px 4px",
      fontFamily: "Rany",
      fontWeight: 700,
      fontSize: 14,
      color: "rgba(255, 255, 255, 0.5)",
      marginRight: 8,
      "&:focus": {
        backgroundColor: "unset",
      },
      "& svg": {
        width: 18,
        height: 18,
      },
      "& span": {
        fontSize: 14,
        fontWeight: 700,
        color: "#E9FF26",
      },
    },
    "& svg path": {
      stroke: "#E9FF26",
    },
  },
  optionSection: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      justifyContent: "flex-end",
    },
  },
  selectedFilterItem: {
    background: "#fff !important",
    color: "#151515 !important",
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "capitalize",
  },
  typo1: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Rany",
  },
  typo2: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  typo3: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo4: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Rany",
  },
  typo5: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Grifter",
  },
  typo6: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Rany",
    lineHeight: "140%",
  },
  typo7: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: "Grifter",
    textTransform: "capitalize",
  },
}));

export const useFilterSelectStyles = makeStyles({
  paper: {
    marginTop: "10px",
    marginLeft: "-13px",
    background: "#212121",
    boxShadow: "0px 15px 35px -31px rgba(13, 12, 62, 0.19)",
    color: "rgba(255, 255, 255, 0.5)",
    "& svg": {
      width: 18,
      height: 18,
      marginRight: 8,
    },
  },
  list: {
    padding: "20px 8px!important",
    paddingRight: 8,
    "& .MuiListItem-root": {
      marginBottom: 10,
      padding: "2px 8px",
      minWidth: "200px",
      Height: "36px",
      "&:last-child": {
        marginBottom: 0,
      },
      "&:hover": {
        color: "white",
        border: "solid 1px #E9FF26",
      },
    },
  },
});
