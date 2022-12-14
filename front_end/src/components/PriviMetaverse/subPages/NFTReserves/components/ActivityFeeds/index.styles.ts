import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    background: "#212121",
    border: "2px solid #151515",
    width: 360,
    flex: 1,
    position: "relative",
    padding: "22px 32px 8px 19px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "22px 8px 8px",
    },
  },
  collapseIcon: {
    position: "absolute",
    top: "16px",
    right: "18px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      top: 5,
      right: 10,
    },
  },
  switch: {
    width: 256,
    height: 47,
    background: "#151515",
    padding: 7,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Grifter",
    cursor: "pointer",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: 234,
      marginTop: 10,
      fontSize: 12,
    },
    [theme.breakpoints.down("xs")]: {
      width: 256,
    },
  },
  switchButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 133,
    height: 33,
    borderRadius: 2,
    paddingTop: 4,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  content: {
    marginTop: 21,
    overflowY: "scroll",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      height: 263,
      marginTop: 12,
    },
    [theme.breakpoints.down("sm")]: {
      height: 306,
    },
  },
  typeTag: {
    borderRadius: 4,
    padding: "9px 8px 7.5px",
    fontSize: 10,
    fontFamily: "Grifter",
    fontWeight: 700,
    color: "#212121",
  },
  orderTag: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "Rany",
    color: "#E9FF26",
    background: "#313321",
    borderRadius: 4,
    padding: "11px 7px",
  },
  typo1: {
    fontSize: 16,
    fontFamily: "Grifter",
    fontWeight: 700,
    color: "#fff",
  },
  typo2: {
    fontSize: 14,
    fontFamily: "Rany",
    fontWeight: 400,
    color: "#ffffff50",
    width: "150px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));
