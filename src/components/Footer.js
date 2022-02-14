export default function Footer() {
  return (
    <footer
      style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#000000", color: "#F3F3F3" }}
      >
        &copy; {new Date().getFullYear()} Claudio Hirakawa
      </div>
    </footer>
  );
}
