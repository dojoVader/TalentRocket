export interface FlickerSearchConfiguration {
  tags: string;
  perPage: number;
  extras: string[];
  sort: 'interestingness-asc' | 'interestingness-desc' | 'taken-desc' | 'date-posted-asc',
  format: 'json' | 'rest',
  user_id?: string
}

export interface FlickerSearchResults {
  photos: FlickerPhotoResult;
  stats: string
  searchText: string;
}

export interface FlickerPhotoResult {
  page:number;
  pages:number;
  perpage:number;
  total:number;
  photo: Array<FlickerPhotoPayload>
}

export interface FlickerPhotoPayload{
  id:string;
  owner:string;
  secret:string;
  server:string;
  farm:number;
  title:string;
  ispublic:boolean;
  isfriend:boolean;
  isfamily: boolean;
  dateupload:string;
  datetaken:string;
  datetakengranularity: number;
  datetakenunknown:number;
  ownername:string;
  views:number;
  url_q:string;
  url_sq:string;
  url_o:string;
  height_q:number;
  width_q:number
}
