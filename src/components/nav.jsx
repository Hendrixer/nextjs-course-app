/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Nav = () => (
  <header
    sx={{
      height: "60px",
      width: "100vw",
      bg: "primary",
      borderBottom: "1px solid",
      borderColor: "primary",
    }}
  >
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        variant: "containers.page",
        height: "100%",
      }}
    >
      <Link href="/">
        <a sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}>
          Note App
        </a>
      </Link>

      <Link href="/notes">
        <a sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>notes</a>
      </Link>
    </nav>
  </header>
);

export default Nav;
