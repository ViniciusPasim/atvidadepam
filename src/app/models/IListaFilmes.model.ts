import { IFilme } from './IFilme.model';

/* eslint-disable @typescript-eslint/naming-convention */
export interface IListaFilmes {
  page?: number;
  results?: IFilme[];
  total_results?: number;
  total_pages?: number;
}
