export interface PostDTO {
  id?: number;
  title?: string;
  caption?: string;
  location?: string;
  username?: string;
  likes?: number;
  userLiked?: Set<string>;
}
