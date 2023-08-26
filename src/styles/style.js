import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  pinterestLayout_container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    alignItems: "center",
  },
  pin: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.3,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: "4%",
  },
  alt_description: {
    backgroundColor: "white",
    width: windowWidth * 0.4,
    padding: 7,
    marginLeft: "4%",
    marginBottom: "8%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  pinterestLayout: {
    margin: 0,
    padding: 0,
    height: "90%",
  },
  pin_container: {
    position: "relative",
  },
  like: {
    position: "absolute",
    top: "5%",
    left: "10%",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 5,
    borderRadius: 8,
  },
  filter_container: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    position: "relative",
  },
  filter: {
    backgroundColor: "#e3e3e3",
    width: windowWidth * 0.8,
    borderRadius: 10,
    height: 40,
    paddingLeft: 20,
  },
  search: {
    position: "absolute",
    zIndex: 1,
    top: 7,
    right: 20,
  },
  usersDownloadedImg_container: {
    width: windowWidth,
    padding: "8%",
    paddingTop: 10,
  },
  usersDownloadedImg_btn: {
    backgroundColor: "#bfbfbf",
    paddingLeft: 30,
    paddingBottom: 27,
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 100,
    right: -30,
    top: -30,
    position: "absolute",
    zIndex: 40,
  },

  modalImg: {
    width: windowWidth,
    height: windowHeight * 0.8,
    backgroundColor: "gray",
  },
  closecircleo: {
    position: "absolute",
    zIndex: 3,
    top: "5%",
    right: "10%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 30,
  },
  title: {
    padding: 20,
  },
  title_description: {
    borderTopColor: "black",
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    paddingTop: 10,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  usersDownloadedImg: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.3,
    borderRadius: 8,
    marginBottom: "4%",
  },
  savedImg_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
