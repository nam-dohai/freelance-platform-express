export interface Project {
  id: string;
  name: string;
  description: string;
  price: string;
  author_id: string;
  worker_id?: string | null;
  status: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;
}
