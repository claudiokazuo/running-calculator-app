export default function Footer() {
  return (
    <footer style={{ marginTop: "auto", marginBottom: "auto" }}>
      <div className="text-center p-3" style={{ backgroundColor: "#000000" }}>
        &copy; {new Date().getFullYear()} Claudio Hirakawa
      </div>
    </footer>
  );
}
