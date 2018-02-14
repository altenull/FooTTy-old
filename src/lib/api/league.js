// @flow
import axios from 'axios';
import { leagueInfo } from 'lib/variables';

const apiKey = process.env.REACT_APP_APIKEY;

export const getLatestSeason = (leagueId: string): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupleague.php?id=${leagueId}&s=all`);

export type getLeagueTablePayload = {
  leagueId: string,
  latestSeason: string
};

export const getLeagueTable = ({ leagueId, latestSeason }: getLeagueTablePayload): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptable.php?l=${leagueId}&s=${latestSeason}`);

export const getLeagueDetails = (leagueAlias: string): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?l=${leagueInfo.find(c => c.alias === leagueAlias).fullname}`);