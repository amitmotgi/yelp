import Yelp from 'yelp';
import {
  oauth_consumer_key,
  oauth_token,
  oauth_token_secret,
  oauth_signature
} from './Oauth';

/* Oauth 1.0 single legged Auth */
const yelp = new Yelp({
  consumer_key: oauth_consumer_key,
  consumer_secret: oauth_signature,
  token: oauth_token,
  token_secret: oauth_token_secret
});

/**
 * Method to query the Yelp
 * @param - {String} - Query strings for Yelp Search
 * @returns - {Object} - Final JSON search response
 */
const Search = (input) => {
  return yelp.search(
    {
      term: input.find || "Restaurants",
      location: input.near || "San Franscisco"
    }
  ).then((data) => {
    return data;
  }).catch((err) => {
    return err;
  });
};

export default Search;
