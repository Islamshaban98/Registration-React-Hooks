export default function Welcome({ handelLogout }) {
  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        display: "flex",
        backgroundColor: "#dfe6e9",
        flexDirection: "column",
        alignItems: "center",
        padding: "20% 0",
      }}
    >
      <p style={{ textAlign: "center", padding: "10px", fontSize: "50px" }}>
        Hello, welcome home
      </p>
      <input
        style={{
          width: "20%",
          height: "20%",
          padding: "10px",
          fontSize: "20px",
          background: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
          color: "#000000",
          border: "none",
          borderRadius: "5px",
        }}
        type="submit"
        onClick={handelLogout}
        value="logout"
      />
    </div>
  );
}
