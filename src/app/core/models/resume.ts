import {FirebaseListObservable} from 'angularfire2/database';
/**
 * Created by githop on 5/21/17.
 */

export interface ResumeStore {
  cards: FirebaseListObservable<CardContent[]>;
  accomplishments: FirebaseListObservable<CardAccomplishment[]>;
}

export interface CardContent {
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
  contentKeys?: string[];
}

export interface CardAccomplishment {
  $key: string;
  text: string;
}

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

