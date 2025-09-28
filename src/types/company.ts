export interface Company {
  name: string;
  description: string;
  logo: string;
  image: string;
  investors: number;
  audience: number;
  location: string;
  star: number;
  categoryId: string; // 👈 فقط categoryId میشه
  news: {
    pic: string;
    title: string;
    description: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
  };
}
