import { makeStyles } from "@material-ui/core/styles";

export const useTransactionProgressModalStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "788px !important",
    fontSize: "18px",
    lineHeight: "23px",
    textAlign: "center",
    padding: "100px 65.5px 80px !important",
    background: "#0B151C !important",
    borderRadius: "0px !important",
    [theme.breakpoints.down("xs")]: {
      padding: "100px 10px 80px !important",
      fontSize: 16,
    },
  },
  title: {
    fontFamily: "GRIFTER",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "24px",
    lineHeight: "120%",
    textAlign: "center",
    textTransform: "uppercase",
    flex: "none",
    color: "#fff",
    order: 0,
    flexGrow: 0,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  iconContainer: {
    width: "135px",
    height: "135px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #FFFFFF25",
    boxSizing: "border-box",
    borderRadius: "50%",
    position: "relative",
  },
  chainImage: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  buttonCheck: {
    fontSize: "16px",
    fontWeight: 700,
    fontFamily: "GRIFTER",
    lineHeight: "120%",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 4px",
    mixBlendMode: "normal",
    border: "2px solid #ffffff80",
    borderRadius: "40px",
    marginTop: "38px",
    background: "transparent",
  },
  button: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 26px",
    width: "289px",
    minWidth: "fit-content",
    maxWidth: "80%",
    background: "#4218B5",
    borderRadius: "10px",
    color: "white",
    fontFamily: "Grifter",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "21px",
  },
  hash: {
    cursor: "pointer",
    color: "#fff",
    marginTop: 20,
    fontSize: 16,
    fontFamily: "Rany",
    fontWeight: 300,
  },
  doneButton: {
    background: "linear-gradient(92.31deg, #EEFF21 -2.9%, #B7FF5C 113.47%)",
    height: 48,
    width: 250,
    marginTop: "38px",
    color: "#212121",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "GRIFTER",
    textTransform: "uppercase",
    borderRadius: 100,
  },
}));
