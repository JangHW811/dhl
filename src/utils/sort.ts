import moment from 'moment';

export const sortString = (word1: string, word2: string) => {
  if (word1 < word2) {
    return 1;
  } else {
    return -1;
  }
};
export const sortDate = (word1: string | moment.Moment, word2: string | moment.Moment) => {
  const date1 = moment(word1);
  const date2 = moment(word2);
  if (!date1.isValid() || !date2.isValid()) {
    return 0;
  }
  if (date1 < date2) {
    return 1;
  } else {
    return -1;
  }
};
