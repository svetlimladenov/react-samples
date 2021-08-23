export default function Row({ children }) {
  const style = {
    border: "1px solid black",
    borderLeft: "none",
    borderRight: "none",
    padding: "20px",
    marginTop: "30px"
  };

  return <div style={style}>{children}</div>;
}
