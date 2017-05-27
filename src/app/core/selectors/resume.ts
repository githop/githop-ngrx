import {CardContent, ResumeCard, ResumeStore} from '../models/resume';
import {Observable} from 'rxjs/Observable';
/**
 * Created by githop on 5/22/17.
 */

export function resumeCards(): (state: any) => any {
  return (state) => {
    return state
      .map(([resumeStore, filter]: any) => {
        const {cards, accomplishments} = resumeStore;
        const newResumeCards =  cards.reduce((newCards: CardContent[], card: CardContent) => {
          const _card: CardContent = Object.assign({}, card);
          if (card.accomplishmentKeys) {
            _card.accomplishments = accomplishments.filter((a: any) => a.parentKey === card.$key);
          }
          newCards.push(_card);
          return newCards;
        }, []);

        return [newResumeCards, filter];
      });
  };
}

export function groupByCardType(): (state: any) => Observable<any> {
  return (state) => {
    return state
      .let(resumeCards())
      .map(([cards, filter]: any) => {
        const grouped = cards.reduce((obj: any, card: CardContent) => {
          if (obj[card.type]  && obj[card.type].length) {
            obj[card.type].push(card);
          } else {
            obj[card.type] = [card];
          }
          return obj;
        }, {});

        const resumeCards = (<any>Object).keys(grouped)
          .map((key: any) => {
            key = {type: key, contents: grouped[key] };
            return key;
          });
        return [resumeCards, filter];
      });
  };
}

export function showResumeCards() {
  return (state: any) => {
    return state
      .let(groupByCardType())
      .map(([cards, filter]: any) => {
      return cards.filter(filter);
      });
  };
}
