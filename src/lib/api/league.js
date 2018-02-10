// @flow
import axios from 'axios';

export const getLatestSeason = (leagueId: string): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}&s=all`);

type getLeagueTablePayload = {
  leagueId: string,
  latestSeason: string
};

export const getLeagueTable = ({ leagueId, latestSeason }: getLeagueTablePayload): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${leagueId}&s=${latestSeason}`);

// leagues배열 안에 strWebsite, strFacebook, strTwitter, strYoutube, strBadge(imgUrl)
export const getLeagueDetails = (leagueId: string): Promise<*> => axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`);