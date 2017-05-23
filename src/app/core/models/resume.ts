import {FirebaseListObservable} from 'angularfire2/database';
/**
 * Created by githop on 5/21/17.
 */

export interface ResumeStore {
  cards: CardContent[];
  accomplishments: CardAccomplishment[];
}

export interface CardContent {
  $key?: string;
  type: 'experience' | 'sideProjects' | 'talks' | 'startup' | 'education' | 'other';
  title: string;
  link?: string;
  date: string;
  description: string;
  position?: string;
  accomplishments?: Partial<CardAccomplishment>[];
  accomplishmentKeys?: string[];
}

export interface ResumeCard {
  title: string;
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

