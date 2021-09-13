let BASE_URL = '';
const TIME_OUT = 5000;

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.xxx.com/';
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://www.xxx.com/';
} else {
  BASE_URL = 'http://www.xxx.com/';
}
export { BASE_URL, TIME_OUT };
