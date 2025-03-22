import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },
  icon: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  input: {
    width: 220,
    height: 40,
    borderColor: "#dc143c",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#dc143c",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});