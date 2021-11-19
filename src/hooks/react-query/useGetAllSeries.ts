import { useQuery } from 'react-query'
import { API_BASE_URL, QUERY_KEYS} from '../../util';
import axios, { AxiosError } from 'axios';
import { Series } from '../../types';

const {series} = QUERY_KEYS;

export const useGetAllSeries = () => {
    return useQuery<Series[], AxiosError>([series], async () => {
        const { data } = await axios.get(/* `${API_BASE_URL}/series` */'/test-series.json');
        return data;
    }, {
        onError: (error) => {
            console.log(error)
        }
    })
}