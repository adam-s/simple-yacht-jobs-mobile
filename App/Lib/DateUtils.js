import moment from 'moment';

const FORMAT_SHORT = 'short';
const FORMAT_MEDIUM = 'medium';
const FORMAT_LONG = 'long';

const DATE_FORMAT_SHORT = 'DD-MM-YY';
const DATE_FORMAT_MEDIUM = '';
const DATE_FORMAT_LONG = 'MMMM DD, YYYY';

export const formatDate = (date = '', formatType = FORMAT_MEDIUM) => {
  let format = '';

  switch(formatType) {
    case FORMAT_SHORT:
      format = DATE_FORMAT_SHORT;
      break;
    case FORMAT_MEDIUM:
      format = DATE_FORMAT_MEDIUM;
      break;
    case FORMAT_LONG:
      format = DATE_FORMAT_LONG;
      break;
    default:
      format = formatType;
  }

  return moment(date).format(format);
}
