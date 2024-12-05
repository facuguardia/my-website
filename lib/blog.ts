import { posts } from "@/content/blog/posts";
import { BlogPost } from "@/types/blog";

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 