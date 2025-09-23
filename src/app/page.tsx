import Blogs from "./components/Blogs";
import NewsLetter from "./components/NewsLetter";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects />
      <Blogs />
      <NewsLetter />
    </>
  );
}
