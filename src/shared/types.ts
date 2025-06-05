export interface Event {
  content: string;
  cover: string;
  createTime: string;
  description: string;
  enable: boolean;
  homeSelected: boolean;
  id: number;
  rawContent: string;
  selected: boolean;
  title: string;
  updateTime: string;
}

export interface EventResponse {
  code: number;
  data: Event[];
  message: string;
  success: boolean;
}