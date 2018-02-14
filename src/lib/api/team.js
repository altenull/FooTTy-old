// @flow
import axios from 'axios';

const apiKey = process.env.REACT_APP_APIKEY;

export const getAllPlayer = (currentTeam: string): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?t=${currentTeam}`);