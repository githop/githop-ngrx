import {CardContent, ResumeCard, ResumeStore} from '../models/resume';
import {Observable} from 'rxjs/Observable';
/**
 * Created by githop on 5/22/17.
 */

export function resumeCards(): (state) => Observable<CardContent[]> {
  return (state) => {
    return state
      .map(({cards, accomplishments}: ResumeStore) => {
        return cards.reduce((newCards, card) => {
          const _card = Object.assign({}, card);
          if (card.accomplishmentKeys) {
            _card.accomplishments = accomplishments.filter(a => a.parentKey === card.$key);
          }
          newCards.push(_card);
          return newCards;
        }, []);
      });
  };
}

export function groupByCardType(): (state) => Observable<ResumeCard[]> {
  return (state) => {
    return state
      .let(resumeCards())
      .map((cards: CardContent[]) => {
        const grouped = cards.reduce((obj, card) => {
          if (obj[card.type] && obj[card.type].length) {
            obj[card.type].push(card);
          } else {
            obj[card.type] = [card];
          }
          return obj;
        }, {});

        return (<any>Object).keys(grouped)
          .map(key => {
            key = {title: key, contents: grouped[key] };
            return key;
          });
      });
  };
}
