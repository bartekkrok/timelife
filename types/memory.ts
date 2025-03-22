export type MemoryDetails = {
  id: string; // Unique identifier for the memory
  title: string; // Memory title
  description?: string; // Optional description
  date: string; // Memory date (ISO 8601)
  createdAt: string; // Date when the memory was added (ISO 8601)
  updatedAt?: string; // Optional last updated date (ISO 8601)
  location?: {
    latitude: number;
    longitude: number;
    placeName?: string; // Optional place name
  };
  media?: {
    type: 'image' | 'video' | 'audio' | 'document';
    url: string; // URL of the file
    thumbnailUrl?: string; // Optional thumbnail preview for images and videos
    title?: string; // Optional media title
  }[];
  tags?: string[]; // List of tags
  isPrivate: boolean; // Whether the memory is private
  sharedWith?: string[]; // List of user IDs with whom the memory is shared
};

export type MemoryShortDetails = {
  id: string; // Unique identifier for the memory
  title: string; // Memory title
  date: string; // Memory date (ISO 8601)
  thumbnailUrl: string | null;
  isPrivate: boolean; // Whether the memory is private
  isFavorite?: boolean; // Optional flag to mark the memory as favorite
};
