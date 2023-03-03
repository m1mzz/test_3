export type ActivityTypes = 'task' | 'deal';
export type ActivityPriority = 'low' | 'high' | 'urgent';

export type ActivityChild = {
  type: ActivityTypes;
  title: string;
  description: string;
  status: string;
  priority: ActivityPriority;
  date: string;
};

export type Activity = {
  title: string;
  isExpanded: boolean;
  counter: number;
  timelines: ActivityChild[]
};
