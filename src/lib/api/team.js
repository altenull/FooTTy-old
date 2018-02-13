// @flow
import axios from 'axios';

export const getAllPlayer = (currentTeam: string): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${currentTeam}`);