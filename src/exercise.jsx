import UserCard from "./UserCard";
import { posts } from "./data";

function Exercise() {
  return (
    <div style={{ padding: "20px", background: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        User Cards
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <UserCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"></div>

export default Exercise;