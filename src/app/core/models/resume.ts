import {FirebaseListObservable} from 'angularfire2/database';
/**
 * Created by githop on 5/21/17.
 */

export interface ResumeStore {
  cards: CardContent[];
  accomplishments: CardAccomplishment[];
}

export type CardTypes = 'experience' | 'sideProjects' | 'talks' | 'startup' | 'education' | 'other';

export interface CardContent {
  $key?: string;
  type: CardTypes;
  title: string;
  link?: string;
  date: string;
  description: string;
  position?: string;
  accomplishments?: Partial<CardAccomplishment>[];
  accomplishmentKeys?: string[];
}

export interface ResumeCard {
  type: string;
  content: CardContent[];
}

export interface CardAccomplishment {
  parentKey: string;
  text: string;
}

export const initialResumeState = {
  cards: [],
  accomplishments: []
};

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

type TitleMap = {
  [P in CardTypes]: string;
};

export const titleMap: TitleMap = {
  'experience': 'Professional Experience',
  'sideProjects': 'Side Projects',
  'talks': 'Community / Talks',
  'startup': 'Hackathons',
  'education': 'Education',
  'other': 'Other'
};
