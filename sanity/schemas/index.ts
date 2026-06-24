import author from "./author";
import blogPost from "./blogPost";
import blockContent from "./blockContent";
import category from "./category";
import seo from "./seo";
import tag from "./tag";

export const schemaTypes = [
  // Documents
  blogPost,
  author,
  category,
  tag,
  // Objects
  blockContent,
  seo,
];
