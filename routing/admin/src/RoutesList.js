import {Route, Routes} from "react-router-dom";

function RoutesList() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users/:username" element={<AdminPage />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
        <Route path ="*" element={<NotFound />}
    </Routes>
  );
}

export default RoutesList;
